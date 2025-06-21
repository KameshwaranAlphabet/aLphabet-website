// src/pages/FAQPage.jsx
import React, { useState } from 'react';
import { HelpCircle, ChevronDown, BookOpen, MessageCircle, Building2 } from 'lucide-react'; // Icons

const FAQPage = ({ navigateTo }) => {
  // State to manage which FAQ item is open (accordion functionality)
  const [openFAQ, setOpenFAQ] = useState(null);

  // Toggle function for accordion
  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // Sample FAQ data (you can expand this with more categories and questions)
  const faqCategories = [
    {
      id: 'admissions',
      name: 'Admissions & Enrollment',
      icon: <BookOpen size={24} className="mr-2 text-blue-600" />,
      questions: [
        {
          id: 'adm1',
          question: 'What is the application process for [Your School Name]?',
          answer: 'The application process involves an online application form, submission of academic records, teacher recommendations, and an interview for both parents and students. Specific deadlines are available on our Admissions page.'
        },
        {
          id: 'adm2',
          question: 'Do you offer scholarships or financial aid?',
          answer: 'Yes, we offer a limited number of merit-based scholarships and need-based financial aid. Details and application procedures can be found on the Financial Aid section of our Admissions page.'
        },
        {
          id: 'adm3',
          question: 'What are the age requirements for different grade levels?',
          answer: 'Age requirements vary by grade level. Generally, students entering Kindergarten must be 5 years old by September 1st. Please refer to our Grade Levels section for precise age-grade mapping.'
        },
      ]
    },
    {
      id: 'academics',
      name: 'Academics & Curriculum',
      icon: <BookOpen size={24} className="mr-2 text-green-600" />,
      questions: [
        {
          id: 'aca1',
          question: 'What curriculum does [Your School Name] follow?',
          answer: 'We follow a comprehensive curriculum that integrates national standards with international best practices. Our IB Programmes are also a core part of our academic offerings for certain age groups.'
        },
        {
          id: 'aca2',
          question: 'What extracurricular activities are available?',
          answer: 'We offer a wide range of extracurricular activities including various sports, arts clubs, debate, robotics, and community service initiatives. You can find a full list on our Student Life page.'
        },
        {
          id: 'aca3',
          question: 'How do you support students with special learning needs?',
          answer: 'Our dedicated student support team provides tailored assistance, including individualized education plans (IEPs), remedial classes, and counseling services to ensure every student thrives.'
        },
      ]
    },
    {
      id: 'campus',
      name: 'Campus Life & Facilities',
      icon: <Building2 size={24} className="mr-2 text-purple-600" />,
      questions: [
        {
          id: 'cam1',
          question: 'What are your school hours?',
          answer: 'School typically runs from 8:00 AM to 3:30 PM, with extended hours for extracurricular activities. Our administrative offices are open from 8:00 AM to 4:00 PM.'
        },
        {
          id: 'cam2',
          question: 'Do you provide transportation services?',
          answer: 'Yes, we offer bus transportation services covering various routes. Please inquire with our administration office for route details and fees.'
        },
        {
          id: 'cam3',
          question: 'Can parents visit the campus?',
          answer: 'Parents are welcome to visit by appointment. We encourage prospective families to book a campus tour through our website. Current parents can coordinate visits with school administration.'
        },
      ]
    },
  ];

  return (
    <div className=" pb-12 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://placehold.co/1500x500/1E90FF/FFFFFF?text=Frequently+Asked+Questions")' }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-lg">
            Your Questions, Answered
          </h1>
          <p className="text-xl text-white absolute bottom-8">
            Find quick answers to common queries about our school.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Commonly Asked Questions</h2>
        <div className="section-divider"></div>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
          We understand you might have many questions about our school, from admissions to daily campus life. We've compiled a list of frequently asked questions to help you find the information you need quickly and easily.
        </p>
      </section>

      {/* FAQ Categories and Accordion */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqCategories.map((category) => (
            <div key={category.id} className="mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center md:justify-start">
                {category.icon}
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.questions.map((faq) => (
                  <div key={faq.id} className="rounded-lg shadow-md overflow-hidden">
                    <button
                      className={`faq-question-btn ${openFAQ === faq.id ? 'open' : ''}`}
                      onClick={() => toggleFAQ(faq.id)}
                      aria-expanded={openFAQ === faq.id}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={24} className={`chevron-icon ${openFAQ === faq.id ? 'rotate' : ''}`} />
                    </button>
                    {openFAQ === faq.id && (
                      <div id={`faq-answer-${faq.id}`} className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Can't Find Your Answer Section */}
      <section className="bg-blue-800 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <div className="section-divider bg-white"></div>
          <p className="text-xl mb-8">
            If you couldn't find the answer you were looking for, please don't hesitate to reach out to our team. We're here to help!
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xl flex items-center justify-center mx-auto"
          >
            <MessageCircle size={24} className="mr-2" /> Contact Us Directly
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
