// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, CheckCircle } from 'lucide-react';

// const ContactPage = ({ navigateTo }) => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', 'submitting'

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmissionStatus('submitting');
//     // In a real application, you would send this data to a backend server.
//     // For this example, we'll simulate a submission.
//     try {
//       console.log('Contact form submitted:', formData);
//       await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call delay
//       setSubmissionStatus('success');
//       setFormData({ name: '', email: '', message: '' }); // Clear form
//     } catch (error) {
//       console.error('Submission error:', error);
//       setSubmissionStatus('error');
//     }
//   };

//   return (
    
//     <div className="container  mx-auto px-4 py-16 md:py-20 max-w-4xl bg-white rounded-2xl shadow-lg my-10">
//       <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center border-b-4 border-yellow-500 pb-2 inline-block mx-auto block">Contact Us</h1>
//       <p className="text-lg text-gray-700 text-center mb-10">
//         Have questions or need more information? We're here to help! Fill out the form below or find our contact details.
//       </p>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* Contact Form */}
//         <div className="bg-blue-50 p-8 rounded-2xl shadow-inner border border-blue-100">
//           <h2 className="text-2xl font-semibold text-blue-700 mb-6">Send Us a Message</h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Your Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Your Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Your Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="5"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center"
//               disabled={submissionStatus === 'submitting'}
//             >
//               {submissionStatus === 'submitting' ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Submitting...
//                 </>
//               ) : (
//                 'Send Message'
//               )}
//             </button>
//             {submissionStatus === 'success' && (
//               <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center flex items-center justify-center">
//                 <CheckCircle className="w-5 h-5 mr-2" /> Message sent successfully!
//               </div>
//             )}
//             {submissionStatus === 'error' && (
//               <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
//                 Error sending message. Please try again.
//               </div>
//             )}
//           </form>
//         </div>

//         {/* Contact Info */}
//         <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
//           <h2 className="text-2xl font-semibold text-blue-700 mb-6">Our Contact Details</h2>
//           <div className="space-y-4">
//             <p className="flex items-center text-gray-700 text-lg">
//               <MapPin className="w-6 h-6 mr-3 text-blue-600" />
//               123 Education Lane, Learning City, State 12345
//             </p>
//             <p className="flex items-center text-gray-700 text-lg">
//               <Phone className="w-6 h-6 mr-3 text-blue-600" />
//               (123) 456-7890
//             </p>
//             <p className="flex items-center text-gray-700 text-lg">
//               <Mail className="w-6 h-6 mr-3 text-blue-600" />
//               info@schoolname.edu
//             </p>
//             <div className="pt-4">
//               <h3 className="text-xl font-semibold text-blue-700 mb-3">Office Hours:</h3>
//               <p className="text-gray-700">Monday - Friday: 8:00 AM - 4:00 PM</p>
//               <p className="text-gray-700">Saturday & Sunday: Closed</p>
//             </div>
//             <div className="pt-4">
//               <h3 className="text-xl font-semibold text-blue-700 mb-3">Social Media:</h3>
//               <div className="flex space-x-4">
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
//                   <Facebook className="w-8 h-8" />
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
//                   <Twitter className="w-8 h-8" />
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
//                   <Instagram className="w-8 h-8" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="text-center mt-12">
//         <button
//           onClick={() => navigateTo('home')}
//           className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
//         >
//           Back to Home
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, CheckCircle } from 'lucide-react';

const ContactPage = ({ navigateTo }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', 'submitting'

  // --- IMPORTANT: REPLACE WITH YOUR GOOGLE APPS SCRIPT WEB APP URL ---
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxsADKzxBiycGS0-LoLF8dmiwq2B3TEgjg58mAPAoNySQ7A-lB6mJbtdTV5devUaNRs/exec'; 
  // Example: 'https://script.google.com/macros/s/AKfycbzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz/exec'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    try {
      // Log form data before sending (for debugging in browser console)
      console.log('Sending form data:', formData);

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        // 'no-cors' mode is necessary for direct fetch to Apps Script from a different origin.
        // It prevents CORS errors but also means you cannot read the response body.
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json', // Specify that you're sending JSON
        },
        body: JSON.stringify(formData), // Convert your form data to a JSON string
      });

      // In 'no-cors' mode, 'response.ok' will always be true and 'response.status' will be 0.
      // We assume success if the fetch operation itself doesn't throw a network error.
      // For more robust error handling, a dedicated backend or CORS proxy would be needed.
      console.log('Fetch request sent. Assuming success due to no-cors mode.');
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form on success
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-20 max-w-4xl bg-white rounded-2xl shadow-lg my-10">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center border-b-4 border-yellow-500 pb-2 inline-block mx-auto block">Contact Us</h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Have questions or need more information? We're here to help! Fill out the form below or find our contact details.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-blue-50 p-8 rounded-2xl shadow-inner border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center"
              disabled={submissionStatus === 'submitting'}
            >
              {submissionStatus === 'submitting' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Send Message'
              )}
            </button>
            {submissionStatus === 'success' && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" /> Message sent successfully!
              </div>
            )}
            {submissionStatus === 'error' && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
                Error sending message. Please try again.
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Our Contact Details</h2>
          <div className="space-y-4">
            <p className="flex items-center text-gray-700 text-lg">
              <MapPin className="w-6 h-6 mr-3 text-blue-600" />
              123 Education Lane, Learning City, State 12345
            </p>
            <p className="flex items-center text-gray-700 text-lg">
              <Phone className="w-6 h-6 mr-3 text-blue-600" />
              (123) 456-7890
            </p>
            <p className="flex items-center text-gray-700 text-lg">
              <Mail className="w-6 h-6 mr-3 text-blue-600" />
              info@schoolname.edu
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Office Hours:</h3>
              <p className="text-gray-700">Monday - Friday: 8:00 AM - 4:00 PM</p>
              <p className="text-gray-700">Saturday & Sunday: Closed</p>
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Social Media:</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  <Facebook className="w-8 h-8" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  <Twitter className="w-8 h-8" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  <Instagram className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => navigateTo('home')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ContactPage;