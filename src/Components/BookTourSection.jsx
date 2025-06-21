"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Users, Mail, Phone, MessageSquare, MapPin, CheckCircle, Lightbulb, User, AtSign, Smartphone, MessageCircleMore } from 'lucide-react'; // Icons

const BookATourPage = ({ navigateTo }) => {
  // State for form fields - adjusted to match "Quick Enquiry" fields from the image
  const [formData, setFormData] = useState({
    name: '', // Changed to 'name' to match HTML form
    mailId: '', // Changed to 'mailId' to match HTML form
    mobileNo: '', // Changed to 'mobileNo' to match HTML form
    message: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd send this data to a backend
    console.log('Enquiry Submitted:', formData);
    setShowSuccessMessage(true); // Show success message
    setTimeout(() => setShowSuccessMessage(false), 5000); // Hide after 5 seconds

    setFormData({ // Reset form
      name: '',
      mailId: '',
      mobileNo: '',
      message: ''
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

    // Observe each ref if it exists
    const refs = [heroRef, whyTourRef, formRef, contactRef];
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      // Unobserve each ref on cleanup
      refs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
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
        @keyframes buttonPulse {
            0% { box-shadow: 0 0 0 0 rgba(109, 40, 217, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(109, 40, 217, 0); }
            100% { box-shadow: 0 0 0 0 rgba(109, 40, 217, 0); }
        }
        @keyframes formBackgroundPulse {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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

        /* Form Input and Label Styles - Adjusted to match the image */
        .input-style {
          @apply w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all duration-200 text-gray-800 placeholder-gray-400;
          box-shadow: none; /* Remove previous shadow for a flatter look */
        }
        .input-style:hover {
            @apply border-blue-300;
        }
        .input-style:focus {
            @apply border-blue-500 ring-2; /* More subtle focus */
            box-shadow: none; /* Ensure no extra shadow on focus */
        }
        /* Remove label-style as labels are now sr-only per image */

        /* Form Container Styling - Adjusted to match the image */
        .form-card-image-style { /* Renamed to avoid conflict with existing .form-card */
          @apply p-6 sm:p-8 md:p-10 bg-white rounded-2xl shadow-xl w-full max-w-sm mx-auto; /* Changed max-w-md to max-w-sm */
        }
        /* Remove form-card and related pseudo-elements from previous styling if not needed */

        /* Form section background with subtle gradient animation - removed as per image style */
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

      {/* Booking Form Section - Integrated from original HTML image */}
      <section ref={formRef} className="py-16 mt-16 rounded-3xl mx-auto animate-on-scroll relative overflow-hidden">
        <div className="max-w-md px-4 relative z-10 mx-auto"> {/* Added mx-auto here */}
            {/* The main container div for the form and its title */}
            <div className="form-card-image-style">
                {/* Title section matching the image */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">Quick Enquiry</h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-2 rounded-full"></div>
                </div>

                {/* Tour Booking Form - this is the form that is inside the container */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            aria-label="Enter your name"
                            required
                        />
                    </div>

                    {/* Mail ID Input */}
                    <div>
                        <label htmlFor="mailId" className="sr-only">Mail ID</label>
                        <input
                            type="email"
                            id="mailId"
                            name="mailId"
                            placeholder="Mail ID"
                            value={formData.mailId}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            aria-label="Enter your email ID"
                            required
                        />
                    </div>

                    {/* Mobile No. Input */}
                    <div>
                        <label htmlFor="mobileNo" className="sr-only">Mobile No.</label>
                        <input
                            type="tel"
                            id="mobileNo"
                            name="mobileNo"
                            placeholder="Mobile No."
                            value={formData.mobileNo}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            aria-label="Enter your mobile number"
                            required
                        />
                    </div>

                    {/* Message Textarea */}
                    <div>
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-y"
                            aria-label="Enter your message"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                {/* Success Message */}
                {showSuccessMessage && (
                  <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center animate-fadeInSlideUp">
                    <p className="font-semibold flex items-center justify-center">
                      <CheckCircle size={20} className="mr-2" /> Thank you for your enquiry! We will contact you shortly.
                    </p>
                  </div>
                )}
            </div>
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
