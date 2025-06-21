import { Target, Eye, Handshake, GraduationCap, Lightbulb, Award } from 'lucide-react';
import brand6 from '../../Assets/brand6.png';
import React, { useEffect } from 'react';

const MissionVisionSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen font-inter">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center rounded-b-3xl overflow-hidden shadow-lg" style={{ backgroundImage: 'url("https://placehold.co/1500x500/00CED1/FFFFFF?text=Our+Core+Beliefs")' }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-75 flex items-center justify-center p-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center drop-shadow-2xl animate-fade-in-down">
            Our Guiding Principles
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Mission Section */}
        <section className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-200">
          <div className="flex flex-col items-center text-center">
            <Target size={64} className="text-blue-600 mb-6" />
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To develop compassionate and young life-long learners in a stimulating environment of academic excellence. We strive to instill values of mutual respect, honesty, empathy and open-mindedness. With tolerance, our learners will become humane and knowledgeable citizens of the world, understanding various cultures thus promoting unity.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-green-200">
          <div className="flex flex-col items-center text-center">
            <Eye size={64} className="text-green-600 mb-6" />
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              aLphabet’s vision is to provide a stimulating learning environment for children and develop a sense of “yearning for learning” amongst young minds by nurturing the uniqueness of each child. We achieve this in myriad ways right from our classroom environment to our pedagogy which is upgraded regularly. We aim at imparting a holistic education, fostering every child in becoming a confident, independent and a self-esteemed individual.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-200">
          <div className="flex flex-col items-center text-center">
            <Lightbulb size={64} className="text-purple-600 mb-6" />
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Our Philosophy</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Each child is born with a set of culture and values which have to be an intrinsic part of their teaching and learning process. Complete education should enhance qualities like tolerance, compassion, respect, and co-existence leading to a peaceful life on this planet. aLphabet internationaL instills leadership qualities to surge into the evolving century. The school creates an environment of continuous learning, critical thinking and excellence in academics. The holistic development of the learner is also dependent on the creative expression in all forms. The school will grow as a well-knit community with the core team of learners, namely-teachers, students and the parents working hand in hand in an open environment, promoting international-mindedness.
            </p>
          </div>
        </section>

        {/* IB Mission Section */}
        <section className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-yellow-200">
          <div className="flex flex-col items-center text-center">
            <img
              src={brand6}
              alt="IB Award"
              className="w-16 h-16 mb-6"
            />
            <h2 className="text-3xl font-bold text-yellow-800 mb-4">IB Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The International Baccalaureate® aims to develop inquiring, knowledgeable and caring young people who help to create a better and more peaceful world through intercultural understanding and respect. To this end the organization works with schools, governments and international organizations to develop challenging programs of international education and rigorous assessment. These programs encourage students across the world to become active, compassionate and lifelong learners who understand that other people, with their differences, can also be right.
            </p>
          </div>
        </section>
      </div>

      {/* Core Values Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 mt-16 rounded-xl mx-auto max-w-6xl shadow-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-lg">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <Handshake size={56} className="text-indigo-600 mx-auto mb-5" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-700 text-base">Upholding honesty, respect, and ethical conduct in all actions.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <GraduationCap size={56} className="text-red-600 mx-auto mb-5" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-700 text-base">Striving for the highest standards in academics and personal growth.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <Handshake size={56} className="text-orange-600 mx-auto mb-5" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-700 text-base">Building a supportive and inclusive environment for all.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVisionSection;