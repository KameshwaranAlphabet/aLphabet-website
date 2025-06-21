// src/pages/Athletics.jsx
import React from 'react';

const Athletics = () => {
  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen"> {/* Added pt-24 to account for fixed navbar */}
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/1500x500/ADD8E6/FFFFFF?text=School+Athletics")' }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-lg animate-fade-in-down">
            Excellence in Athletics
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At [aLphabet], we believe in fostering not just academic prowess, but also physical well-being and teamwork through our comprehensive athletics program. Our students learn discipline, sportsmanship, and the joy of competition.
        </p>
      </section>

      {/* Sports Categories Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Our Sports Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Sport Card 1 */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <img src="https://via.placeholder.com/600x400/90EE90/FFFFFF?text=Basketball" alt="Basketball Team" className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Basketball</h3>
                <p className="text-gray-100 text-sm">Join our dynamic basketball team and master your dribbling, shooting, and teamwork skills. Open to all grade levels.</p>
                <button className="mt-4 bg-white text-blue-700 py-2 px-4 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Sport Card 2 */}
            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <img src="https://via.placeholder.com/600x400/FFD700/FFFFFF?text=Soccer" alt="Soccer Team" className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Soccer</h3>
                <p className="text-gray-100 text-sm">Experience the world's most popular sport. Develop agility, strategy, and endurance on the field.</p>
                <button className="mt-4 bg-white text-green-700 py-2 px-4 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Sport Card 3 */}
            <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <img src="https://via.placeholder.com/600x400/87CEEB/FFFFFF?text=Volleyball" alt="Volleyball Team" className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Volleyball</h3>
                <p className="text-gray-100 text-sm">Spike, set, and serve your way to victory. A fantastic sport for coordination and team communication.</p>
                <button className="mt-4 bg-white text-red-700 py-2 px-4 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Our State-of-the-Art Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="https://via.placeholder.com/800x600/FFB6C1/FFFFFF?text=Sports+Complex" alt="Sports Complex" className="rounded-lg shadow-xl" />
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We boast modern sports facilities, including a full-sized gymnasium, outdoor sports fields, and dedicated training areas, ensuring our athletes have everything they need to excel.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Indoor Basketball Court</li>
              <li>Regulation Soccer Field</li>
              <li>Volleyball Courts</li>
              <li>Fitness Center</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action/Join Section */}
      <section className="bg-blue-800 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8">
            Explore our athletic opportunities and become a part of our winning tradition.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xl">
            Register for Sports
          </button>
        </div>
      </section>
    </div>
  );
};

export default Athletics;