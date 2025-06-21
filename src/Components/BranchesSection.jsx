// src/pages/BranchesSection.jsx
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react'; // Icons

const BranchesSection = ({ navigateTo }) => {
  // Array of branch data, now including an imageUrl and staticMapUrl for each
  const branches = [
    {
      id: 'mainCampus',
      name: 'Main Campus',
      address: '123 Schoolhouse Lane, Education City, 12345',
      phone: '+1 (123) 456-7890',
      email: 'main@yourschool.com',
      hours: 'Mon-Fri: 8:00 AM - 4:00 PM',
      description: 'Our primary campus, offering comprehensive education from kindergarten to high school. Equipped with state-of-the-art facilities and extensive sports grounds.',
      coords: { lat: 34.052235, lng: -118.243683 }, // Example: Los Angeles, CA
      imageUrl: 'https://placehold.co/800x500/A0E6FF/000000?text=Main+Campus+Building', // Image URL for Main Campus
      staticMapUrl: 'https://placehold.co/800x500/E0E0E0/000000?text=Map+of+Main+Campus', // Placeholder static map image
    },
    {
      id: 'creativeBranch',
      name: 'Creative & Animation Branch',
      address: '456 Art Studio Blvd, Innovation Hub, 67890',
      phone: '+1 (987) 654-3210',
      email: 'creative@yourschool.com',
      hours: 'Mon-Sat: 9:00 AM - 5:00 PM',
      description: 'A specialized branch focusing on digital arts, animation, graphic design, and media production. Nurturing the next generation of creative talent.',
      coords: { lat: 37.774929, lng: -122.419418 }, // Example: San Francisco, CA
      imageUrl: 'https://placehold.co/800x500/FFD8B2/000000?text=Creative+Animation+Studio', // Image URL for Creative Branch
      staticMapUrl: 'https://placehold.co/800x500/D0D0D0/000000?text=Map+of+Creative+Branch', // Placeholder static map image
    },
    // Add more branches as needed
    // {
    //   id: 'scienceTechBranch',
    //   name: 'Science & Technology Branch',
    //   address: '789 Tech Park Way, Future City, 10111',
    //   phone: '+1 (111) 222-3333',
    //   email: 'tech@yourschool.com',
    //   hours: 'Mon-Fri: 8:30 AM - 4:30 PM',
    //   description: 'Dedicated to advanced STEM education with cutting-edge labs for robotics, AI, and biotechnology.',
    //   coords: { lat: 40.712776, lng: -74.005974 }, // Example: New York, NY
    //   imageUrl: 'https://placehold.co/800x500/D0F0C0/000000?text=Science+Tech+Lab', // Image URL
    //   staticMapUrl: 'https://placehold.co/800x500/C0C0C0/000000?text=Map+of+Tech+Branch', // Placeholder static map image
    // }
  ];

  // No need for mapRef, mapLoaded, allMapsLoaded states or their useEffects with this approach.

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://placehold.co/1500x500/6A5ACD/FFFFFF?text=Our+School+Branches")' }}>
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-lg animate-fade-in-down">
            Find Your Campus
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          [Your School Name] is proud to operate multiple campuses, each designed to provide a unique and enriching educational experience tailored to specific learning needs and interests.
        </p>
      </section>

      {/* Branches List Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Explore Our Locations</h2>
          <div className="space-y-16"> {/* Increased space between branches */}
            {branches.map((branch, index) => (
              <div key={branch.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Branch Information & Main Image */}
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'} bg-blue-50 p-8 rounded-lg shadow-xl text-center lg:text-left`}>
                  {/* Main Branch Image */}
                  {branch.imageUrl && (
                    <img
                      src={branch.imageUrl}
                      alt={`${branch.name} Campus`}
                      className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/CCCCCC/000000?text=Image+Not+Found"; }} // Fallback image
                    />
                  )}
                  <MapPin size={60} className="text-blue-600 mx-auto lg:mx-0 mb-4" />
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{branch.name}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {branch.description}
                  </p>
                  <ul className="text-gray-700 text-left mx-auto lg:mx-0 space-y-3 max-w-sm">
                    <li className="flex items-start">
                      <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-gray-500" />
                      <span>{branch.address}</span>
                    </li>
                    <li className="flex items-start">
                      <Phone size={20} className="mr-3 mt-1 flex-shrink-0 text-gray-500" />
                      <span>{branch.phone}</span>
                    </li>
                    <li className="flex items-start">
                      <Mail size={20} className="mr-3 mt-1 flex-shrink-0 text-gray-500" />
                      <span>{branch.email}</span>
                    </li>
                    <li className="flex items-start">
                      <Clock size={20} className="mr-3 mt-1 flex-shrink-0 text-gray-500" />
                      <span>{branch.hours}</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${branch.coords.lat},${branch.coords.lng}`, '_blank')}
                    className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xl"
                  >
                    Get Directions
                  </button>
                </div>

                {/* Static Map Image */}
                <div className={`${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'} w-full h-96 bg-gray-200 rounded-lg shadow-xl overflow-hidden flex items-center justify-center`}>
                  {branch.staticMapUrl ? (
                    <img
                      src={branch.staticMapUrl}
                      alt={`Map of ${branch.name}`}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/CCCCCC/000000?text=Map+Image+Not+Found"; }} // Fallback
                    />
                  ) : (
                    <div className="text-center text-gray-600 p-4">
                      <p>Map image not available.</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Visit a Campus?</h2>
          <p className="text-xl mb-8">
            We invite you to experience our vibrant learning environments firsthand.
          </p>
          <button
            onClick={() => console.log('Contact us for tour!')} // Placeholder action
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xl"
          >
            Contact Us for a Tour
          </button>
        </div>
      </section>
    </div>
  );
};

export default BranchesSection;
