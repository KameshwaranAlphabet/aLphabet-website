// src/pages/LearningSpaceSection.jsx
import React, { useEffect, useRef } from 'react';
import { Lightbulb, Laptop, BookOpen, Users, Globe, TreePine } from 'lucide-react'; // Icons

const LearningSpaceSection = ({ navigateTo }) => {
  // Refs for scroll-animated sections
  const sectionRefs = useRef([]);

  // Data for different types of learning spaces
  const learningAreas = [
    {
      name: 'Modern Classrooms',
      description: 'Our classrooms are designed to be dynamic and interactive, fostering an engaging environment for collaborative and personalized learning. Equipped with flexible seating and smart technology.',
      icon: <Lightbulb size={48} className="text-blue-600" />,
      image: 'https://placehold.co/800x500/A2D2FF/000000?text=Modern+Classroom',
    },
    {
      name: 'Advanced Laboratories',
      description: 'State-of-the-art science and computer labs provide hands-on experiences, enabling students to explore scientific principles and develop critical technical skills.',
      icon: <Laptop size={48} className="text-green-600" />,
      image: 'https://placehold.co/800x500/98FB98/000000?text=Science+Lab',
    },
    {
      name: 'Library & Media Center',
      description: 'A vibrant hub for research, reading, and digital exploration. Our extensive collection and online resources support diverse learning needs and foster a love for knowledge.',
      icon: <BookOpen size={48} className="text-purple-600" />,
      image: 'https://placehold.co/800x500/DDA0DD/000000?text=Library+Reading',
    },
    {
      name: 'Collaborative Zones',
      description: 'Flexible spaces encouraging teamwork, discussion, and project-based learning. These areas are equipped for group work and creative brainstorming.',
      icon: <Users size={48} className="text-orange-600" />,
      image: 'https://placehold.co/800x500/FFB6C1/000000?text=Collaborative+Space',
    },
    {
      name: 'Digital Learning Hubs',
      description: 'Dedicated areas with high-speed internet and specialized software, supporting coding, digital art, and virtual reality exploration.',
      icon: <Globe size={48} className="text-indigo-600" />,
      image: 'https://placehold.co/800x500/B0E0E6/000000?text=Digital+Hub',
    },
    {
      name: 'Outdoor Learning Areas',
      description: 'Our campus extends learning beyond walls with outdoor classrooms, nature exploration zones, and tranquil spots for reflection and study.',
      icon: <TreePine size={48} className="text-emerald-600" />,
      image: 'https://placehold.co/800x500/C0E6B0/000000?text=Outdoor+Classroom',
    },
  ];

  // Effect for scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in'); // Add the animation class
          // If you want the animation to play only once, uncomment the line below:
          // observer.unobserve(entry.target);
        } else {
          // If you want the animation to replay when scrolling back up/down, uncomment the line below:
          // entry.target.classList.remove('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on component unmount
    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Helper function to assign refs to multiple elements dynamically
  const setSectionRef = (el, index) => {
    if (el) sectionRefs.current[index] = el;
  };

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      {/* Dynamically injected CSS for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        // // @keyframes slideInFromBottom {
        // //   0% {
        // //     opacity: 0;
        // //     transform: translateY(50px);
        // //   }
        // //   100% {
        // //     opacity: 1;
        // //     transform: translateY(0);
        // //   }
        // // }

        // // /* Apply initial hidden state and transition */
        // // .animate-on-scroll {
        // //   opacity: 0;
        // //   transform: translateY(50px);
        // //   transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        // // }

        // // /* Class added by IntersectionObserver when in view */
        // // .animate-on-scroll.animate-in {
        // //   opacity: 1;
        // //   transform: translateY(0);
        // // }

        // // /* Staggered animation for content cards */
        // // .content-card-animate {
        // //   transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
      `}} />

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://placehold.co/1500x500/3498DB/FFFFFF?text=Inspiring+Learning+Spaces")' }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-lg animate-fade-in-down">
            Our Dynamic Learning Spaces
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section ref={el => setSectionRef(el, 0)} className="container mx-auto px-4 py-16 text-center animate-on-scroll">
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          All the indoor and outdoor learning spaces at aLphabet internationaL are engaging, inviting, and exploding with color. Within the buildings, these spaces have been designed to produce an accepting and calming atmosphere and to establish experiences through hands-on learning. The student-designed and initiated classrooms support and display transdisciplinary learning, the collaborative learning of knowledge and application of concepts.
        </p>
      </section>

      {/* Key Learning Areas Grid */}
      <section ref={el => setSectionRef(el, 1)} className="bg-white py-16 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Spaces Designed for Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {learningAreas.map((area, index) => (
              <div
                key={index}
                className="bg-blue-50 p-8 rounded-lg shadow-xl text-center flex flex-col items-center content-card-animate"
                style={{ transitionDelay: `${index * 0.15}s` }} // Stagger delay
              >
                {area.image && (
                  <img
                    src={area.image}
                    alt={area.name}
                    className="w-full h-48 object-cover rounded-lg mb-6 shadow-md"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/CCCCCC/000000?text=Image+Not+Found"; }}
                  />
                )}
                <div className="mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{area.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section ref={el => setSectionRef(el, 2)} className="bg-blue-800 py-16 text-center text-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Our Learning Philosophy</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            We move beyond traditional classrooms to offer diverse environments that cater to various learning styles, promoting active participation, critical thinking, and creativity in every student.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <Lightbulb size={48} className="text-yellow-400 mb-2" />
              <p className="text-lg font-semibold">Inquiry-Based</p>
            </div>
            <div className="flex flex-col items-center">
              <Users size={48} className="text-yellow-400 mb-2" />
              <p className="text-lg font-semibold">Collaborative</p>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen size={48} className="text-yellow-400 mb-2" />
              <p className="text-lg font-semibold">Experiential</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={el => setSectionRef(el, 3)} className="bg-gray-50 py-16 text-center animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Experience Our Learning Environment</h2>
          <p className="text-xl text-gray-700 mb-8">
            Schedule a visit to see firsthand how our spaces foster innovative and effective learning.
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xl"
          >
            Book a Tour
          </button>
        </div>
      </section>
    </div>
  );
};

export default LearningSpaceSection;
