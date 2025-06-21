import React from 'react';
import SplitText from "./SplitText";

const HeroSection = () => {
  return (
   <section
  className="relative h-screen md:h-screen flex items-center justify-center text-white rounded-b-3xl shadow-xl overflow-hidden"
>
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.internationalvillage.org/wp-content/uploads/2023/10/Admission-Page-Video.mp4" // Placeholder video URL. Replace with your school's video.
        loop
        autoPlay
        muted
        playsInline // Important for autoplay on mobile
        preload="auto"
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-opacity-60"></div>

    <div className="relative z-10 text-center px-4">
  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg animate-fade-in-up">
    <SplitText
      text="Nurturing Tomorrow's Leaders Today"
      type="words"
      className="inline-block mx-1"
    />
  </h1>
  <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md animate-fade-in-up delay-200">
    <SplitText
      text="Empowering students to achieve their full potential in a supportive and innovative environment."
      type="words"
      className="inline-block mx-1"
    />
  </p>
  <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up delay-400 focus:outline-none focus:ring-4 focus:ring-yellow-300">
    Discover Our Programs
  </button>
</div>
    </section>
  );
};

export default HeroSection;
