
// src/components/SchoolTimeline.jsx
import React, { useRef, useEffect } from 'react';

// School Timeline Component (with auto-scrolling)
const SchoolTimeline = () => {
  const timelineEvents = [
    {
      year: '19XX',
      title: 'School Founding',
      description: 'SchoolName was established by visionary educators with a mission to provide quality education and foster character development.',
    },
    {
      year: '19YY',
      title: 'First Graduation Class',
      description: 'Celebrating the achievements of our inaugural graduating class, marking a significant milestone in our school\'s history.',
    },
    {
      year: '20XX',
      title: 'New Science Wing Opened',
      description: 'Expansion of our campus with a state-of-the-art science wing, enhancing STEM education for all students.',
    },
    {
      year: '20YY',
      title: 'Introduction of Digital Learning',
      description: 'Pioneering the integration of advanced digital tools and platforms into the curriculum for an enriched learning experience.',
    },
    {
      year: '20ZZ',
      title: 'Community Engagement Program',
      description: 'Launched a comprehensive community engagement program, fostering civic responsibility and local partnerships.',
    },
    {
      year: 'Present',
      title: 'Shaping Future Leaders',
      description: 'Continuously evolving our programs and facilities to nurture the next generation of compassionate and innovative leaders.',
    },
  ];

  const timelineRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const scrollSpeed = 1; // pixels per frame

  const startScrolling = () => {
    stopScrolling(); // Clear any existing interval first
    scrollIntervalRef.current = setInterval(() => {
        if (timelineRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = timelineRef.current;
          // Check if we're near the end to smoothly loop
          if (scrollTop + clientHeight >= scrollHeight - scrollSpeed) {
            timelineRef.current.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            timelineRef.current.scrollTop += scrollSpeed;
          }
        }
    }, 50); // Adjust interval for speed
  };

  const stopScrolling = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
  };

  useEffect(() => {
    startScrolling(); // Start scrolling on mount

    return () => {
      stopScrolling(); // Clear interval on unmount
    };
  }, []); // Empty dependency array means this runs once on mount and unmount

  return (
    <div
      ref={timelineRef}
      className="relative py-8 px-4 w-full h-full custom-scrollbar" // Removed explicit overflow-y-auto to rely on parent's height
      onMouseEnter={stopScrolling}
      onMouseLeave={startScrolling}
      style={{ minHeight: '400px', maxHeight: '600px', overflowY: 'auto' }} // Ensure a fixed height for scrolling and apply overflow here
    >
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>

      {timelineEvents.map((event, index) => (
        <div
          key={index}
          className={`mb-8 flex w-full justify-between items-center animate-fade-in-up`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {/* Year on one side, content on the other */}
          <div className={`w-5/12 text-right ${index % 2 === 0 ? 'pr-4' : 'order-last pl-4 text-left'}`}>
            <h3 className="text-xl font-bold text-blue-700">{event.year}</h3>
          </div>
          
          {/* Dot in the middle */}
          <div className="relative z-10 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center -mx-4">
            <span className="w-4 h-4 rounded-full bg-yellow-300"></span>
          </div>

          <div className={`w-5/12 ${index % 2 === 0 ? 'pl-4' : 'pr-4'}`}>
            <div className="bg-blue-50 p-4 rounded-lg shadow-md border-b-2 border-blue-100">
              <h4 className="text-lg font-semibold text-blue-800 mb-1">{event.title}</h4>
              <p className="text-gray-700 text-sm">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SchoolTimeline;
