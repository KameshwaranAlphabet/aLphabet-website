"use client";
import React, { useEffect, useRef } from 'react';
import { Baby, Handshake, Brain, BookOpen, Brush, Music, Sun, Sparkles, Heart } from 'lucide-react'; // Icons for programs

const PreKindergartenPage = ({ navigateTo }) => {
  // Data for each Pre-Kindergarten program
  const programs = [
    {
      id: 'momAndMe',
      name: 'Mom & Me Program',
      tagline: 'First Steps Together',
      description: 'Our Mom & Me program is designed for infants and toddlers (ages 6-24 months) and their caregivers. It\'s a wonderful opportunity for early socialization, sensory exploration, and bonding. Through music, movement, story time, and play, we foster a gentle introduction to a learning environment while supporting parental connection and community.',
      benefits: [
        'Enhanced parent-child bonding',
        'Early sensory and motor skill development',
        'Socialization in a nurturing setting',
        'Supportive community for parents',
      ],
      icon: <Handshake className="w-8 h-8 text-pink-500" />,
      imageUrl: 'https://placehold.co/800x500/FFD1DC/333333?text=Mom+%26+Me+Playtime',
      cta: 'Explore Mom & Me',
      ctaLink: '#momAndMeDetails', // Internal anchor or navigateTo
    },
    {
      id: 'toddlers',
      name: 'Toddlers Program',
      tagline: 'Curiosity Unleashed',
      description: 'The Toddlers program (ages 2-3 years) provides a safe, stimulating environment where young children can explore their newfound independence and curiosity. Our curriculum focuses on developing language, fine and gross motor skills, problem-solving, and early social interactions through guided play, creative arts, and sensory experiences.',
      benefits: [
        'Language and communication growth',
        'Motor skill refinement',
        'Introduction to structured learning',
        'Positive peer interactions',
      ],
      icon: <Baby className="w-8 h-8 text-green-500" />,
      imageUrl: 'https://placehold.co/800x500/D1FFD1/333333?text=Toddler+Discovery',
      cta: 'Discover Toddlers',
      ctaLink: '#toddlerDetails',
    },
    {
      id: 'discoverers',
      name: 'Discoverers Program',
      tagline: 'Foundations for Lifelong Learning',
      description: 'Our Discoverers program (ages 3-5 years) prepares children for kindergarten by building strong foundations in literacy, numeracy, and critical thinking. We encourage active learning through themed units, project-based activities, and a rich array of hands-on experiences that spark imagination and a love for learning, all within a supportive and engaging classroom.',
      benefits: [
        'Pre-literacy and numeracy skills',
        'Problem-solving and critical thinking',
        'Creative expression through arts',
        'Social-emotional readiness for school',
      ],
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      imageUrl: 'https://placehold.co/800x500/D1E7FF/333333?text=Discoverers+Learning',
      cta: 'Enroll in Discoverers',
      ctaLink: '#discovererDetails',
    },
  ];

  // Refs for sections to observe intersection for animations
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const programRefs = useRef([]); // To store refs for each program section
  const ctaRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.15, // Trigger when 15% of the element is visible
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        } else {
          // Optional: remove 'animate-in' if you want replay on scroll out
          // entry.target.classList.remove('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all relevant sections
    if (heroRef.current) observer.observe(heroRef.current);
    if (introRef.current) observer.observe(introRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    programRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on component unmount
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (introRef.current) observer.unobserve(introRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
      programRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-white min-h-screen font-sans">
      {/* Dynamic CSS for animations */}
      {/* <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInScaleUp {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInFromBottom {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .animate-hero { animation: fadeInScaleUp 1s ease-out forwards; opacity: 0; }
        .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
        .animate-on-scroll.animate-in { opacity: 1; transform: translateY(0); }
        .animate-delay-1 { transition-delay: 0.1s; }
        .animate-delay-2 { transition-delay: 0.2s; }
        .animate-delay-3 { transition-delay: 0.3s; }
        .animate-delay-4 { transition-delay: 0.4s; }
      `}} /> */}

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-96 bg-cover bg-center flex items-center justify-center text-white text-center rounded-b-3xl overflow-hidden shadow-xl animate-hero"
        style={{ backgroundImage: 'url("https://placehold.co/1500x500/8A2BE2/FFFFFF?text=Pre-Kindergarten+Joy")' }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex flex-col items-center justify-center p-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Nurturing Bright Beginnings
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl font-light">
            Empowering young minds through play, discovery, and loving guidance.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section ref={introRef} className="container mx-auto px-4 py-16 text-center animate-on-scroll">
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Our Pre-Kindergarten programs are thoughtfully designed to provide a rich, engaging, and age-appropriate learning experience for every child. We believe in fostering a holistic development that spans cognitive, social, emotional, and physical growth.
        </p>
      </section>

      {/* Programs Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Our Programs</h2>
          <div className="space-y-20">
            {programs.map((program, index) => (
              <div
                key={program.id}
                id={program.id} // For internal navigation
                ref={el => programRefs.current[index] = el}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-8 rounded-xl shadow-lg border border-gray-100 animate-on-scroll`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Image Column - Order changes based on index */}
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} w-full h-64 md:h-80 bg-gray-100 rounded-lg shadow-md overflow-hidden flex items-center justify-center`}>
                  <img
                    src={program.imageUrl}
                    alt={`${program.name} Program`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/CCCCCC/000000?text=Program+Image"; }}
                  />
                </div>

                {/* Content Column - Order changes based on index */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} text-center lg:text-left`}>
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <div className="p-3 bg-blue-100 rounded-full mr-3 shadow-sm">{program.icon}</div>
                    <h3 className="text-3xl font-bold text-blue-800">{program.name}</h3>
                  </div>
                  <p className="text-xl italic text-purple-600 mb-4">{program.tagline}</p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <h4 className="text-xl font-semibold text-blue-700 mb-3">What your child will gain:</h4>
                  <ul className="text-gray-700 text-left mx-auto lg:mx-0 space-y-2 max-w-md">
                    {program.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start">
                        <Sparkles size={20} className="mr-3 mt-1 flex-shrink-0 text-yellow-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigateTo(program.ctaLink.substring(1))} // Simple internal navigation example
                    className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    {program.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className="bg-purple-700 py-16 text-center text-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready for Their Best Start?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We invite you to learn more about how our nurturing environment can unlock your child's full potential.
          </p>
          <button
            onClick={() => navigateTo('contact')} // Assuming 'contact' route exists
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xl"
          >
            Contact Admissions
          </button>
        </div>
      </section>
    </div>
  );
};

 export default PreKindergartenPage;
// "use client";
// import React, { useEffect, useRef } from 'react';
// import { Baby, Handshake, Brain, Sparkles, Heart, Star } from 'lucide-react'; // Icons for programs

// const PreKindergartenPage = ({ navigateTo }) => {
//   // Data for each Pre-Kindergarten program
//   const programs = [
//     {
//       id: 'momAndMe',
//       name: 'Mom & Me Program',
//       tagline: 'First Steps Together',
//       description: 'Our Mom & Me program is designed for infants and toddlers (ages 6-24 months) and their caregivers. It\'s a wonderful opportunity for early socialization, sensory exploration, and bonding. Through music, movement, story time, and play, we foster a gentle introduction to a learning environment while supporting parental connection and community.',
//       benefits: [
//         'Enhanced parent-child bonding & interaction',
//         'Early sensory and motor skill development',
//         'Nurturing social environment for infants',
//         'Building a supportive community for parents',
//       ],
//       icon: <Handshake className="w-8 h-8 text-pink-500" />,
//       imageUrl: 'https://placehold.co/800x500/FFD1DC/333333?text=Mom+%26+Me+Playtime',
//       cta: 'Explore Mom & Me',
//       ctaLink: '#momAndMeDetails', // Internal anchor or navigateTo
//     },
//     {
//       id: 'toddlers',
//       name: 'Toddlers Program',
//       tagline: 'Curiosity Unleashed',
//       description: 'The Toddlers program (ages 2-3 years) provides a safe, stimulating environment where young children can explore their newfound independence and curiosity. Our curriculum focuses on developing language, fine and gross motor skills, problem-solving, and early social interactions through guided play, creative arts, and sensory experiences.',
//       benefits: [
//         'Rapid language & communication growth',
//         'Refinement of fine & gross motor skills',
//         'Introduction to structured learning concepts',
//         'Fostering positive peer interactions',
//       ],
//       icon: <Baby className="w-8 h-8 text-green-500" />,
//       imageUrl: 'https://placehold.co/800x500/D1FFD1/333333?text=Toddler+Discovery',
//       cta: 'Discover Toddlers',
//       ctaLink: '#toddlerDetails',
//     },
//     {
//       id: 'discoverers',
//       name: 'Discoverers Program',
//       tagline: 'Foundations for Lifelong Learning',
//       description: 'Our Discoverers program (ages 3-5 years) prepares children for kindergarten by building strong foundations in literacy, numeracy, and critical thinking. We encourage active learning through themed units, project-based activities, and a rich array of hands-on experiences that spark imagination and a love for learning, all within a supportive and engaging classroom.',
//       benefits: [
//         'Advanced pre-literacy & numeracy skills',
//         'Developing problem-solving abilities',
//         'Cultivating creative expression through arts',
//         'Social-emotional readiness for kindergarten',
//       ],
//       icon: <Brain className="w-8 h-8 text-blue-500" />,
//       imageUrl: 'https://placehold.co/800x500/D1E7FF/333333?text=Discoverers+Learning',
//       cta: 'Enroll in Discoverers',
//       ctaLink: '#discovererDetails',
//     },
//   ];

//   // Refs for sections to observe intersection for animations
//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const programRefs = useRef([]); // To store refs for each program section
//   const ctaRef = useRef(null);

//   useEffect(() => {
//     const observerOptions = {
//       root: null, // Use the viewport as the root
//       rootMargin: '0px',
//       threshold: 0.15, // Trigger when 15% of the element is visible
//     };

//     const observerCallback = (entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//         } else {
//           // Optional: remove 'animate-in' if you want replay on scroll out
//           // entry.target.classList.remove('animate-in');
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);

//     // Observe all relevant sections
//     if (heroRef.current) observer.observe(heroRef.current);
//     if (introRef.current) observer.observe(introRef.current);
//     if (ctaRef.current) observer.observe(ctaRef.current);
//     programRefs.current.forEach(ref => {
//       if (ref) observer.observe(ref);
//     });

//     // Cleanup observer on component unmount
//     return () => {
//       if (heroRef.current) observer.unobserve(heroRef.current);
//       if (introRef.current) observer.unobserve(introRef.current);
//       if (ctaRef.current) observer.unobserve(ctaRef.current);
//       programRefs.current.forEach(ref => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []); // Empty dependency array means this effect runs once on mount

//   return (
//     <div className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen font-sans overflow-hidden relative">
//       {/* Dynamic CSS for animations */}
//       <style dangerouslySetInnerHTML={{ __html: `
//         @keyframes fadeInScaleUp {
//           0% { opacity: 0; transform: scale(0.95); }
//           100% { opacity: 1; transform: scale(1); }
//         }
//         @keyframes slideInFromBottom {
//           0% { opacity: 0; transform: translateY(50px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeIn {
//           0% { opacity: 0; }
//           100% { opacity: 1; }
//         }

//         .animate-hero { animation: fadeInScaleUp 1s ease-out forwards; opacity: 0; }
//         .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
//         .animate-on-scroll.animate-in { opacity: 1; transform: translateY(0); }
//         .animate-delay-1 { transition-delay: 0.1s; }
//         .animate-delay-2 { transition-delay: 0.2s; }
//         .animate-delay-3 { transition-delay: 0.3s; }
//         .animate-delay-4 { transition-delay: 0.4s; }

//         /* Custom shapes for innovative design */
//         .skewed-card-bg {
//             background-color: white;
//             transform: skewY(-2deg); /* Apply a slight skew */
//             transform-origin: top left;
//             z-index: 0;
//         }

//         .skewed-card-content {
//             transform: skewY(2deg); /* Counter-skew content */
//             transform-origin: top left;
//         }

//         /* Diagonal cut for benefit icons */
//         .benefit-icon-bg {
//           position: relative;
//           background-color: theme('colors.blue.100'); /* Tailwind's blue-100 */
//         }
//         .benefit-icon-bg::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(45deg, transparent 50%, theme('colors.blue.200') 50%);
//           z-index: -1;
//         }

//         /* Background patterns */
//         .bg-pattern-dots {
//           background-image: radial-gradient(#d1e7ff 1px, transparent 1px);
//           background-size: 20px 20px;
//           opacity: 0.3;
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           top: 0;
//           left: 0;
//           z-index: -1;
//         }
//       `}} />

//       {/* Background decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full bg-pattern-dots pointer-events-none"></div>
//       <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
//       <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow animation-delay-500"></div>


//       {/* Hero Section */}
//       <section ref={heroRef} className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center text-white text-center rounded-b-[4rem] md:rounded-b-[8rem] overflow-hidden shadow-2xl animate-hero">
//         <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center p-4">
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
//             Nurturing Bright Beginnings
//           </h1>
//           <p className="text-xl md:text-2xl max-w-2xl font-light opacity-90">
//             Empowering young minds through play, discovery, and loving guidance.
//           </p>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section ref={introRef} className="container mx-auto px-4 py-16 text-center animate-on-scroll">
//         <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
//           Our Pre-Kindergarten programs are thoughtfully designed to provide a rich, engaging, and age-appropriate learning experience for every child. We believe in fostering a holistic development that spans cognitive, social, emotional, and physical growth.
//         </p>
//       </section>

//       {/* Programs Section */}
//       <section className="bg-transparent py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Our Inspiring Programs</h2>
//           <div className="space-y-24"> {/* Increased space between programs */}
//             {programs.map((program, index) => (
//               <div
//                 key={program.id}
//                 id={program.id} // For internal navigation
//                 ref={el => programRefs.current[index] = el}
//                 className={`relative group flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center p-6 sm:p-10 rounded-3xl shadow-xl border border-gray-100 bg-white transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] animate-on-scroll`}
//                 style={{ transitionDelay: `${index * 0.2}s` }}
//               >
//                 {/* Background Skewed Shape - Absolute position to allow content to flow over it */}
//                 <div className={`absolute inset-0 bg-blue-50 rounded-3xl overflow-hidden z-0 ${index % 2 === 0 ? 'lg:skewed-card-bg' : 'lg:skewed-card-bg lg:-scale-x-100'} transition-all duration-500 group-hover:bg-blue-100`}></div>


//                 {/* Image Column - Order changes based on index */}
//                 <div className={`relative z-10 w-full h-64 md:h-80 rounded-2xl shadow-lg overflow-hidden ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} transition-all duration-500 group-hover:scale-[1.02]`}>
//                   <img
//                     src={program.imageUrl}
//                     alt={`${program.name} Program`}
//                     className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
//                     onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/CCCCCC/000000?text=Program+Image"; }}
//                   />
//                 </div>

//                 {/* Content Column - Order changes based on index */}
//                 <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} relative z-10 text-center lg:text-left p-2`}>
//                   <div className="flex items-center justify-center lg:justify-start mb-4">
//                     <div className="p-4 bg-purple-100 rounded-full mr-3 shadow-md border border-purple-200">{program.icon}</div>
//                     <h3 className="text-3xl md:text-4xl font-extrabold text-blue-800 leading-tight">{program.name}</h3>
//                   </div>
//                   <p className="text-xl italic text-purple-600 mb-4">{program.tagline}</p>
//                   <p className="text-lg text-gray-700 leading-relaxed mb-6">
//                     {program.description}
//                   </p>
//                   <h4 className="text-xl font-semibold text-blue-700 mb-4">What your child will gain:</h4>
//                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-left mx-auto lg:mx-0 max-w-md">
//                     {program.benefits.map((benefit, bIndex) => (
//                       <li key={bIndex} className="flex items-center p-3 rounded-lg bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:bg-yellow-50 hover:shadow-md">
//                         <Star size={20} className="mr-3 flex-shrink-0 text-yellow-500" /> {/* Changed icon to Star */}
//                         <span className="text-base">{benefit}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <button
//                     onClick={() => navigateTo(program.ctaLink.substring(1))} // Simple internal navigation example
//                     className="mt-10 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
//                   >
//                     {program.cta}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section ref={ctaRef} className="bg-gradient-to-r from-purple-700 to-pink-600 py-16 text-center text-white rounded-t-[4rem] md:rounded-t-[8rem] shadow-2xl animate-on-scroll">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Ready for Their Best Start?</h2>
//           <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
//             We invite you to learn more about how our nurturing environment can unlock your child's full potential.
//           </p>
//           <button
//             onClick={() => navigateTo('contact')} // Assuming 'contact' route exists
//             className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-yellow-300"
//           >
//             Contact Admissions
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PreKindergartenPage;"use client";
// import React, { useEffect, useRef } from 'react';
// import { Baby, Handshake, Brain, Sparkles, Heart, Star, Smile, Laugh, Puzzle, Rocket, Trophy, Lightbulb } from 'lucide-react'; // Added more playful icons

// const PreKindergartenPage = ({ navigateTo }) => {
//   // Data for each Pre-Kindergarten program
//   const programs = [
//     {
//       id: 'momAndMe',
//       name: 'Mom & Me Fun',
//       tagline: 'Tiny Steps, Big Joys',
//       description: 'Our Mom & Me program is designed for infants and toddlers (ages 6-24 months) and their caregivers. It\'s a wonderful opportunity for early socialization, sensory exploration, and bonding. Through music, movement, story time, and play, we foster a gentle introduction to a learning environment while supporting parental connection and community.',
//       benefits: [
//         'Enhanced parent-child bonding & interaction',
//         'Early sensory and motor skill development',
//         'Nurturing social environment for infants',
//         'Building a supportive community for parents',
//       ],
//       icon: <Handshake className="w-10 h-10 text-orange-500" />, // Larger icon
//       imageUrl: 'https://placehold.co/800x500/FFD1DC/333333?text=Mom+%26+Me+Playtime',
//       cta: 'Join the Fun',
//       ctaLink: '#momAndMeDetails',
//       cardColor: 'bg-yellow-50',
//       shadowColor: 'shadow-yellow-200'
//     },
//     {
//       id: 'toddlers',
//       name: 'Toddlers Adventures',
//       tagline: 'Curiosity Unleashed!',
//       description: 'The Toddlers program (ages 2-3 years) provides a safe, stimulating environment where young children can explore their newfound independence and curiosity. Our curriculum focuses on developing language, fine and gross motor skills, problem-solving, and early social interactions through guided play, creative arts, and sensory experiences.',
//       benefits: [
//         'Rapid language & communication growth',
//         'Refinement of fine & gross motor skills',
//         'Introduction to structured learning concepts',
//         'Fostering positive peer interactions',
//       ],
//       icon: <Baby className="w-10 h-10 text-lime-600" />, // Larger icon
//       imageUrl: 'https://placehold.co/800x500/D1FFD1/333333?text=Toddler+Discovery',
//       cta: 'Explore Adventures',
//       ctaLink: '#toddlerDetails',
//       cardColor: 'bg-green-50',
//       shadowColor: 'shadow-green-200'
//     },
//     {
//       id: 'discoverers',
//       name: 'Little Discoverers',
//       tagline: 'Foundations for Lifelong Learning!',
//       description: 'Our Discoverers program (ages 3-5 years) prepares children for kindergarten by building strong foundations in literacy, numeracy, and critical thinking. We encourage active learning through themed units, project-based activities, and a rich array of hands-on experiences that spark imagination and a love for learning, all within a supportive and engaging classroom.',
//       benefits: [
//         'Advanced pre-literacy & numeracy skills',
//         'Developing problem-solving abilities',
//         'Cultivating creative expression through arts',
//         'Social-emotional readiness for kindergarten',
//       ],
//       icon: <Brain className="w-10 h-10 text-teal-600" />, // Larger icon
//       imageUrl: 'https://placehold.co/800x500/D1E7FF/333333?text=Discoverers+Learning',
//       cta: 'Become a Discoverer',
//       ctaLink: '#discovererDetails',
//       cardColor: 'bg-purple-50',
//       shadowColor: 'shadow-purple-200'
//     },
//   ];

//   // Refs for sections to observe intersection for animations
//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const programRefs = useRef([]);
//   const ctaRef = useRef(null);

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.15,
//     };

//     const observerCallback = (entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//         } else {
//           // entry.target.classList.remove('animate-in'); // Keep for replay if desired
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);

//     if (heroRef.current) observer.observe(heroRef.current);
//     if (introRef.current) observer.observe(introRef.current);
//     if (ctaRef.current) observer.observe(ctaRef.current);
//     programRefs.current.forEach(ref => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       if (heroRef.current) observer.unobserve(heroRef.current);
//       if (introRef.current) observer.unobserve(introRef.current);
//       if (ctaRef.current) observer.unobserve(ctaRef.current);
//       programRefs.current.forEach(ref => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <div className="pt-24 pb-12 bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 min-h-screen font-sans overflow-hidden relative">
//       {/* Dynamic CSS for animations and custom shapes */}
//       <style dangerouslySetInnerHTML={{ __html: `
//         @keyframes fadeInScaleUp {
//           0% { opacity: 0; transform: scale(0.9); }
//           100% { opacity: 1; transform: scale(1); }
//         }
//         @keyframes slideInFromBottom {
//           0% { opacity: 0; transform: translateY(50px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes bounceIn {
//             0% { transform: scale(0.3); opacity: 0; }
//             50% { transform: scale(1.05); opacity: 1; }
//             70% { transform: scale(0.9); }
//             100% { transform: scale(1); }
//         }
//         @keyframes pulseSlow {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }
//         @keyframes wobble {
//           0%, 100% { transform: translateX(0); }
//           15% { transform: translateX(-5px); }
//           30% { transform: translateX(5px); }
//           45% { transform: translateX(-3px); }
//           60% { transform: translateX(3px); }
//           75% { transform: translateX(-1px); }
//         }
//         @keyframes floatEffect {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           25% { transform: translateY(-5px) rotate(2deg); }
//           50% { transform: translateY(0px) rotate(-2deg); }
//           75% { transform: translateY(5px) rotate(1deg); }
//         }

//         .animate-hero { animation: fadeInScaleUp 1s ease-out forwards; opacity: 0; }
//         .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
//         .animate-on-scroll.animate-in { opacity: 1; transform: translateY(0); }

//         .animate-pulse-slow { animation: pulseSlow 3s infinite ease-in-out; }

//         /* Custom blob shapes for hero and CTA */
//         .hero-blob {
//             border-bottom-left-radius: 80% 60%;
//             border-bottom-right-radius: 80% 60%;
//             clip-path: ellipse(100% 60% at 50% 100%);
//         }
//         .cta-blob {
//             border-top-left-radius: 80% 60%;
//             border-top-right-radius: 80% 60%;
//             clip-path: ellipse(100% 60% at 50% 0%);
//         }

//         /* Unique card background with playful elements */
//         .unique-card-bg {
//             background-color: white;
//             border-radius: 3rem; /* Even larger rounded corners */
//             position: relative;
//             z-index: 0;
//             box-shadow: 0 20px 40px rgba(0,0,0,0.15), 0 0 0 5px rgba(255,255,255,0.9) inset; /* Deeper shadow with thick inner white glow */
//             overflow: hidden;
//         }
//         .unique-card-bg::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(135deg, rgba(255,255,255,0.7) 0%, transparent 50%, rgba(255,255,255,0.2) 100%);
//           border-radius: inherit;
//           z-index: 1;
//           pointer-events: none;
//         }
//         /* Overlapping blob for card */
//         .card-blob-left {
//           position: absolute;
//           top: -20px;
//           left: -20px;
//           width: 100px;
//           height: 100px;
//           background-color: theme('colors.blue.300');
//           border-radius: 50%;
//           filter: blur(20px);
//           opacity: 0.3;
//           z-index: 0;
//           animation: floatEffect 5s ease-in-out infinite alternate;
//         }
//         .card-blob-right {
//           position: absolute;
//           bottom: -20px;
//           right: -20px;
//           width: 120px;
//           height: 120px;
//           background-color: theme('colors.pink.300');
//           border-radius: 50%;
//           filter: blur(25px);
//           opacity: 0.3;
//           z-index: 0;
//           animation: floatEffect 6s ease-in-out infinite alternate-reverse;
//         }


//         /* Playful benefit list items with bounce */
//         .benefit-item {
//             background-color: #f0f9ff; /* light blue */
//             border: 2px solid #bfdbfe; /* blue-200 */
//             box-shadow: 0 6px 12px rgba(0,0,0,0.08);
//             transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Springy transition */
//         }
//         .benefit-item:hover {
//             transform: translateY(-8px) scale(1.03) rotate(-2deg); /* More exaggerated hover */
//             box-shadow: 0 12px 24px rgba(0,0,0,0.15);
//             background-color: #e0f2fe; /* blue-50 */
//         }

//         /* Decorative patterns */
//         .bg-confetti-dots-unique {
//           background-image: radial-gradient(circle at 15% 25%, #ffe0f0 1px, transparent 1px),
//                             radial-gradient(circle at 85% 75%, #d1e7ff 1px, transparent 1px),
//                             radial-gradient(circle at 50% 40%, #fffacd 1px, transparent 1px),
//                             radial-gradient(circle at 30% 90%, #d4eeff 1px, transparent 1px);
//           background-size: 35px 35px;
//           opacity: 0.7;
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           top: 0;
//           left: 0;
//           z-index: -1;
//           pointer-events: none;
//         }
//       `}} />

//       {/* Background decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full bg-confetti-dots-unique pointer-events-none"></div>
//       <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow"></div>
//       <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow animation-delay-500"></div>
//       <div className="absolute bottom-1/4 left-1/10 w-48 h-48 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow animation-delay-1000"></div>


//       {/* Hero Section */}
//       <section ref={heroRef} className="relative h-[28rem] bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center text-white text-center hero-blob overflow-hidden shadow-2xl animate-hero">
//         <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center p-4">
//           <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-xl leading-tight">
//             Play. Create. Shine!
//           </h1>
//           <p className="text-xl md:text-2xl max-w-2xl font-light opacity-95">
//             Where every day is an exciting adventure, sparking joy and discovery in every child.
//           </p>
//         </div>
//         {/* Floating background shapes for hero */}
//         <div className="absolute w-24 h-24 bg-yellow-300 rounded-full -top-8 -left-8 blur-lg opacity-40 animate-floatEffect"></div>
//         <div className="absolute w-32 h-32 bg-pink-300 rounded-full -bottom-8 -right-8 blur-lg opacity-40 animate-floatEffect animation-delay-1000"></div>
//       </section>

//       {/* Introduction */}
//       <section ref={introRef} className="relative z-10 bg-white p-8 md:p-16 rounded-3xl -mt-20 mx-auto max-w-4xl shadow-xl border-4 border-dashed border-blue-200 text-center animate-on-scroll">
//         <div className="absolute inset-0 bg-blue-50 rounded-3xl -z-10 transform -rotate-2 scale-105"></div> {/* Background tilt */}
//         <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed mb-6">
//           Step into a world of wonder and discovery! Our Pre-Kindergarten programs are crafted to ignite curiosity, foster creativity, and build a strong foundation for a joyful learning journey.
//         </p>
//         <div className="flex justify-center space-x-6">
//           <Rocket size={48} className="text-purple-500 animate-[wobble_3s_ease-in-out_infinite_alternate]" />
//           <Trophy size={48} className="text-yellow-500 animate-[wobble_3s_ease-in-out_infinite_alternate_0.5s]" />
//           <Lightbulb size={48} className="text-green-500 animate-[wobble_3s_ease-in-out_infinite_alternate_1s]" />
//         </div>
//       </section>

//       {/* Programs Section */}
//       <section className="bg-transparent py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-5xl font-extrabold text-center text-blue-800 mb-20 drop-shadow-lg">Our Super Fun Programs!</h2>
//           <div className="space-y-36"> {/* Increased space for visual impact */}
//             {programs.map((program, index) => (
//               <div
//                 key={program.id}
//                 id={program.id}
//                 ref={el => programRefs.current[index] = el}
//                 className={`relative group flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center p-6 sm:p-12 unique-card-bg transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] animate-on-scroll`}
//                 style={{ transitionDelay: `${index * 0.25}s` }}
//               >
//                 {/* Internal decorative blobs */}
//                 <div className="card-blob-left"></div>
//                 <div className="card-blob-right"></div>

//                 {/* Image Column - Order changes based on index */}
//                 <div className={`relative z-10 w-full h-72 md:h-96 rounded-3xl shadow-xl overflow-hidden ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} transition-all duration-500 group-hover:scale-[1.02] border-4 border-white transform ${index % 2 === 0 ? 'rotate-[-3deg] group-hover:rotate-[-5deg]' : 'rotate-[3deg] group-hover:rotate-[5deg]'}`}>
//                   <img
//                     src={program.imageUrl}
//                     alt={`${program.name} Program`}
//                     className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
//                     onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/CCCCCC/000000?text=Program+Image"; }}
//                   />
//                 </div>

//                 {/* Content Column - Order changes based on index */}
//                 <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} relative z-10 text-center lg:text-left p-2`}>
//                   <div className="flex items-center justify-center lg:justify-start mb-4">
//                     <div className={`p-5 rounded-full mr-4 shadow-lg border-2 ${program.cardColor.replace('bg-', 'border-')} transform rotate-[-5deg] group-hover:rotate-[5deg] transition-transform duration-300 ${program.cardColor.replace('bg-', 'bg-400')}`}>{program.icon}</div>
//                     <h3 className="text-4xl md:text-6xl font-extrabold text-blue-800 leading-tight drop-shadow-lg">{program.name}</h3>
//                   </div>
//                   <p className="text-xl italic text-purple-600 mb-4">{program.tagline}</p>
//                   <p className="text-lg text-gray-700 leading-relaxed mb-8">
//                     {program.description}
//                   </p>
//                   <h4 className="text-xl font-semibold text-blue-700 mb-4">What your child will gain:</h4>
//                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-left mx-auto lg:mx-0 max-w-md">
//                     {program.benefits.map((benefit, bIndex) => (
//                       <li key={bIndex} className="flex items-center p-4 rounded-xl benefit-item border-l-4 border-yellow-400"> {/* Added border-l-4 */}
//                         <Star size={24} className="mr-3 flex-shrink-0 text-yellow-500 animate-[bounceIn_1s_ease-out_1]" /> {/* Bounce on load */}
//                         <span className="text-base font-semibold">{benefit}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <button
//                     onClick={() => navigateTo(program.ctaLink.substring(1))}
//                     className="mt-12 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-5 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xl transform hover:-translate-y-3 focus:outline-none focus:ring-4 focus:ring-red-300 active:scale-90 relative overflow-hidden"
//                   >
//                     <span className="relative z-10">{program.cta}</span>
//                     <span className="absolute inset-0 bg-white opacity-20 rounded-full mix-blend-overlay animate-pulse"></span>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section ref={ctaRef} className="bg-gradient-to-r from-purple-600 to-blue-500 py-16 text-center text-white cta-blob shadow-2xl animate-on-scroll">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Ready for Their Best Start?</h2>
//           <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
//             Let's embark on an incredible learning adventure together! Enroll your child today.
//           </p>
//           <button
//             onClick={() => navigateTo('contact')}
//             className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-5 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xl transform hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-yellow-300 active:scale-95"
//           >
//             Contact Admissions
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PreKindergartenPage;

