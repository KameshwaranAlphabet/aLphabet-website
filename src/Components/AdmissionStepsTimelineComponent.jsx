// src/components/AdmissionStepsTimelineComponent.jsx
import React, { useState, useRef, useEffect } from 'react';

// Admission Steps Timeline Component
const AdmissionStepsTimelineComponent = () => {
  // Define the admission steps with their details
  const steps = [
    {
      id: 1,
      title: 'Complete Online Application',
      description: 'Fill out the online application form with all necessary information.',
      icon: '📝'
    },
    {
      id: 2,
      title: 'Submit Required Documents',
      description: 'Upload your transcripts, letters of recommendation, and other necessary documents.',
      icon: '📄'
    },
    {
      id: 3,
      title: 'Schedule Interview & Tour',
      description: 'Arrange a personal interview and, if desired, a campus tour to explore our facilities.',
      icon: '🗓️'
    },
    {
      id: 4,
      title: 'Receive Admissions Decision',
      description: 'Await the official decision regarding your admission status.',
      icon: '✉️'
    }
  ];

  // State to manage the currently active step
  const [activeStep, setActiveStep] = useState(1);

  // Ref for the timeline container to enable scrolling
  const timelineRef = useRef(null);

  // Effect for automatic step progression (always active)
  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => {
        setActiveStep((prev) => {
          // If at the last step, loop back to the first step (infinity)
          if (prev === steps.length) {
            return 1;
          }
          // Otherwise, go to the next step
          return prev + 1;
        });
    }, 3000); // Change step every 3 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [steps.length]); // Re-run effect only when number of steps changes

  // Effect to scroll the active step into view when it changes
  useEffect(() => {
    if (timelineRef.current) {
      const activeElement = timelineRef.current.querySelector(`.timeline-item[data-step="${activeStep}"]`);
      if (activeElement) {
        // Scroll smoothly to the active element, ensuring it's centered vertically
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [activeStep]);

  return (
    <div className="font-inter text-gray-800 flex flex-col items-center justify-center rounded-3xl">
      {/* Vertical Timeline Container */}
      <div className="w-full max-w-lg bg-white rounded-3xl p-4 md:p-8 shadow-inner overflow-y-auto max-h-[600px] custom-scrollbar">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300 rounded-full z-0"></div>
        {/* Active Progress Line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-teal-400 to-green-500 rounded-full z-10 transition-all duration-700 ease-out"
          style={{ height: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>

        {steps.map((step, index) => (
          <div
            key={step.id}
            data-step={step.id}
            // Removed manual onClick to prevent pausing on click, now it's purely automatic
            className={`timeline-item relative mb-12 flex items-center justify-between
              ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} /* Alternating left/right content */
              transform transition-all duration-500 ease-in-out
              ${activeStep === step.id ? 'z-20 scale-105' : 'z-10 opacity-80 scale-100'}
            `}
          >
            {/* Content Card (Left/Right) */}
            <div
              className={`w-5/12 p-4 rounded-lg shadow-md bg-white border border-gray-200 transition-all duration-300
                ${index % 2 === 0 ? 'text-right' : 'text-left'} /* Align text based on side */
                ${activeStep === step.id ? 'shadow-xl border-blue-300' : ''}
              `}
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>

            {/* Icon Circle (Center) */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-500 ease-in-out shadow-lg z-30
                ${activeStep === step.id
                  ? 'bg-gradient-to-br from-green-400 to-teal-600 text-white ring-4 ring-green-300 animate-pulse-once'
                  : activeStep > step.id
                    ? 'bg-gradient-to-br from-green-300 to-teal-500 text-white ring-2 ring-green-200'
                    : 'bg-gray-200 text-gray-600 ring-2 ring-gray-300'
                }
              `}
            >
              {step.icon}
              {activeStep > step.id && (
                <span className="absolute -bottom-1 -right-1 bg-green-600 text-white text-xs rounded-full p-1 leading-none">
                  ✓
                </span>
              )}
            </div>

            {/* Placeholder for spacing on the opposite side */}
            <div className="w-5/12"></div>
          </div>
        ))}
      </div>

      {/* Custom CSS for scrollbar and pulse animation */}
      <style>{`
        /* Hide scrollbar but allow scrolling */
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        /* Define a subtle pulse animation for the active step */
        @keyframes pulse-once {
          0% {
            box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7); /* Tailwind green-400 */
            transform: scale(1);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(74, 222, 128, 0);
            transform: scale(1.05);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
            transform: scale(1);
          }
        }

        .animate-pulse-once {
          animation: pulse-once 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AdmissionStepsTimelineComponent;
