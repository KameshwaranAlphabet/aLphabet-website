"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Users, Mail, Phone, MessageSquare, MapPin, CheckCircle, Lightbulb } from 'lucide-react'; // Icons

const BookATourPage = ({ navigateTo }) => {
  // State for form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    numAdults: 1,
    numChildren: 0,
    interests: '',
    questions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd send this data to a backend
    console.log('Tour Booking Submitted:', formData);
    alert('Thank you for your tour inquiry! We will contact you shortly to confirm the details.');
    // Optionally navigate or show a success message
    // navigateTo('thank-you-for-tour');
    setFormData({ // Reset form
      fullName: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      numAdults: 1,
      numChildren: 0,
      interests: '',
      questions: ''
    });
  };

  // Refs for scroll animations
  const heroRef = useRef(null);
  const whyTourRef = useRef(null);
  const formRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
    if (whyTourRef.current) observer.observe(whyTourRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (whyTourRef.current) observer.unobserve(whyTourRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <div className="pt-24 pb-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen font-sans overflow-hidden relative">
      {/* Dynamic CSS for animations and unique shapes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInSlideUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInExpand {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }
        @keyframes waveEffect {
          0%, 100% { border-radius: 60% 40% 70% 30% / 60% 60% 40% 40%; }
          50% { border-radius: 30% 70% 50% 50% / 30% 30% 70% 70%; }
        }

        .animate-hero { animation: fadeInExpand 1s ease-out forwards; opacity: 0; }
        .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
        .animate-on-scroll.animate-in { opacity: 1; transform: translateY(0); }

        .blob-shape-1 {
          background: linear-gradient(135deg, #FFD1DC, #F0B27A); /* Pink to Orange */
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: waveEffect 8s ease-in-out infinite alternate;
        }
        .blob-shape-2 {
          background: linear-gradient(45deg, #D1E7FF, #A0E6FF); /* Light Blue to Cyan */
          border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
          animation: waveEffect 10s ease-in-out infinite alternate-reverse;
        }

        .input-style {
          @apply w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300 shadow-sm;
        }
        .label-style {
          @apply block text-gray-700 font-semibold mb-2;
        }
      `}} />

      {/* Decorative background blobs */}
      <div className="absolute top-0 -left-20 w-80 h-80 blob-shape-1 opacity-30 z-0"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 blob-shape-2 opacity-30 z-0"></div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[26rem] md:h-[30rem] bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white text-center rounded-b-[4rem] md:rounded-b-[6rem] shadow-2xl overflow-hidden animate-hero">
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-xl leading-tight">
            Step Inside Our World!
          </h1>
          <p className="text-lg md:text-xl max-w-2xl font-light opacity-95">
            Experience our vibrant campus and see where learning comes to life.
          </p>
        </div>
      </section>

      {/* Why Tour Section */}
      <section ref={whyTourRef} className="relative z-10 bg-white p-8 md:p-16 rounded-3xl -mt-20 mx-auto max-w-5xl shadow-xl border-4 border-dashed border-purple-200 text-center animate-on-scroll">
        <div className="absolute inset-0 bg-purple-50 rounded-3xl -z-10 transform rotate-2 scale-105"></div> {/* Background tilt */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-800 mb-8">Why Take a Tour?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 mb-10">
          <div className="flex flex-col items-center p-4">
            <CheckCircle size={48} className="text-green-500 mb-4 animate-[pulseDot_2s_infinite_ease-in-out]" />
            <p className="font-semibold text-lg">See Our Dynamic Classrooms</p>
            <p className="text-sm opacity-80">Observe our engaging learning environments firsthand.</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <Lightbulb size={48} className="text-yellow-500 mb-4 animate-[pulseDot_2s_infinite_ease-in-out_0.5s]" />
            <p className="font-semibold text-lg">Meet Our Passionate Educators</p>
            <p className="text-sm opacity-80">Connect with the dedicated team shaping young minds.</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <MapPin size={48} className="text-blue-500 mb-4 animate-[pulseDot_2s_infinite_ease-in-out_1s]" />
            <p className="font-semibold text-lg">Explore Our Inspiring Campus</p>
            <p className="text-sm opacity-80">Wander through our facilities designed for growth and play.</p>
          </div>
        </div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          A personal tour is the best way to truly feel the spirit of our school. We look forward to welcoming you!
        </p>
      </section>

      {/* Booking Form Section */}
      <section ref={formRef} className="bg-white py-16 mt-16 rounded-3xl mx-auto max-w-4xl shadow-2xl border-t-8 border-b-8 border-indigo-300 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-800 mb-12 text-center">Schedule Your Visit</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2">
              <label htmlFor="fullName" className="label-style">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="input-style"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="label-style">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-style"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="label-style">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-style"
                placeholder="(123) 456-7890"
                required
              />
            </div>
            <div>
              <label htmlFor="preferredDate" className="label-style">Preferred Date</label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="input-style"
                required
              />
            </div>
            <div>
              <label htmlFor="preferredTime" className="label-style">Preferred Time</label>
              <input
                type="time"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="input-style"
                required
              />
            </div>
            <div>
              <label htmlFor="numAdults" className="label-style">Number of Adults</label>
              <input
                type="number"
                id="numAdults"
                name="numAdults"
                min="1"
                value={formData.numAdults}
                onChange={handleChange}
                className="input-style"
                required
              />
            </div>
            <div>
              <label htmlFor="numChildren" className="label-style">Number of Children (attending tour)</label>
              <input
                type="number"
                id="numChildren"
                name="numChildren"
                min="0"
                value={formData.numChildren}
                onChange={handleChange}
                className="input-style"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="interests" className="label-style">Areas of Interest (e.g., curriculum, facilities)</label>
              <textarea
                id="interests"
                name="interests"
                rows="3"
                value={formData.interests}
                onChange={handleChange}
                className="input-style resize-y"
                placeholder="Tell us what you're most interested in seeing or discussing..."
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="questions" className="label-style">Any Specific Questions?</label>
              <textarea
                id="questions"
                name="questions"
                rows="3"
                value={formData.questions}
                onChange={handleChange}
                className="input-style resize-y"
                placeholder="Feel free to ask anything you'd like us to prepare for..."
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center mt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xl transform hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-indigo-300 active:scale-95 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Calendar size={24} className="mr-3" /> Book Your Tour
                </span>
                <span className="absolute inset-0 bg-white opacity-20 rounded-full mix-blend-overlay animate-pulse"></span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Quick Contact / FAQ Snippet */}
      <section ref={contactRef} className="bg-gradient-to-r from-pink-600 to-red-500 py-16 text-center text-white cta-blob shadow-2xl mt-24 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">Have Questions Before Your Tour?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto font-light">
            Our friendly admissions team is here to help!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="tel:+11234567890"
              className="inline-flex items-center bg-white text-pink-700 font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <Phone size={20} className="mr-2" /> Call Us
            </a>
            <button
              onClick={() => navigateTo('contact')}
              className="inline-flex items-center bg-white text-pink-700 font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail size={20} className="mr-2" /> Email Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookATourPage;
