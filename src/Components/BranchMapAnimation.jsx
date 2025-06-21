// src/components/BranchMapAnimation.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

// New Component for Branch Map Animation (3D)
const BranchMapAnimation = () => {
  const mountRef = useRef(null);
  const mapPinRef = useRef(null);
  const lineRef = useRef(null); // Ref for the animated line segment

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f8ff); // Light background

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 100);
    camera.position.set(0, 5, 10); // Elevated view for map
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Ground/Map Base
    const groundGeometry = new THREE.PlaneGeometry(20, 15);
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x8BC34A }); // Greenish ground
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2; // Rotate to lie flat
    scene.add(ground);

    // Campus Locations
    const campus1Pos = new THREE.Vector3(-5, 0.1, 0);
    const campus2Pos = new THREE.Vector3(5, 0.1, 0);

    const campusGeometry = new THREE.SphereGeometry(0.5, 32, 16);
    const campusMaterial1 = new THREE.MeshPhongMaterial({ color: 0xFF5722, emissive: 0xCC4010 }); // Orange-red
    const campusMaterial2 = new THREE.MeshPhongMaterial({ color: 0x2196F3, emissive: 0x1A7BBF }); // Blue

    const campus1 = new THREE.Mesh(campusGeometry, campusMaterial1);
    campus1.position.copy(campus1Pos);
    scene.add(campus1);

    const campus2 = new THREE.Mesh(campusGeometry, campusMaterial2);
    campus2.position.copy(campus2Pos);
    scene.add(campus2);

    // Map Pin (Traveler)
    const pinGeometry = new THREE.ConeGeometry(0.2, 0.8, 32);
    const pinMaterial = new THREE.MeshPhongMaterial({ color: 0xFFEB3B, emissive: 0xDDAA00 }); // Yellow
    mapPinRef.current = new THREE.Mesh(pinGeometry, pinMaterial);
    mapPinRef.current.rotation.x = Math.PI / 2; // Point up
    mapPinRef.current.position.copy(campus1Pos); // Start at Campus 1
    mapPinRef.current.position.y += 0.8; // Lift off the ground
    scene.add(mapPinRef.current);

    // Path (Wave-like line)
    // Points for a smoother, more pronounced wave
    const pathPoints = [
        campus1Pos.clone().setY(0.1),
        new THREE.Vector3(-3, 0.8, 3), // Higher point
        new THREE.Vector3(0, 0.1, 0),
        new THREE.Vector3(3, 0.8, -3), // Higher point
        campus2Pos.clone().setY(0.1)
    ];
    const curve = new THREE.CatmullRomCurve3(pathPoints, false); // False for open curve

    // Background line (always visible)
    const fullLineGeometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(100)); // More points for smoother line
    const fullLineMaterial = new THREE.LineBasicMaterial({ color: 0x90A4AE, linewidth: 2 }); // Grey background line
    const fullLine = new THREE.Line(fullLineGeometry, fullLineMaterial);
    scene.add(fullLine);

    // Animated "traveling" line segment
    const segmentGeometry = new THREE.BufferGeometry();
    const segmentMaterial = new THREE.LineBasicMaterial({ color: 0x4CAF50, linewidth: 3 }); // Green traveling line
    lineRef.current = new THREE.Line(segmentGeometry, segmentMaterial);
    scene.add(lineRef.current);


    // Animation Logic
    let progress = 0; // 0 to 1 for curve traversal
    let direction = 1; // 1 for forward, -1 for backward
    let pauseTimer = 0;
    const travelSpeed = 0.0008; // How fast the pin travels
    const pauseDuration = 1000; // 1 second pause at each campus

    const animate = () => {
      requestAnimationFrame(animate);

      if (pauseTimer > 0) {
        pauseTimer -= 16; // Decrement by ~frame time (ms)
      } else {
        progress += travelSpeed * direction;

        if (direction === 1 && progress >= 1) {
          progress = 1;
          direction = -1; // Reverse direction
          pauseTimer = pauseDuration; // Pause at end
        } else if (direction === -1 && progress <= 0) {
          progress = 0;
          direction = 1; // Reverse direction
          pauseTimer = pauseDuration; // Pause at start
        }

        // Update map pin position
        const point = curve.getPointAt(progress);
        mapPinRef.current.position.copy(point);
        mapPinRef.current.position.y += 0.8; // Maintain height above the path

        // Update traveling line segment
        const segmentPoints = curve.getPoints(100).slice(0, Math.floor(progress * 100));
        lineRef.current.geometry.setFromPoints(segmentPoints);
      }

      renderer.render(scene, camera);
    };

    // Responsive handling
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    animate(); // Start the animation loop

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      groundGeometry.dispose();
      groundMaterial.dispose();
      campusGeometry.dispose();
      campusMaterial1.dispose();
      campusMaterial2.dispose();
      pinGeometry.dispose();
      pinMaterial.dispose();
      fullLineGeometry.dispose();
      fullLineMaterial.dispose();
      segmentGeometry.dispose();
      segmentMaterial.dispose();
      renderer.dispose();
    };
  }, []); // Empty dependency array means this effect runs once on mount and unmount

  return (
    <div
      ref={mountRef}
      className="w-full max-w-2xl h-96 bg-blue-50 border border-blue-200 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden"
    >
      {/* three.js canvas will be appended here */}
    </div>
  );
};

export default BranchMapAnimation;
