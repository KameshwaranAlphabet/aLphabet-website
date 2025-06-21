// src/pages/ClubsActivitiesSection.jsx
import React from 'react';
import { Sparkles, Users, Mic, Laptop, BookOpen } from 'lucide-react'; // Icons

const ClubsActivitiesSection = ({ navigateTo }) => {
  const clubs = [
    {
      name: 'Debate Club',
      description: 'Develop critical thinking and public speaking skills through spirited discussions and competitions.',
      icon: <Mic size={48} className="text-blue-600" />,
      image: 'https://placehold.co/600x400/ADD8E6/000000?text=Debate+Club',
    },
    {
      name: 'Robotics Club',
      description: 'Design, build, and program robots, fostering innovation and problem-solving abilities.',
      icon: <Laptop size={48} className="text-green-600" />,
      image: 'https://placehold.co/600x400/90EE90/000000?text=Robotics+Club',
    },
    {
      name: 'Literary Club',
      description: 'Explore the world of literature, hone creative writing, and share your passion for books.',
      icon: <BookOpen size={48} className="text-purple-600" />,
      image: 'https://placehold.co/600x400/DDA0DD/000000?text=Literary+Club',
    },
    {
      name: 'Environmental Club',
      description: 'Engage in sustainability projects, promote eco-awareness, and make a difference in our community.',
      icon: <Sparkles size={48} className="text-emerald-600" />,
      image: 'https://placehold.co/600x400/B0E0E6/000000?text=Environmental+Club',
    },
    {
      name: 'Chess Club',
      description: 'Master strategic thinking and competitive play in a friendly and challenging environment.',
      icon: <Users size={48} className="text-gray-600" />,
      image: 'https://placehold.co/600x400/FFD700/000000?text=Chess+Club',
    },
    {
      name: 'Photography Club',
      description: 'Capture moments, learn photo techniques, and express your artistic vision through the lens.',
      icon: <Sparkles size={48} className="text-orange-600" />,
      image: 'https://placehold.co/600x400/FFB6C1/000000?text=Photography+Club',
    },
  ];

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://placehold.co/1500x500/8A2BE2/FFFFFF?text=Clubs+and+Activities")' }}>
        <div className="absolute inset-0 bg-purple-900 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-lg animate-fade-in-down">
            Clubs & Activities
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Beyond the classroom, our school offers a diverse range of clubs and activities designed to enrich student life, foster new talents, and build lasting friendships. There's something for everyone!
        </p>
      </section>

      {/* Clubs Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Discover Your Passion</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {clubs.map((club, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <img src={club.image} alt={club.name} className="w-full h-48 object-cover" />
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {club.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{club.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{club.description}</p>
                  <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-300">
                    Join Club
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-purple-800 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Benefits of Participation</h2>
          <p className="text-xl mb-8">
            Participating in clubs and activities helps students develop key life skills, build confidence, and explore new interests.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <Users size={48} className="text-yellow-400 mb-2" />
              <p className="text-lg font-semibold">Teamwork</p>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles size={48} className="text-yellow-400 mb-2" />
              <p className="text-lg font-semibold">Skill Development</p>
            </div>
            <div className="flex flex-col items-center">
              <Mic size={48} className="text-yellow-400 mb-2" />
              <p className="text-lg font-semibold">Leadership</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubsActivitiesSection;
