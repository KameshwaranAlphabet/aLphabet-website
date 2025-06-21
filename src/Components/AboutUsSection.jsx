// src/components/AboutUsSection.jsx
import React, { useState, useEffect } from 'react';

// About Us Section
const AboutUsSection = ({ navigateTo }) => {
  // Array of image URLs for the slider. You can add more campus images here.
  const images = [
    "https://assets-alphabet-prod.s3.ap-south-1.amazonaws.com/assets/hero/h1.jpeg",
    "https://assets-alphabet-prod.s3.ap-south-1.amazonaws.com/assets/Main-Pic.png", // Assuming this is your second campus image
    // Add more image URLs as needed, e.g., "https://assets-alphabet-prod.s3.ap-south-1.amazonaws.com/assets/hero/h3.jpeg"
  ];

  // State to keep track of the currently displayed image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect hook for auto-playing the slider
  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image, or loop back to the first image if at the end
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds (5000 milliseconds)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]); // Re-run effect if the number of images changes

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="about-us" className="py-16 bg-white rounded-3xl shadow-xl mb-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="lg:w-1/2 lg:pr-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 border-b-4 border-yellow-400 pb-2 inline-block">About Our School</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            aLphabet internationaL schooL, situated in Chennai, India, is an IB Continuum School providing high-quality education to a diverse community of 1200+ students and 150 staff for over 14 years. Through a rigorous and intellectually stimulating education, we strive to inculcate in our students a passion for lifelong learning, self-confidence, and creativity.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We offer the IB Primary Years, Middle Years, and Diploma Programs to ensure an education that fosters analytical and critical thinking. Our dedication to multiculturalism and inclusivity is mirrored in aLphabet's student body, which comprises students from varied cultures and backgrounds, and we endeavor to establish a welcoming and inclusive community.
          </p>
          <button
            onClick={() => navigateTo('aboutDetail')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Read More About Us
          </button>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center h-96 relative overflow-hidden rounded-2xl">
          {/* Image Slider */}
          <img
            // Dynamically set the image source based on currentImageIndex
            src={images[currentImageIndex]}
            alt={`School Campus ${currentImageIndex + 1}`}
            // Tailwind classes for styling, including transition for smooth fade effect
            className="w-full h-full object-cover shadow-lg border-b-4 border-blue-100 transition-opacity duration-1000 ease-in-out"
            // Error handling for image loading
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/000000?text=Image+Error'; }}
          />

          {/* Navigation Buttons (Previous and Next) */}
          <button
            onClick={goToPrevSlide}
            // Absolute positioning for left arrow
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none transition-all duration-300"
            aria-label="Previous image"
          >
            &#10094; {/* Unicode character for left arrow */}
          </button>
          <button
            onClick={goToNextSlide}
            // Absolute positioning for right arrow
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none transition-all duration-300"
            aria-label="Next image"
          >
            &#10095; {/* Unicode character for right arrow */}
          </button>

          {/* Dots for navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index} // Unique key for each button
                onClick={() => setCurrentImageIndex(index)} // Set current image on dot click
                className={`w-3 h-3 rounded-full ${
                  // Conditional styling: blue if active, gray if inactive
                  index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                } hover:bg-blue-500 focus:outline-none transition-colors duration-300`}
                aria-label={`Go to image ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
