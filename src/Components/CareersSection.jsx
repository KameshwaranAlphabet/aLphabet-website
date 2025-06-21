// src/pages/CareersSection.jsx
import React from 'react';
import { Briefcase, Building2, UsersRound, HeartHandshake, Award, GraduationCap } from 'lucide-react'; // Icons

const CareersSection = ({ navigateTo }) => {
  const benefits = [
    {
      name: 'Professional Development',
      description: 'Opportunities for continuous learning, workshops, and career growth.',
      icon: <Award size={48} className="text-yellow-500" />,
    },
    {
      name: 'Supportive Community',
      description: 'Work in a collaborative and friendly environment that values every team member.',
      icon: <UsersRound size={48} className="text-purple-500" />,
    },
    {
      name: 'Impactful Work',
      description: 'Contribute to shaping future generations and making a real difference.',
      icon: <HeartHandshake size={48} className="text-pink-500" />,
    },
    {
      name: 'Competitive Compensation',
      description: 'Attractive salary packages and comprehensive benefits.',
      icon: <Briefcase size={48} className="text-green-500" />,
    },
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Elementary School Teacher',
      department: 'Academics',
      location: 'On-site',
      type: 'Full-time',
      description: 'Seeking a passionate and dedicated teacher for our elementary grades.',
    },
    {
      id: 2,
      title: 'School Counselor',
      department: 'Student Support',
      location: 'On-site',
      type: 'Full-time',
      description: 'Provide counseling services and support to students across all grade levels.',
    },
    {
      id: 3,
      title: 'IT Support Specialist',
      department: 'Administration',
      location: 'On-site',
      type: 'Full-time',
      description: 'Manage and maintain school IT infrastructure and provide technical support.',
    },
    {
      id: 4,
      title: 'Sports Coach (Basketball)',
      department: 'Athletics',
      location: 'On-site',
      type: 'Part-time',
      description: 'Lead and inspire our student basketball team to achieve their full potential.',
    },
  ];

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://placehold.co/1500x500/4682B4/FFFFFF?text=Join+Our+Team")' }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-lg animate-fade-in-down">
            Build Your Career With Us
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At alphabet International School, we believe that our faculty and staff are our greatest assets. We are always looking for talented, passionate individuals who are committed to educational excellence and fostering a nurturing environment for our students.
        </p>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
          Join our team and become a part of a community dedicated to inspiring the next generation.
        </p>
      </section>

      {/* Why Work With Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Why Choose a Career at aLphabet International School?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{benefit.name}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Current Job Openings</h2>
        <div className="space-y-6">
          {jobOpenings.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h3>
              <div className="flex flex-wrap items-center text-gray-600 text-sm mb-4 space-x-4">
                <span className="flex items-center"><Building2 size={16} className="mr-1" /> {job.department}</span>
                <span className="flex items-center"><GraduationCap size={16} className="mr-1" /> {job.location}</span>
                <span className="flex items-center"><Briefcase size={16} className="mr-1" /> {job.type}</span>
              </div>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <button
                onClick={() => navigateTo('contact')} // Or a specific application form page
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded-full shadow-md transition-all duration-300"
              >
                Apply Now
              </button>
            </div>
          ))}
          {jobOpenings.length === 0 && (
            <p className="text-center text-gray-600 text-xl">No openings currently available. Please check back soon!</p>
          )}
        </div>
      </section>

      {/* Application Process Section */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-12">Our Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-4xl font-bold text-blue-600 mb-4">1</span>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Submit Application</h3>
              <p className="text-gray-600">Complete our online application form with your resume and cover letter.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-4xl font-bold text-blue-600 mb-4">2</span>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Interview Process</h3>
              <p className="text-gray-600">Qualified candidates will be invited for an interview, which may include a teaching demo.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-4xl font-bold text-blue-600 mb-4">3</span>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Offer & Onboarding</h3>
              <p className="text-gray-600">Successful candidates will receive an offer, followed by a smooth onboarding process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Questions About Careers?</h2>
          <p className="text-xl mb-8">
            Our HR team is happy to assist you.
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xl"
          >
            Contact HR
          </button>
        </div>
      </section>
    </div>
  );
};

export default CareersSection;
