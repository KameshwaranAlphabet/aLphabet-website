import React, { useEffect, useRef } from 'react';
import * as THREE from 'three'; // Import three.js

const AboutUsDetailPage = ({ navigateTo }) => {
  const mountRef = useRef(null); // Ref for the div where the 3D scene will be mounted
  
  // State for camera orbit parameters
  const cameraOrbit = useRef({
    radius: 5, // Distance of camera from the center
    theta: Math.PI / 2, // Horizontal angle (starts facing front)
    phi: Math.PI / 2    // Vertical angle (starts looking horizontally)
  });
  const isDragging = useRef(false);
  const previousMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f8ff); // Light background color

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    // Initial camera position calculated from orbit parameters
    camera.position.x = cameraOrbit.current.radius * Math.sin(cameraOrbit.current.phi) * Math.cos(cameraOrbit.current.theta);
    camera.position.y = cameraOrbit.current.radius * Math.cos(cameraOrbit.current.phi);
    camera.position.z = cameraOrbit.current.radius * Math.sin(cameraOrbit.current.phi) * Math.sin(cameraOrbit.current.theta);
    camera.lookAt(scene.position);


    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 2); // soft white light
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // --- Create a simple 3D School Model ---

    // Main Building (larger box)
    const buildingGeometry = new THREE.BoxGeometry(3, 2, 1.5);
    const buildingMaterial = new THREE.MeshLambertMaterial({ color: 0xADD8E6 }); // Light blue
    const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
    building.position.set(0, 0, 0);
    scene.add(building);

    // Roof (pyramid/cone or slanted box)
    const roofGeometry = new THREE.CylinderGeometry(0.01, 1.6, 1, 4); // cone shape for a roof
    const roofMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); // Brown
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.set(0, 1.5, 0); // Position on top of the building
    roof.rotation.y = Math.PI / 4; // Rotate to align with square base
    scene.add(roof);

    // Door
    const doorGeometry = new THREE.BoxGeometry(0.5, 1, 0.1);
    const doorMaterial = new THREE.MeshLambertMaterial({ color: 0x5C4033 }); // Dark brown
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, -0.5, 0.75 + 0.05); // Front of building
    scene.add(door);

    // Windows (simple planes/thin boxes)
    const windowGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.1);
    const windowMaterial = new THREE.MeshLambertMaterial({ color: 0x87CEEB }); // Sky blue for glass
    
    const window1 = new THREE.Mesh(windowGeometry, windowMaterial);
    window1.position.set(-1, 0.3, 0.75 + 0.05);
    scene.add(window1);

    const window2 = new THREE.Mesh(windowGeometry, windowMaterial);
    window2.position.set(1, 0.3, 0.75 + 0.05);
    scene.add(window2);

    // Side windows
    const window3 = new THREE.Mesh(windowGeometry, windowMaterial);
    window3.position.set(-1.5 - 0.05, 0.3, 0);
    window3.rotation.y = Math.PI / 2;
    scene.add(window3);

    const window4 = new THREE.Mesh(windowGeometry, windowMaterial);
    window4.position.set(1.5 + 0.05, 0.3, 0);
    window4.rotation.y = -Math.PI / 2;
    scene.add(window4);

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x90EE90 }); // Light green for grass
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2; // Rotate to be horizontal
    ground.position.y = -1; // Below the building
    scene.add(ground);


    // Camera rotation controls (mouse drag)
    const onMouseDown = (event) => {
      isDragging.current = true;
      previousMouse.current.x = event.clientX;
      previousMouse.current.y = event.clientY;
    };

    const onMouseMove = (event) => {
      if (!isDragging.current) return;

      const deltaX = event.clientX - previousMouse.current.x;
      const deltaY = event.clientY - previousMouse.current.y;

      cameraOrbit.current.theta += -deltaX * 0.01; // Adjust sensitivity
      cameraOrbit.current.phi += deltaY * 0.01;   // Adjust sensitivity

      // Clamp phi to prevent camera from flipping over (range from slightly above to slightly below)
      cameraOrbit.current.phi = Math.max(0.1, Math.min(Math.PI - 0.1, cameraOrbit.current.phi));

      // Calculate new camera position based on spherical coordinates
      camera.position.x = cameraOrbit.current.radius * Math.sin(cameraOrbit.current.phi) * Math.cos(cameraOrbit.current.theta);
      camera.position.y = cameraOrbit.current.radius * Math.cos(cameraOrbit.current.phi);
      camera.position.z = cameraOrbit.current.radius * Math.sin(cameraOrbit.current.phi) * Math.sin(cameraOrbit.current.theta);

      // Keep camera looking at the scene origin (where the school model is)
      camera.lookAt(scene.position);

      previousMouse.current.x = event.clientX;
      previousMouse.current.y = event.clientY;
    };

    const onMouseUp = () => {
      isDragging.current = false;
    };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseup', onMouseUp);

    // Responsive handling
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) { // Ensure elements exist before removing
        mountRef.current.removeChild(renderer.domElement);
      }
      // Dispose of geometries and materials to free up memory
      buildingGeometry.dispose();
      buildingMaterial.dispose();
      roofGeometry.dispose();
      roofMaterial.dispose();
      doorGeometry.dispose();
      doorMaterial.dispose();
      windowGeometry.dispose();
      windowMaterial.dispose();
      groundGeometry.dispose();
      groundMaterial.dispose();
      renderer.dispose();
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="container mx-auto px-4 py-16 md:py-20 max-w-7xl bg-white rounded-2xl shadow-lg my-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center border-b-4 border-yellow-500 pb-2 inline-block mx-auto block">More About SchoolName</h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Discover the heart of our institution, our rich history, and the values that guide us.
      </p>

      {/* 3D Model Section */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b-2 border-blue-300 pb-2">Explore Our Campus in 3D!</h2>
        <div
          ref={mountRef}
          className="w-full bg-blue-50 border border-blue-200 rounded-xl shadow-inner cursor-grab active:cursor-grabbing"
          style={{ height: '500px', maxWidth: '800px' }}
        >
          {/* three.js canvas will be appended here */}
        </div>
        <p className="text-gray-600 text-center mt-4 text-sm">
          Click and drag your mouse on the 3D model above to rotate and explore our school building.
        </p>
      </div>

      {/* Detailed About Us Content */}
      <div className="prose lg:prose-xl mx-auto max-w-none text-gray-700">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4 mt-8">Our Rich History</h2>
        <p>
          Founded in 19XX by a group of visionary educators, SchoolName began as a small community school with a profound commitment to academic excellence and character development. Over the decades, we have grown, evolved, and adapted to the changing educational landscape, but our core values remain steadfast. We pride ourselves on a legacy of nurturing inquisitive minds and preparing students to make meaningful contributions to society.
        </p>
        <p>
          From humble beginnings, we have expanded our facilities and programs, always with the goal of providing a cutting-edge and supportive learning environment. Our alumni have gone on to achieve great success in various fields, a testament to the strong foundation they received here.
        </p>

        <h2 className="text-3xl font-semibold text-blue-700 mb-4 mt-8">Mission & Vision</h2>
        <p>
          <strong>Our Mission:</strong> To inspire a love for lifelong learning, foster critical thinking, and cultivate compassionate citizens who are prepared to lead with integrity and innovation.
        </p>
        <p>
          <strong>Our Vision:</strong> To be a beacon of educational excellence, recognized for our innovative pedagogical approaches, inclusive community, and commitment to unlocking the full potential of every student. We envision a future where our graduates are empowered to shape a better world.
        </p>

        <h2 className="text-3xl font-semibold text-blue-700 mb-4 mt-8">Faculty & Staff</h2>
        <p>
          At the heart of SchoolName is our exceptional team of dedicated faculty and staff. Our educators are not just teachers; they are mentors, innovators, and lifelong learners themselves. With a wealth of experience and a passion for their subjects, they create engaging and dynamic classrooms where students feel challenged, supported, and inspired.
        </p>
        <p>
          We are committed to continuous professional development, ensuring that our teaching methods remain at the forefront of educational best practices. Our low student-to-teacher ratio allows for personalized attention, fostering strong relationships and a deeper understanding of individual learning needs.
        </p>
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => navigateTo('home')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AboutUsDetailPage;
