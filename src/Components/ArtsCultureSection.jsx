// src/pages/ArtsCultureSection.jsx
import React from 'react';
import { Paintbrush, Music, Theater, Camera, Palette } from 'lucide-react'; // Icons

const ArtsCultureSection = ({ navigateTo }) => {
  const artsPrograms = [
    {
      name: 'Visual Arts',
      description: 'Explore drawing, painting, sculpture, and digital art in our vibrant art studios.',
      icon: <Paintbrush size={48} className="text-red-600" />,
      image: 'https://placehold.co/600x400/FFB6C1/000000?text=Visual+Arts',
    },
    {
      name: 'Music & Choir',
      description: 'Join our band, orchestra, or choir and express yourself through melody and harmony.',
      icon: <Music size={48} className="text-indigo-600" />,
      image: 'https://placehold.co/600x400/DDA0DD/000000?text=Music+and+Choir',
    },
    {
      name: 'Drama & Theater',
      description: 'Step onto the stage, develop acting skills, and participate in captivating school productions.',
      icon: <Theater size={48} className="text-teal-600" />,
      image: 'https://placehold.co/600x400/B0E0E6/000000?text=Drama+and+Theater',
    },
    {
      name: 'Photography & Film',
      description: 'Learn the art of visual storytelling through photography and filmmaking techniques.',
      icon: <Camera size={48} className="text-orange-600" />,
      image: 'https://placehold.co/600x400/FFD700/000000?text=Photography+and+Film',
    },
    {
      name: 'Cultural Diversity',
      description: 'Celebrate global cultures through events, performances, and student-led initiatives.',
      icon: <Palette size={48} className="text-pink-600" />,
      image: 'https://placehold.co/600x400/F0F8FF/000000?text=Cultural+Diversity',
    },
  ];

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://placehold.co/1500x500/4B0082/FFFFFF?text=Arts+and+Culture")' }}>
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-lg animate-fade-in-down">
            Nurturing Creativity & Culture
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At our school, arts and culture are an integral part of holistic education. We provide a vibrant platform for students to explore their creativity, express themselves, and appreciate diverse cultural forms.
        </p>
      </section>

      {/* Arts Programs Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Our Creative Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {artsPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <img src={program.image} alt={program.name} className="w-full h-48 object-cover" />
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{program.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                  <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Events Section */}
      <section className="bg-indigo-800 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Annual Cultural Events</h2>
          <p className="text-xl mb-8">
            We host a variety of events throughout the year, celebrating the artistic and cultural talents of our students.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <Theater size={48} className="text-yellow-400 mb-2" />
              <p className="text-lg font-semibold">Annual Play</p>
            </div>
            <div className="flex flex-col items-center">
              <Music size={48} className="text-yellow-400 mb-2" />
              <p className="text-lg font-semibold">Music Concerts</p>
            </div>
            <div className="flex flex-col items-center">
              <Paintbrush size={48} className="text-yellow-400 mb-2" />
              <p className="text-lg font-semibold">Art Exhibitions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtsCultureSection;
