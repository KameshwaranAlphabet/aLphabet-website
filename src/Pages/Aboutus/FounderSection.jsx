// src/pages/FounderSection.jsx
import React, { useEffect } from 'react'; // Import useEffect for scrolling
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const FounderSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Effect hook to scroll to the top of the current page when this component mounts
  // This ensures that if a user navigates directly to this page or refreshes it,
  // they start at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only once on mount

  const handleNextClick = () => {
    // Navigate to the next page.
    // To ensure the *next* page loads at the top,
    // a similar `useEffect` with `window.scrollTo(0, 0)` should be added
    // to the `MissionVision` component itself.
    navigate('/about-us/mission-vision');
  };

  return (
    <div className="pb-12 bg-gray-50 min-h-screen font-inter"> {/* Added font-inter */}
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center rounded-b-lg overflow-hidden" style={{ backgroundImage: 'url("https://placehold.co/1500x500/9370DB/FFFFFF?text=Our+Visionary+Founder")' }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg animate-fade-in-down px-4">
            Our Visionary Founder
          </h1>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12 bg-white rounded-lg shadow-xl mt-8">
        <div className="md:w-1/3 flex justify-center">
          <img
            src="https://placehold.co/300x400/8A2BE2/FFFFFF?text=Founder+Image" // Placeholder image for the founder
            alt="Dr. Kavitha Saraf"
            className="rounded-lg shadow-lg object-cover w-full max-w-xs md:max-w-none md:w-auto h-auto max-h-96 transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Dr. Kavitha Saraf</h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-6">A Legacy of Education and Innovation</h3>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            aLphabet internationaL is the brainchild of Kavita Saraf, an educator whose heart and inspired mind is at the crux of the institution. Her vision to create life-long learners is evident in the carefully and intrinsically designed curriculum and teaching methods rolled out by her remarkable team of teachers. Her innate enthusiasm, commitment and passion is also driven by the aLphabet learners who she lovingly calls her babies.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            She believes that each child teaches her something new every day and her ability to unleash their potential is nothing short of extraordinary. By spending a considerable amount of time in the classrooms as one among the children, Kavita dives straight into the powerful minds surrounding her and their learning abilities.
          </p>
        </div>
      </section>

      {/* Founder's Philosophy/Quotes */}
      <section className="bg-blue-100 py-16 mt-8 rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-12">The Founder's Philosophy</h2>
          <blockquote className="bg-white p-8 rounded-lg shadow-lg italic text-xl text-gray-700 max-w-4xl mx-auto border-l-4 border-blue-600">
            "Education is not merely the filling of a pail, but the lighting of a fire. Our aim is to ignite curiosity, foster critical thinking, and inspire a lifelong passion for learning in every child."
            <footer className="mt-4 text-right text-gray-600 font-semibold">- Dr. Kavitha</footer>
          </blockquote>
        </div>
      </section>

      {/* Vision & Impact */}
      <section className="container mx-auto px-4 py-16 mt-8">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Impact & Enduring Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The enduring vision of Dr. aLphabet International School continues to resonate through every aspect of aLphabet International School. Their pioneering spirit and commitment to educational innovation have created a legacy that empowers generations of students.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are proud to carry forward their mission, adapting to the needs of modern education while staying true to the foundational principles of excellence, integrity, and community that Dr. Kavitha championed.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="https://placehold.co/600x400/AFEEEE/000000?text=Legacy+Image" alt="School Legacy" className="rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Next Button - positioned to the right corner */}
      <div className="flex justify-end pr-8 py-8"> {/* Uses flexbox to push content to the end (right) with padding */}
        <button
          onClick={handleNextClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Next Page &rarr;
        </button>
      </div>
    </div>
  );
};

export default FounderSection;
