import React, { useState, useEffect, useRef } from 'react';
import { FileText, ChevronRight, TrendingUp } from 'lucide-react';

const ApplyNowPage = ({ navigateTo }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const stepRefs = useRef([]);
  // const [levelUpProgress, setLevelUpProgress] = useState(0); // Old state

  // New states for the step-based progress bar
  const [currentLevelUpStep, setCurrentLevelUpStep] = useState(0);
  const totalLevelUpSteps = 5; // Define total steps for "Level Up"

  const timelineSteps = [
    {
      title: 'Online Application',
      description: 'Please submit the online application form along with the required documents. By applying, parents agree to their application being considered. The application fee is INR 2500',
      icon: <FileText className="w-6 h-6 text-blue-600" />,
    },
    {
      title: 'Document Submission',
      description: 'Upon review of the online application form, a member of our administrative team will contact you.',
      icon: <FileText className="w-6 h-6 text-green-600" />,
    },
    {
      title: 'Interview & Campus Tour',
      description: 'At this stage, students seeking admission into: Mom & Me to Explorers (LKG), are required to complete a student & parent campus visit. Learners (UKG) to Grade XI, will have an interview scheduled for the student and parents with the school.',
      icon: <ChevronRight className="w-6 h-6 text-purple-600" />,
    },
    {
      title: 'Admissions Decision',
      description: 'Students seeking admission into Learners (UKG) to Grade XI, will then complete an admissions test.',
      icon: <FileText className="w-6 h-6 text-yellow-600" />,
    },
  ];

  // Effect to advance the step index for the timeline animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIndex((prevIndex) => (prevIndex + 1) % timelineSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [timelineSteps.length]);

  // Effect to scroll to the current active timeline step
  useEffect(() => {
    if (stepRefs.current[currentStepIndex]) {
      stepRefs.current[currentStepIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentStepIndex]);

  // New Effect for Step-based Level Up Progress Bar animation
  useEffect(() => {
    const levelUpInterval = setInterval(() => {
      setCurrentLevelUpStep((prevStep) => {
        if (prevStep < totalLevelUpSteps) {
          return prevStep + 1;
        }
        clearInterval(levelUpInterval); // Stop when all steps are completed
        return prevStep;
      });
    }, 1500); // Advance a step every 1.5 seconds

    return () => clearInterval(levelUpInterval);
  }, [totalLevelUpSteps]);

  // Calculate the height of the active portion of the vertical line for the timeline
  const activeLineHeight = `${((currentStepIndex + 1) / timelineSteps.length) * 100}%`;

  return (
    <div className="container mx-auto px-4 py-16 md:py-20 max-w-4xl bg-white rounded-2xl shadow-lg my-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center border-b-4 border-yellow-500 pb-2 inline-block mx-auto block">Admission Process</h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        aLphabet internationaL is dedicated to developing compassionate and young life-long learners in a stimulating environment of academic excellence. We strive to instill values of mutual respect, honesty, empathy and open-mindedness. With tolerance, our learners will become humane and knowledgeable citizens of the world, understanding various cultures thus promoting unity.

        Given below is the process for admission into aLphabet international. Our admissions team is happy to help with any questions you may have, to help make the experience as smooth and efficient as possible.

        For any queries, write to us at admissions@alphabet.school
      </p>

      <div className="bg-blue-50 p-8 rounded-2xl shadow-inner border border-blue-100 mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-8 text-center">Application Steps:</h2>

        {/* Timeline Container */}
        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {/* Animated Progress Line */}
          <div
            className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 transition-all duration-1000 ease-in-out"
            style={{ height: activeLineHeight }}
          ></div>

          {timelineSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className={`mb-8 flex items-center w-full ${
                index % 2 === 0
                  ? 'flex-row-reverse md:flex-row'
                  : 'flex-row-reverse md:flex-row-reverse'
              }`}
            >
              {/* Content Box */}
              <div
                className={`flex-1 p-4 rounded-lg shadow-md border border-blue-100 transition-all duration-500 ${
                  index === currentStepIndex ? 'bg-blue-100 shadow-lg scale-105' : 'bg-white shadow-md'
                } ${
                  index % 2 === 0
                    ? 'mr-4 md:mr-0 md:ml-8 text-right md:text-left'
                    : 'ml-4 md:ml-0 md:mr-8 text-right'
                }`}
              >
                <h3 className="text-xl font-bold text-blue-800 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>

              {/* Icon & Dot */}
              <div className="z-10 flex-shrink-0 relative">
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-md transition-all duration-500 ${
                    index <= currentStepIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  {step.icon}
                </div>
                {/* Connector line */}
                <div
                  className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-1 bg-blue-200 ${
                    index % 2 === 0 ? '-left-4' : '-right-4'
                  }`}
                ></div>
              </div>

              {/* Empty div for spacing on the other side */}
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-gray-700 text-lg text-center">
          For detailed information on requirements and deadlines, including specific dates, please download our official admissions guide:
        </p>
        <div className="text-center mt-6">
          <a
            href="#"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <FileText className="w-5 h-5 mr-2" />
            Download Admissions Guide
          </a>
        </div>
      </div>

      {/* --- Updated Level Up Process Bar Container ---
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl shadow-inner border border-purple-200 mt-12">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6 text-center flex items-center justify-center">
          <TrendingUp className="w-8 h-8 mr-3 text-purple-600" />
          
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          See how far you've come on your journey to joining aLphabet international!
        </p>

        <div className="flex justify-between items-center w-full bg-gray-200 rounded-full h-8 relative shadow-md">
          {Array.from({ length: totalLevelUpSteps }).map((_, index) => (
            <div
              key={index}
              className={`flex-1 h-full rounded-full transition-all duration-700 ease-in-out flex items-center justify-center text-white font-bold text-sm sm:text-base
                ${
                  index < currentLevelUpStep
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'bg-gray-300'
                }
                ${index === 0 ? 'rounded-l-full' : ''}
                ${index === totalLevelUpSteps - 1 ? 'rounded-r-full' : ''}
              `}
              style={{
                borderTopRightRadius: index === currentLevelUpStep -1 && currentLevelUpStep < totalLevelUpSteps ? '0' : '',
                borderBottomRightRadius: index === currentLevelUpStep -1 && currentLevelUpStep < totalLevelUpSteps ? '0' : '',
                borderTopLeftRadius: index === currentLevelUpStep && currentLevelUpStep > 0 ? '0' : '',
                borderBottomLeftRadius: index === currentLevelUpStep && currentLevelUpStep > 0 ? '0' : '',
              }}
            >
              {currentLevelUpStep > index ? (
                <span>&#10003; Step {index + 1}</span> // Checkmark for completed steps
              ) : (
                <span className={`${index === currentLevelUpStep ? 'text-white' : 'text-gray-700'}`}>Step {index + 1}</span>
              )}
            </div>
          ))}
        </div>
         <div className="text-center mt-4 text-lg font-semibold text-purple-700">
           {currentLevelUpStep === 0 ? "Getting Started..." : `Step ${currentLevelUpStep} of ${totalLevelUpSteps} Complete`}
         </div>

        <p className="mt-8 text-gray-600 text-center text-sm italic">
          This bar represents a general indicator of completion for various pre-admission activities.
        </p>
      </div> */}

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

export default ApplyNowPage;
// src/pages/ApplyNowPage.jsx
// import React from 'react';
// import { FileText } from 'lucide-react';
// import AdmissionStepsTimelineComponent from '../Components/AdmissionStepsTimelineComponent.jsx';

// // Apply Now Page Component
// const ApplyNowPage = ({ navigateTo }) => {
//   return (
//     <div className="container mx-auto px-4 py-16 max-w-4xl bg-white rounded-3xl shadow-xl my-16">
//       <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 text-center border-b-4 border-yellow-400 pb-2 inline-block mx-auto block">Apply Now</h1>
//       <p className="text-gray-700 text-xl text-center mb-12">
//         We're excited you're considering SchoolName for your child's education! Please find information about our application process below.
//       </p>

//       <div className="bg-blue-50 p-8 rounded-2xl shadow-md border-b-4 border-blue-100 mb-12 h-auto overflow-hidden">
//         <h2 className="text-2xl font-semibold text-blue-800 mb-6">Application Steps:</h2>
//         <AdmissionStepsTimelineComponent />
//         <p className="mt-8 text-gray-700 text-lg">
//           For detailed information on requirements and deadlines, please download our admissions guide:
//         </p>
//         <a
//           href="#"
//           className="mt-6 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
//         >
//           <FileText className="w-5 h-5 mr-3" />
//           Download Admissions Guide
//         </a>
//       </div>

//       {/* Placeholder for Application Form */}
//       <div className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-gray-200">
//         <h2 className="text-2xl font-semibold text-blue-800 mb-6">Online Application Form</h2>
//         <p className="text-gray-500 mb-6 text-base">
//           <strong className="text-red-600">Note:</strong> This is a placeholder for your actual application form integration. In a live site, this would likely be a complex multi-step form or an embedded form from an admissions management system.
//         </p>
//         <form className="space-y-6">
//           <div>
//             <label htmlFor="applicantName" className="block text-gray-700 text-lg font-medium mb-2">Applicant Full Name</label>
//             <input type="text" id="applicantName" className="w-full px-4 py-3 rounded-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm text-lg" placeholder="John Doe" />
//           </div>
//           <div>
//             <label htmlFor="grade" className="block text-gray-700 text-lg font-medium mb-2">Applying for Grade</label>
//             <select id="grade" className="w-full px-4 py-3 rounded-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm text-lg">
//               <option>Kindergarten</option>
//               <option>1st Grade</option>
//               <option>2nd Grade</option>
//               {/* Add more options as needed */}
//             </select>
//           </div>
//           <div>
//             <label htmlFor="parentEmail" className="block text-gray-700 text-lg font-medium mb-2">Parent/Guardian Email</label>
//             <input type="email" id="parentEmail" className="w-full px-4 py-3 rounded-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm text-lg" placeholder="parent@example.com" />
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
//             >
//               Proceed to Application
//             </button>
//           </div>
//         </form>
//       </div>

//       <div className="text-center mt-12">
//         <button
//           onClick={() => navigateTo('home')}
//           className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
//         >
//           Back to Home
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ApplyNowPage;
