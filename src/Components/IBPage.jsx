// src/pages/IBPage.jsx
import React, { useEffect, useRef } from 'react';
import { BookOpen, Globe, Users, Lightbulb, Award, CheckCircle } from 'lucide-react'; // Icons

const IBPage = ({ navigateTo }) => {
  // Refs for scroll-animated sections
  const sectionRefs = useRef([]);

  // Data for IB Programmes
  const ibProgrammes = [
    {
      id: 'pyp',
      name: 'Primary Years Programme (PYP)',
      grades: 'Ages 3-12 (Kindergarten to Grade 5)',
      description: 'The PYP focuses on the development of the whole child as an inquirer, both in the classroom and in the world outside. It is a transdisciplinary, inquiry-based and student-centred education.',
      focus: ['Inquiry-based learning', 'Transdisciplinary themes', 'Holistic child development'],
      image: 'https://placehold.co/800x500/ADD8E6/000000?text=IB+PYP',
      icon: <Users size={48} className="text-blue-600" />,
    },
    {
      id: 'myp',
      name: 'Middle Years Programme (MYP)',
      grades: 'Ages 11-16 (Grade 6 to Grade 10)',
      description: 'The MYP provides a framework of learning that encourages students to become creative, critical and reflective thinkers. It emphasizes intellectual challenge, encouraging students to make connections between their studies and the real world.',
      focus: ['Interdisciplinary learning', 'Community service', 'Critical thinking'],
      image: 'https://placehold.co/800x500/90EE90/000000?text=IB+MYP',
      icon: <Lightbulb size={48} className="text-green-600" />,
    },
    {
      id: 'dp',
      name: 'Diploma Programme (DP)',
      grades: 'Ages 16-19 (Grade 11 to Grade 12)',
      description: 'The DP is an academically challenging and balanced programme of education with final examinations that prepares students for success at university and in life beyond. It aims to develop students who have an excellent breadth and depth of knowledge.',
      focus: ['Academic rigor', 'Research skills (EE)', 'Theory of Knowledge (TOK)'],
      image: 'https://placehold.co/800x500/DA70D6/000000?text=IB+DP',
      icon: <BookOpen size={48} className="text-purple-600" />,
    },
    {
      id: 'cp',
      name: 'Career-related Programme (CP)',
      grades: 'Ages 16-19 (Grade 11 to Grade 12)',
      description: 'The CP is a framework of international education that incorporates the vision and educational principles of the IB into a unique programme. It is for students who wish to engage in career-related learning.',
      focus: ['Career-focused learning', 'Personal & professional skills', 'Language development'],
      image: 'https://placehold.co/800x500/FFD700/000000?text=IB+CP',
      icon: <Award size={48} className="text-yellow-600" />,
    },
  ];

  // IB Learner Profile Attributes
  const learnerProfile = [
    'Inquirers', 'Knowledgeable', 'Thinkers', 'Communicators',
    'Principled', 'Open-minded', 'Caring', 'Risk-takers',
    'Balanced', 'Reflective'
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
          // observer.unobserve(entry.target); // Uncomment if animation should only play once
        } else {
          // entry.target.classList.remove('animate-in'); // Uncomment if animation should replay
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
        @keyframes slideInFromBottom {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Apply initial hidden state and transition */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        /* Class added by IntersectionObserver when in view */
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Staggered animation for content cards */
        .content-card-animate {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
      `}} />

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://placehold.co/1500x500/004080/FFFFFF?text=International+Baccalaureate+Programmes")' }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-lg animate-fade-in-down">
            International Baccalaureate Programmes
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section ref={el => setSectionRef(el, 0)} className="container mx-auto px-4 py-16 text-center animate-on-scroll">
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          As an authorized IB World School, [Your School Name] is proud to offer the International Baccalaureate programmes, recognized globally for their academic rigor, emphasis on personal development, and commitment to creating a better, more peaceful world through intercultural understanding and respect.
        </p>
      </section>

      {/* IB Programmes Grid */}
      <section ref={el => setSectionRef(el, 1)} className="bg-white py-16 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Our IB Programmes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {ibProgrammes.map((program, index) => (
              <div
                key={program.id}
                className="bg-blue-50 p-8 rounded-lg shadow-xl text-center flex flex-col items-center content-card-animate"
                style={{ transitionDelay: `${index * 0.15}s` }} // Stagger delay
              >
                {program.image && (
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-48 object-cover rounded-lg mb-6 shadow-md"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/CCCCCC/000000?text=Image+Not+Found"; }}
                  />
                )}
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{program.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{program.grades}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{program.description}</p>
                <h4 className="text-lg font-semibold text-gray-800 mt-auto">Key Focus Areas:</h4>
                <ul className="text-gray-700 list-disc list-inside text-sm mt-2">
                  {program.focus.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The IB Learner Profile */}
      <section ref={el => setSectionRef(el, 2)} className="bg-blue-800 py-16 text-center text-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">The IB Learner Profile</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            The IB learner profile is the IB mission statement translated into a set of learning outcomes for the 21st century. It provides a common language for schools around the world.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {learnerProfile.map((attribute, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-blue-700 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
                <Globe size={40} className="text-yellow-400 mb-2" />
                <p className="text-lg font-semibold">{attribute}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={el => setSectionRef(el, 3)} className="bg-gray-50 py-16 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Benefits of an IB Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <CheckCircle size={48} className="text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Global Recognition</h3>
              <p className="text-gray-600">Highly respected by leading universities worldwide.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <Lightbulb size={48} className="text-purple-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Holistic Development</h3>
              <p className="text-gray-600">Fosters intellectual, personal, emotional, and social skills.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <Users size={48} className="text-orange-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Critical Thinking</h3>
              <p className="text-gray-600">Encourages students to think critically and challenge assumptions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={el => setSectionRef(el, 4)} className="bg-blue-800 py-16 text-center text-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Interested in the IB Programmes?</h2>
          <p className="text-xl mb-8">
            Discover how our IB curriculum can prepare your child for global success.
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xl"
          >
            Learn More / Inquire Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default IBPage;
