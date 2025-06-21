import  { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react'; // Icons

const CampusesSection = () => {
  // Array of campus data, now with 'campusImages' for the slider
  const campuses = [
    {
      id: 'mainCampus',
      name: 'Main Campus',
      tagline: 'The Heart of Holistic Education',
      address: '123 Schoolhouse Lane, Education City, 12345, Country',
      phone: '+1 (123) 456-7890',
      email: 'main@yourschool.com',
      hours: 'Mon-Fri: 8:00 AM - 4:00 PM (Admin Office)',
      description: 'Our Main Campus serves as the foundational pillar of [Your School Name], offering a comprehensive K-12 curriculum. It boasts expansive green spaces, advanced laboratories, and state-of-the-art sports facilities designed to foster both academic excellence and physical well-being. This campus is where traditions are upheld and future leaders are nurtured.',
      coords: 'https://www.google.com/maps/place/Alphabet+School/@12.9580122,80.2540017,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267cc9b58bd8f:0xb3a27219f08b67a5!8m2!3d12.958007!4d80.2565766!16s%2Fg%2F11f3zgf_j9?entry=tts&shorturl=1', // Example: Los Angeles, CA
      // Multiple images for the automatic slider
      campusImages: [
        'https://placehold.co/800x500/A0A0A0/FFFFFF?text=Main+Campus+View+1',
        'https://placehold.co/800x500/B0B0B0/FFFFFF?text=Main+Campus+View+2',
        'https://placehold.co/800x500/C0C0C0/FFFFFF?text=Main+Campus+View+3',
        'https://placehold.co/800x500/D0D0D0/FFFFFF?text=Main+Campus+View+4',
      ],
    },
    {
      id: 'creativeBranch',
      name: 'Creative & Innovation Campus',
      tagline: 'Where Imagination Takes Flight',
      address: '456 Art Studio Blvd, Innovation Hub, 67890, Country',
      phone: '+1 (987) 654-3210',
      email: 'creative@yourschool.com',
      hours: 'Mon-Sat: 9:00 AM - 5:00 PM (Studio Access)',
      description: 'Our Creative & Innovation Campus is a dynamic hub for students passionate about the arts, technology, and design. Equipped with cutting-edge studios for animation, digital media, and fine arts, it provides an immersive environment for creative exploration and skill development. This campus is dedicated to fostering innovation and artistic expression.',
      coords: 'https://www.google.com/maps/place/aLphabet/@13.029143,80.254742,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267c9e1e1f187:0x4c2c09f35633be2c!8m2!3d13.029143!4d80.254742!16s%2Fg%2F1260mfdj8?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D', // Example: San Francisco, CA
      // Multiple images for the automatic slider
      campusImages: [
        'https://placehold.co/800x500/D0D0D0/000000?text=Creative+Campus+Studio',
        'https://placehold.co/800x500/E0E0E0/000000?text=Creative+Campus+Lab',
        'https://placehold.co/800x500/F0F0F0/000000?text=Creative+Campus+Art',
      ],
    },
  ];

  // State to manage the current image index for each campus slider
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    campuses.reduce((acc, campus) => ({ ...acc, [campus.id]: 0 }), {})
  );

  // Effect for automatic sliding
  useEffect(() => {
    const intervals = campuses.map(campus => {
      // Only set up interval if there are images to slide
      if (campus.campusImages && campus.campusImages.length > 1) {
        return setInterval(() => {
          setCurrentImageIndexes(prevIndexes => {
            const currentIndex = prevIndexes[campus.id];
            const nextIndex = (currentIndex + 1) % campus.campusImages.length;
            return { ...prevIndexes, [campus.id]: nextIndex };
          });
        }, 5000); // Change image every 5 seconds (5000 milliseconds)
      }
      return null;
    });

    // Cleanup function to clear intervals when the component unmounts
    return () => intervals.forEach(interval => interval && clearInterval(interval));
  }, [campuses]); // Re-run effect if campuses data changes

  // Function to go to the next image (manual override)
  const nextImage = (campusId) => {
    setCurrentImageIndexes(prevIndexes => {
      const campus = campuses.find(c => c.id === campusId);
      if (!campus || !campus.campusImages) return prevIndexes;
      const currentIndex = prevIndexes[campusId];
      const nextIndex = (currentIndex + 1) % campus.campusImages.length;
      return { ...prevIndexes, [campusId]: nextIndex };
    });
  };

  // Function to go to the previous image (manual override)
  const prevImage = (campusId) => {
    setCurrentImageIndexes(prevIndexes => {
      const campus = campuses.find(c => c.id === campusId);
      if (!campus || !campus.campusImages) return prevIndexes;
      const currentIndex = prevIndexes[campusId];
      const prevIndex = (currentIndex - 1 + campus.campusImages.length) % campus.campusImages.length;
      return { ...prevIndexes, [campus.id]: prevIndex };
    });
  };

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://placehold.co/1500x500/4B0082/FFFFFF?text=Discover+Our+Campuses")' }}>
        <div className="absolute inset-0 bg-purple-900 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-lg animate-fade-in-down">
            Our Inspiring Campuses
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          [Your School Name] offers distinct campuses, each with its unique focus and a shared commitment to delivering exceptional education. Explore the environment that best suits your child's aspirations.
        </p>
      </section>

      {/* Campuses List Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Choose Your Learning Environment</h2>
          <div className="space-y-20"> {/* Increased space between campuses */}
            {campuses.map((campus, index) => (
              <div key={campus.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''} bg-blue-50 p-8 rounded-lg shadow-xl`}>
                {/* Campus Information Section (left side for odd index, right for even) */}
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'} text-center lg:text-left`}>
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <GraduationCap size={40} className="text-blue-600 mr-3" />
                    <h3 className="text-3xl font-bold text-gray-800">{campus.name}</h3>
                  </div>
                  <p className="text-purple-600 font-semibold text-xl italic mb-4">{campus.tagline}</p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {campus.description}
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Contact & Visit:</h4>
                  <ul className="text-gray-700 text-left mx-auto lg:mx-0 space-y-3 max-w-sm">
                    <li className="flex items-start">
                      <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-gray-500" />
                      <span>{campus.address}</span>
                    </li>
                    <li className="flex items-start">
                      <Phone size={20} className="mr-3 mt-1 flex-shrink-0 text-gray-500" />
                      <span>{campus.phone}</span>
                    </li>
                    <li className="flex items-start">
                      <Mail size={20} className="mr-3 mt-1 flex-shrink-0 text-gray-500" />
                      <span>{campus.email}</span>
                    </li>
                    <li className="flex items-start">
                      <Clock size={20} className="mr-3 mt-1 flex-shrink-0 text-gray-500" />
                      <span>{campus.hours}</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => window.open(`${campus.coords}`, '_blank')}
                    className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xl"
                  >
                    Get Directions
                  </button>
                </div>

                {/* Campus Image Slider (right side for odd index, left for even) */}
                <div className={`${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'} w-full h-96 bg-gray-200 rounded-lg shadow-xl overflow-hidden flex items-center justify-center relative`}>
                  {campus.campusImages && campus.campusImages.length > 0 ? (
                    <>
                      <img
                        src={campus.campusImages[currentImageIndexes[campus.id]]}
                        alt={`${campus.name} Campus View ${currentImageIndexes[campus.id] + 1}`}
                        className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x500/CCCCCC/000000?text=Image+Not+Found"; }} // Fallback
                      />
                      {campus.campusImages.length > 1 && (
                        <>
                          {/* Previous Button */}
                          <button
                            onClick={() => prevImage(campus.id)}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all duration-200 z-10"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={24} />
                          </button>
                          {/* Next Button */}
                          <button
                            onClick={() => nextImage(campus.id)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all duration-200 z-10"
                            aria-label="Next image"
                          >
                            <ChevronRight size={24} />
                          </button>
                          {/* Dots for navigation */}
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                            {campus.campusImages.map((_, dotIndex) => (
                              <button
                                key={dotIndex}
                                onClick={() => setCurrentImageIndexes(prev => ({ ...prev, [campus.id]: dotIndex }))}
                                className={`w-3 h-3 rounded-full ${dotIndex === currentImageIndexes[campus.id] ? 'bg-white' : 'bg-gray-400'} border border-gray-600 transition-colors duration-200`}
                                aria-label={`Go to image ${dotIndex + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="text-center text-gray-600 p-4">
                      <p>No campus images available.</p>
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
          <h2 className="text-4xl font-bold mb-4">Ready to Discover Your Campus?</h2>
          <p className="text-xl mb-8">
            We invite you to experience our vibrant learning environments firsthand.
          </p>
          <button
            onClick={() => console.log('Contact us for tour!')} // Placeholder action
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xl"
          >
            Schedule a Visit
          </button>
        </div>
      </section>
    </div>
  );
};

export default CampusesSection;