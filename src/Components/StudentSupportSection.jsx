// src/pages/StudentSupportSection.jsx
import React from 'react';
import { BookOpen, HeartHandshake, Syringe, BriefcaseBusiness, UsersRound } from 'lucide-react'; // Icons

const StudentSupportSection = ({ navigateTo }) => {
  const supportServices = [
    {
      name: 'Academic Advising',
      description: 'Guidance on course selection, study strategies, and academic planning to help students excel in their studies.',
      icon: <BookOpen size={48} className="text-blue-600" />,
    },
    {
      name: 'Counseling Services',
      description: 'Confidential support for emotional well-being, personal challenges, and mental health needs by qualified counselors.',
      icon: <HeartHandshake size={48} className="text-pink-600" />,
    },
    {
      name: 'Health & Wellness',
      description: 'Access to school nurses, health education, and resources to promote physical well-being and a healthy lifestyle.',
      icon: <Syringe size={48} className="text-red-600" />,
    },
    {
      name: 'Career Guidance',
      description: 'Assistance with career exploration, college applications, and developing skills for future success.',
      icon: <BriefcaseBusiness size={48} className="text-green-600" />,
    },
    {
      name: 'Special Education Needs',
      description: 'Tailored support and resources for students with diverse learning needs to ensure inclusive education.',
      icon: <UsersRound size={48} className="text-purple-600" />,
    },
    {
      name: 'Student Mentorship',
      description: 'Connecting students with mentors who provide guidance, encouragement, and a supportive presence.',
      icon: <UsersRound size={48} className="text-orange-600" />,
    },
  ];

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen"> {/* Added pt-24 for fixed navbar spacing */}
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://placehold.co/1500x500/6A5ACD/FFFFFF?text=Student+Support")' }}>
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-lg animate-fade-in-down">
            Student Support Services
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At [Your School Name], we are committed to fostering a supportive and inclusive environment where every student feels valued, safe, and empowered to thrive academically, emotionally, and socially. Our comprehensive support services are designed to address the diverse needs of our student body.
        </p>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">How We Support Our Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-indigo-800 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Need Support? We're Here to Help.</h2>
          <p className="text-xl mb-8">
            Don't hesitate to reach out to our dedicated support team. Your well-being is our priority.
          </p>
          <button
            onClick={() => navigateTo('contact')} // Use navigateTo to go to the contact page
            className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xl"
          >
            Contact Support Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default StudentSupportSection;
