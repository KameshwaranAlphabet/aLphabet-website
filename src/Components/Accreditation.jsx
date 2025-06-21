// src/pages/AccreditationSection.jsx
import React from 'react';
import { CheckCircle, School, Award, ShieldCheck } from 'lucide-react'; // Changed 'Certificate' to 'Award'

const AccreditationSection = ({ navigateTo }) => {
  const accreditations = [
    {
      id: 1,
      body: 'Regional Accreditation Body (e.g., WASC, AdvancED/Cognia, NEASC, SACSCOC)',
      logo: 'https://placehold.co/150x80/6495ED/FFFFFF?text=Accreditation+Logo+1', // Placeholder logo
      description: 'Our primary accreditation ensures we meet rigorous standards for educational quality, curriculum, faculty qualifications, and student outcomes across all programs.',
      benefits: [
        'Ensures transferability of credits',
        'Validates academic quality and integrity',
        'Recognized by colleges and universities',
      ],
    },
    {
      id: 2,
      body: 'Specialized Program Accreditation (e.g., Arts/STEM specific)',
      logo: 'https://placehold.co/150x80/90EE90/000000?text=Accreditation+Logo+2', // Placeholder logo
      description: 'This specialized accreditation validates the excellence of our [e.g., Arts/STEM] programs, demonstrating our commitment to cutting-edge education in these fields.',
      benefits: [
        'Recognizes specialized program quality',
        'Enhances opportunities for students in specific fields',
        'Reflects industry relevance and standards',
      ],
    },
    {
        id: 3,
        body: 'International Baccalaureate (IBO)',
        logo: 'https://placehold.co/150x80/FFD700/000000?text=IB+Logo', // Placeholder logo
        description: 'As an authorized IB World School, we offer the challenging International Baccalaureate Primary Years Programme (PYP) and Middle Years Programme (MYP), fostering internationally-minded students.',
        benefits: [
          'Global recognition for academic excellence',
          'Develops critical thinking and inquiry-based learning',
          'Promotes intercultural understanding',
        ],
      },
  ];

  return (
    <div className="pb-12 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://placehold.co/1500x500/000080/FFFFFF?text=Accreditation")' }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-lg animate-fade-in-down">
            Our Commitment to Excellence
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
         As an IB Continuum School, aLphabet strives to develop internationally-minded people by providing an education with the ten learner profile attributes at the very center. Our goal is to develop life-long learners who are inquirers, knowledgeable, thinkers, communicators, principled, open-minded, caring, risk-takers, balanced & reflective.
        </p>
      </section>

      {/* Accreditation Bodies Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Our Accreditations</h2>
          <div className="space-y-16">
            {accreditations.map((accreditation, index) => (
              <div key={accreditation.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''} bg-blue-50 p-8 rounded-lg shadow-xl`}>
                {/* Accreditation Details */}
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'} text-center lg:text-left`}>
                  {accreditation.logo && (
                    <img
                      src={accreditation.logo}
                      alt={`${accreditation.body} Logo`}
                      className="h-20 w-auto mx-auto lg:mx-0 mb-6 object-contain"
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x80/CCCCCC/000000?text=Logo"; }} // Fallback
                    />
                  )}
                  <Award size={60} className="text-blue-600 mx-auto lg:mx-0 mb-4" /> {/* Changed to Award */}
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{accreditation.body}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {accreditation.description}
                  </p>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Benefits for Students:</h4>
                  <ul className="text-gray-700 text-left mx-auto lg:mx-0 space-y-2 max-w-sm">
                    {accreditation.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start">
                        <CheckCircle size={20} className="mr-3 mt-1 flex-shrink-0 text-green-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visuals / Additional Info - You could add a photo of a certificate here or a relevant graphic */}
                <div className={`${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'} w-full h-80 bg-gray-200 rounded-lg shadow-md flex items-center justify-center overflow-hidden`}>
                  {/* Placeholder for an image representing the accreditation/standard */}
                  <img src={`https://placehold.co/800x600/${index % 2 === 0 ? 'D4E6F1' : 'F1D4E6'}/000000?text=Quality+Assurance`} alt="Accreditation Graphic" className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="bg-blue-800 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Why Accreditation Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-4">
              <ShieldCheck size={60} className="text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-lg">Accreditation validates our commitment to delivering high-quality education and maintaining rigorous standards.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <School size={60} className="text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Continuous Improvement</h3>
              <p className="text-lg">It drives us to constantly evaluate and enhance our programs, facilities, and teaching methods.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Award size={60} className="text-yellow-400 mb-4" /> {/* Changed to Award */}
              <h3 className="text-2xl font-semibold mb-2">Student Recognition</h3>
              <p className="text-lg">Ensures that our students' achievements are recognized and valued by institutions worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Have Questions About Our Accreditation?</h2>
          <p className="text-xl text-gray-700 mb-8">
            We are transparent about our standards and happy to provide more information.
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xl"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AccreditationSection;
