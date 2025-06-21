// // src/App.jsx
// import React, { useState, useEffect } from 'react';
// import Navbar from './Components/Navbar.jsx';
// import HeroSection from './Components/HeroSection.jsx';
// import LogoCarousel from './Components/LogoCarousel.jsx';
// import AboutUsSection from './Components/AboutUsSection.jsx';
// import ProgramsSection from './Components/ProgramsSection.jsx';
// import CallToActionSection from './Components/CallToActionSection.jsx';
// import TestimonialsSection from './Components/TestimonialsSection.jsx';
// import NewsEventsSection from './Components/NewsEventsSection.jsx';
// import BlogsSection from './Components/BlogsSection.jsx';
// import Footer from './Components/Footer.jsx';
// import ContactPage from './Components/ContactPage.jsx';
// import Admission from './Components/Admission.jsx';
// import GalleryPage from './Components/GalleryPage.jsx';
// import AboutUsDetailPage from './Components/AboutUsDetailPage.jsx';
// import NewsDetailPage from './Components/NewsDetailPage.jsx';
// import BlogDetailPage from './Components/BlogDetailPage.jsx';
// import AllBlogsPage from './Components/AllBlogsPage.jsx';
// import Athletics from './Components/Athletics.jsx';
// import HistorySection from './Components/HistorySection.jsx';
// import MissionVisionSection from './Components/MissionVisionSection.jsx';
// import FounderSection from './Components/FounderSection.jsx';
// import ClubsActivitiesSection from './Components/ClubsActivitiesSection.jsx';
// import ArtsCultureSection from './Components/ArtsCultureSection.jsx';
// import StudentSupportSection from './Components/StudentSupportSection.jsx';
// import CareersSection from './Components/CareersSection.jsx';
// import BranchesSection from './Components/BranchesSection.jsx';
// import Accreditation from './Components/Accreditation.jsx';
// import CampusesSection from './Components/CampusesSection.jsx';
// import LearningSpaceSection from './Components/LearningSpaceSection.jsx'; // Importing the new Learning Space section
// import IBPage from './Components/IBPage.jsx'; // Importing the new IB Page
// import BookTourSection from './Components/BookTourSection.jsx'; // Importing the new Book a Tour section
// import FAQPage from './Components/FAQPage.jsx'; // Importing the new FAQ page
// import Kindergarten from './Pages/Programs/Kindergarten.jsx'; // Importing the new FAQ page
// // Main App Component
// const App = () => {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [pageData, setPageData] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position for Navbar

//   /**
//    * Function to navigate between different pages/views in the single-page application.
//    * @param {string} page - The identifier for the page to navigate to (e.g., 'home', 'contact', 'aboutDetail').
//    * @param {object} [data=null] - Optional data to pass to the target page (e.g., the specific news item or blog post).
//    */
//   const navigateTo = (page, data = null) => {
//     setPageData(data);
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
//   };

//   // Effect to handle scroll events for Navbar styling
//   useEffect(() => {
//     const handleScroll = () => {
//       // Set isScrolled to true if scroll position is greater than 50px (or any threshold)
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []); // Empty dependency array means this effect runs once on mount

//   /**
//    * Renders the current page component based on the `currentPage` state.
//    * This acts as a simple routing mechanism for our single-page application.
//    */
//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//         return (
//           <>
//             {/* HeroSection will now start from the very top, behind the transparent Navbar */}
//             <HeroSection />
           
//             <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20 max-w-7xl">
//               <AboutUsSection navigateTo={navigateTo} />
//               <ProgramsSection />
//               {/* <BranchesSection navigateTo={navigateTo} /> */}
//               <CallToActionSection navigateTo={navigateTo} />
//               <TestimonialsSection />
//               <NewsEventsSection navigateTo={navigateTo} />
//               <BlogsSection navigateTo={navigateTo} />
              
//             </main>
//            <LogoCarousel />
//           </>
//         );
//       case 'contact':
//         return <ContactPage navigateTo={navigateTo} />;
//       case 'athletics':
//         return <Athletics navigateTo={navigateTo} />;
//       case 'admission':
//         return <Admission navigateTo={navigateTo} />;
//       case 'gallery':
//         return <GalleryPage navigateTo={navigateTo} />;
//       case 'aboutDetail':
//         return <AboutUsDetailPage navigateTo={navigateTo} />;
//       case 'newsDetail':
//         return <NewsDetailPage navigateTo={navigateTo} newsItem={pageData} />;
//       case 'blogDetail':
//         return <BlogDetailPage navigateTo={navigateTo} blogPost={pageData} />;
//           // New About Us sub-pages
//       case 'historySection':
//         return <HistorySection />;
//       case 'missionSection':
//         return <MissionVisionSection />;
//       case 'founder':
//         return <FounderSection />;
//       case 'allBlogs':
//         return <AllBlogsPage navigateTo={navigateTo} />;
//       // New Student Life sub-pages
//       case 'clubs':
//         return <ClubsActivitiesSection navigateTo={navigateTo} />;
//       case 'arts':
//         return <ArtsCultureSection navigateTo={navigateTo} />;
//       case 'studentSupport':
//         return <StudentSupportSection navigateTo={navigateTo} />;
//       case 'careers':
//         return <CareersSection navigateTo={navigateTo} />;
//       case 'campuses': // NEW: Case for Campuses page
//         return <CampusesSection />;
//       case 'learningSpace': // NEW: Case for Learning Space page
//         return <LearningSpaceSection navigateTo={navigateTo} />;
//       case 'accreditation': // NEW: Case for Learning Space page
//         return <Accreditation navigateTo={navigateTo} />;
//       case 'ibPage': // NEW: Case for IB Page
//         return <IBPage navigateTo={navigateTo} />;
//       case 'bookTour': // NEW: Case for Book a Tour page
//         return <BookTourSection navigateTo={navigateTo} />;
//       case 'faqs': // NEW: Case for the FAQ page
//         return <FAQPage navigateTo={navigateTo} />;
//       case 'kindergarten': // NEW: Case for Kindergarten page
//         return <Kindergarten navigateTo={navigateTo} />;
//       default:
//         return (
//           <div className="text-center py-20">
//             <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
//             <button
//               onClick={() => navigateTo('home')}
//               className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
//             >
//               Go to Home
//             </button>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
//       {/* Navbar is always visible, passing navigateTo, currentPage, and isScrolled props */}
//       <Navbar navigateTo={navigateTo} currentPage={currentPage} isScrolled={isScrolled} />

//       {/* Renders the current page content */}
//       {renderPage()}

//       {/* Footer is always visible */}
//       <Footer />
//       {/* Global Custom Scrollbar Styles for the entire app */}
//       <style jsx>{`
//         /* Custom Scrollbar for Webkit browsers (Chrome, Safari) */
//         ::-webkit-scrollbar {
//           width: 8px;
//         }

//         ::-webkit-scrollbar-track {
//           background: #f1f1f1;
//           border-radius: 10px;
//         }

//         ::-webkit-scrollbar-thumb {
//           background: #888;
//           border-radius: 10px;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: #555;
//         }

//         /* Custom Scrollbar for Firefox */
//         .custom-scrollbar {
//           scrollbar-width: thin;
//           scrollbar-color: #888 #f1f1f1;
//         }

//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s ease-out forwards;
//           opacity: 0; /* Hidden by default until animation runs */
//         }
//       `}</style>
//     </div>
//   );
// };

// export default App;
import { useState, useEffect } from 'react';
import {Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';

// Import all your page components
import HeroSection from './Components/HeroSection.jsx';
import LogoCarousel from './Components/LogoCarousel.jsx';
import AboutUsSection from './Components/AboutUsSection.jsx';
import ProgramsSection from './Components/ProgramsSection.jsx';
import CallToActionSection from './Components/CallToActionSection.jsx';
import TestimonialsSection from './Components/TestimonialsSection.jsx';
import NewsEventsSection from './Components/NewsEventsSection.jsx';
import BlogsSection from './Components/BlogsSection.jsx';
import Footer from './Components/Footer.jsx';
import ContactPage from './Components/ContactPage.jsx';
import Admission from './Components/Admission.jsx';
import GalleryPage from './Components/GalleryPage.jsx';
import NewsDetailPage from './Components/NewsDetailPage.jsx'; // Now assumes news item data is fetched within the component or from URL params
import BlogDetailPage from './Components/BlogDetailPage.jsx'; // Now assumes blog post data is fetched within the component or from URL params
import AllBlogsPage from './Components/AllBlogsPage.jsx';
import Athletics from './Components/Athletics.jsx';
import HistorySection from './Components/HistorySection.jsx';
import MissionVisionSection from './Pages/Aboutus/MissionVisionSection.jsx';
import FounderSection from './Pages/Aboutus/FounderSection.jsx';
import ClubsActivitiesSection from './Components/ClubsActivitiesSection.jsx';
import ArtsCultureSection from './Components/ArtsCultureSection.jsx';
import StudentSupportSection from './Components/StudentSupportSection.jsx';
import CareersSection from './Components/CareersSection.jsx';
import CampusesSection from './Pages/Aboutus/CampusesSection.jsx';
import LearningSpaceSection from './Components/LearningSpaceSection.jsx';
import Accreditation from './Pages/Aboutus/Accreditation.jsx';
import IBPage from './Components/IBPage.jsx';
import BookTourSection from './Components/BookTourSection.jsx';
import FAQPage from './Components/FAQPage.jsx';
import Kindergarten from './Pages/Programs/Kindergarten.jsx'; // Ensure correct path for Kindergarten
import Chatbot from './Components/Chatbot.jsx'; // Importing a bot image for the placeholder
import AboutUsDetailPage from './Components/AboutUsDetailPage.jsx';

// Placeholder components for all imports to make the code runnable
// You should replace these with your actual component implementations.
// const PlaceholderComponent = ({ name }) => (
//   <div className="min-h-[60vh] flex items-center justify-center bg-gray-100 p-8 rounded-lg shadow-md m-4">
//     <h2 className="text-3xl font-bold text-gray-700">{name} Content Goes Here</h2>
//   </div>
// );

// Define your actual page components, or use placeholders for now
// const AboutUsDetailPage = () => <PlaceholderComponent name="About Us Detail Page" />;
// const NewsDetailPage = ({ newsItem }) => <PlaceholderComponent name={`News Detail Page: ${newsItem ? newsItem.title : 'No Data'}`} />;
// const BlogDetailPage = ({ blogPost }) => <PlaceholderComponent name={`Blog Detail Page: ${blogPost ? blogPost.title : 'No Data'}`} />;


// Main App Component
const App = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation
  const location = useLocation(); // Hook to get current URL information
  const [pageData, setPageData] = useState(null);
  const [currentPage, setCurrentPage] = useState('home'); // State to track current page for Navbar styling
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position for Navbar

  // Map descriptive page names from Navbar to actual URL paths for react-router-dom
  const pagePathMap = {
    'home': '/',
    'contact': '/contact',
    'athletics': '/programs/athletics',
    'admission': '/admission',
    'gallery': '/gallery',
    'aboutDetail': '/about-us/detail', // Generic detail page for About Us
    'newsDetail': '/news-detail', // Generic detail page for news, assumes data fetched internally or via params
    'blogDetail': '/blog-detail', // Generic detail page for blogs, assumes data fetched internally or via params
    'allBlogs': '/blogs',
    'historySection': '/about-us/history',
    'missionSection': '/about-us/mission-vision',
    'founder': '/about-us/founder',
    'clubs': '/programs/clubs',
    'arts': '/programs/arts-culture',
    'studentSupport': '/programs/student-support',
    'careers': '/careers',
    'campuses': '/about-us/campuses',
    'learningSpace': '/about-us/learning-space',
    'accreditation': '/about-us/accreditation',
    'ibPage': '/programs/ib',
    'bookTour': '/admission/book-tour',
    'faqs': '/admission/faqs',
    'kindergarten': '/programs/kindergarten',
    // Add any other mappings as needed
  };

  /**
   * Function to navigate between different pages/views using react-router-dom.
   * @param {string} pageName - The descriptive identifier for the page to navigate to (e.g., 'home', 'contact').
   * @param {object} [data=null] - Optional data to pass to the target page via history state (not directly in URL).
   */
  const navigateTo = (pageName, data = null) => {
    const path = pagePathMap[pageName] || `/${pageName}`; // Get the actual path from the map, fallback to /name
    setPageData(data);
    setCurrentPage(pageName);
    navigate(path, { state: data }); // Navigate using react-router-dom, passing data via state
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
  };

  // Effect to handle scroll events for Navbar styling and update currentPage
  useEffect(() => {
    const handleScroll = () => {
      // For the home page ('/'), apply transparent/solid Navbar based on scroll
      if (location.pathname === '/') {
        setIsScrolled(window.scrollY > 50); // Set to true if scrolled past 50px
      } else {
        // For all other pages, the Navbar should always be solid (as if scrolled)
        setIsScrolled(true);
      }
    };

    // Determine the current page for Navbar styling based on the path
    const currentPath = location.pathname;
    let newCurrentPage = 'home'; // Default to home

    // Loop through the map to find the matching pageName
    for (const [name, path] of Object.entries(pagePathMap)) {
      if (path === currentPath) {
        newCurrentPage = name;
        break;
      }
      // Handle dynamic paths like /news/:id later if needed
      // For now, simple direct path matching
    }
    setCurrentPage(newCurrentPage);

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial state

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]); // Re-run effect when the URL path changes

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Navbar is always visible, passing navigateTo, currentPage, and isScrolled props */}
      <Navbar navigateTo={navigateTo} currentPage={currentPage} isScrolled={isScrolled} />

      {/* Define your routes */}
      <Routes>
        {/* Home page route */}
        <Route path={pagePathMap.home} element={
          <>
            <HeroSection />
            <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20 max-w-7xl">
              <AboutUsSection navigateTo={navigateTo} />
              <ProgramsSection />
              <CallToActionSection navigateTo={navigateTo} />
              <TestimonialsSection />
              <NewsEventsSection navigateTo={navigateTo} />
              <BlogsSection navigateTo={navigateTo} />
              <Chatbot navigateTo={navigateTo} />
            </main>
            <LogoCarousel />
          </>
        } />

        {/* Other specific page routes */}
        <Route path={pagePathMap.contact} element={<ContactPage navigateTo={navigateTo} />} />
        <Route path={pagePathMap.athletics} element={<Athletics navigateTo={navigateTo} />} />
        <Route path={pagePathMap.admission} element={<Admission navigateTo={navigateTo} />} />
        <Route path={pagePathMap.gallery} element={<GalleryPage navigateTo={navigateTo} />} />

        {/* About Us sub-pages */}
        <Route path={pagePathMap.founder} element={<FounderSection />} />
        <Route path={pagePathMap.missionSection} element={<MissionVisionSection />} />
        <Route path={pagePathMap.accreditation} element={<Accreditation navigateTo={navigateTo} />} />
        <Route path={pagePathMap.campuses} element={<CampusesSection />} />
        <Route path={pagePathMap.learningSpace} element={<LearningSpaceSection navigateTo={navigateTo} />} />
        <Route path={pagePathMap.historySection} element={<HistorySection />} />
        <Route path={pagePathMap.aboutDetail} element={<AboutUsDetailPage navigateTo={navigateTo} />} /> {/* Generic About Us Detail */}

        {/* Programs sub-pages */}
        <Route path={pagePathMap.ibPage} element={<IBPage navigateTo={navigateTo} />} />
        <Route path={pagePathMap.clubs} element={<ClubsActivitiesSection navigateTo={navigateTo} />} />
        <Route path={pagePathMap.arts} element={<ArtsCultureSection navigateTo={navigateTo} />} />
        <Route path={pagePathMap.studentSupport} element={<StudentSupportSection navigateTo={navigateTo} />} />
        <Route path={pagePathMap.kindergarten} element={<Kindergarten navigateTo={navigateTo} />} />

        {/* Admission sub-pages */} 
        <Route path={pagePathMap.bookTour} element={<BookTourSection navigateTo={navigateTo} />} />
        <Route path={pagePathMap.faqs} element={<FAQPage navigateTo={navigateTo} />} />

        {/* News & Blogs */}
        <Route path={pagePathMap.newsDetail} element={<NewsDetailPage navigateTo={navigateTo} newsItem={pageData}/>} /> {/* News detail page */}
        <Route path={pagePathMap.blogDetail} element={<BlogDetailPage navigateTo={navigateTo} blogPost={pageData}/>} /> {/* Blog detail page */}
        <Route path={pagePathMap.allBlogs} element={<AllBlogsPage navigateTo={navigateTo} />} />

        {/* Other pages */}
        <Route path={pagePathMap.careers} element={<CareersSection navigateTo={navigateTo} />} />

        {/* 404 Not Found Page */}
        <Route path="*" element={
          <div className="text-center py-20 min-h-[50vh]">
            <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
            <button
              onClick={() => navigateTo('home')}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Go to Home
            </button>
          </div>
        } />
      </Routes>

      {/* Footer is always visible */}
      <Footer />
      {/* Global Custom Scrollbar Styles for the entire app */}
      <style jsx>{`
        /* Custom Scrollbar for Webkit browsers (Chrome, Safari) */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        /* Custom Scrollbar for Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #888 #f1f1f1;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0; /* Hidden by default until animation runs */
        }
      `}</style>
    </div>
  );
};

// You need to wrap your App component with BrowserRouter in your root file (e.g., src/index.js)
// Example src/index.js:
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import './index.css'; // Your global CSS

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );


export default App;