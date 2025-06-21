import React from 'react';

const CallToActionSection = ({ navigateTo }) => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 md:py-20 rounded-2xl shadow-xl mb-12">
      <div className="container mx-auto text-center px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Start Your Child's Journey?
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90">
          Explore our admissions process and discover how SchoolName can be the perfect fit for your family.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
         <button
  onClick={() => window.open('https://alphabet.myschoolone.com/cloud/Admission/ApplicationFormV3.php', '_blank')}
  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300"
>
  Apply Now
</button>

          <button
            onClick={() => navigateTo('contact')}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Request Information
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
