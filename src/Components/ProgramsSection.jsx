// src/components/ProgramsSection.jsx
import React from 'react';
import imgAcademic from '../Assets/image 100.png'; 
import imgHolistic from '../Assets/image 101.png'; 
import imgFaculty from '../Assets/image 102.png'; 

const ProgramsSection = () => {
  const programs = [
    {
      icon: <img src={imgAcademic} alt="Academic Excellence" className="h-20 mb-4 object-contain" />,
      title: 'Primary Programme',
      description: 'Rigorous curriculum designed to challenge and inspire students from foundational subjects to advanced studies.',
    },
    {
      icon: <img src={imgHolistic} alt="Holistic Development" className="h-20 mb-4 object-contain" />,
      title: 'Middle Programme',
      description: 'Focus on character building, leadership skills, and social-emotional learning through various extracurriculars.',
    },
    {
      icon: <img src={imgFaculty} alt="Dedicated Faculty" className="h-20 mb-4 object-contain" />,
      title: 'Diploma Programme',
      description: 'Highly qualified and passionate educators committed to fostering a love for learning in every student.',
    }
  ];

  return (
    <section id="programs" className="py-16 bg-blue-50 rounded-3xl shadow-xl mb-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 border-b-4 border-yellow-400 pb-2 inline-block">Our Programs</h2>
        <p className="text-gray-700 text-xl mx-auto mb-12 max-w-3xl">
          Discover how we empower students through innovative programs and a commitment to excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 border-b-4 border-blue-100 max-w-xs"
            >
              {program.icon}
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
