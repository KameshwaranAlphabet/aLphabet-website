// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react'; // Added useEffect, useRef
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import logo from '../Assets/alphabet-logo.png';
import { Navigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

// Navbar Component
const Navbar = ({ navigateTo, currentPage, isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // State to manage active dropdown for click
  const navbarRef = useRef(null); // Ref for detecting clicks outside the navbar

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); // Close any open dropdown when mobile menu is toggled
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Effect to handle clicks outside the navbar to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null); // Close dropdown if click is outside Navbar
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Define menu items and their actions
  const menuItems = [
    {
      name: 'About Us',
      type: 'dropdown',
      subItems: [
        { name: 'Founder', action: () => navigateTo('founder') }, // Assuming you want to navigate to a Founder pag
        { name: 'Vision & Mission', action: () => navigateTo('missionSection') },
        { name: 'Accreditation', action: () => navigateTo('accreditation') },
        { name: 'Campuses', action: () => navigateTo('campuses') },
        { name: 'Learning Space', action: () => navigateTo('learningSpace') },
      ],
      // REMOVED: detailAction: () => navigateTo('aboutUs'),
      // Now, clicking "About Us" will only open the dropdown, not navigate.
      // If you later want a main 'About Us' page *in addition* to the dropdown,
      // you would need to add a separate link or adjust the dropdown logic.
    },
    {
      name: 'Programs',
      type: 'dropdown',
      subItems: [
        { name: 'About IB', action: () => navigateTo('ibPage') },
        { name: 'Clubs & Activities', action: () => navigateTo('clubs') },
        { name: 'Athletics', action: () => navigateTo('athletics') },
        { name: 'Arts & Culture', action: () => navigateTo('arts') },
        { name: 'Student Support', action: () => navigateTo('studentSupport') },
        { name: 'Kindergarten', action: () => navigateTo('kindergarten') },
      ],
    },
    {
      name: 'Admission',
      type: 'dropdown',
      subItems: [
        { name: 'Admission Process', action: () => navigateTo('admission') },
        { name: 'Book Tour', action: () => navigateTo('bookTour') },
        { name: 'FAQ', action: () => navigateTo('faqs') },
      ],
    },
    { name: 'Gallery', action: () => navigateTo('gallery'), type: 'link' },
    { name: 'Contact Us', action: () => navigateTo('contact'), type: 'link' },
    // { name: 'Careers', action: () => navigateTo('careers'), type: 'link' },
 // Login link with specific styling that makes it always white unless hovered/focused
   {
      name: 'Login',
      action: () => window.location.href = 'https://myschoolone.com/alphabet',
      type: 'link',
      className: "text-base text-blue-600 underline underline-offset-4 hover:text-blue-500 transition duration-200" // Changed default color to blue-600
    },     { name: 'Apply Now', action: () => window.location.href = 'https://alphabet.myschoolone.com/cloud/Admission/ApplicationFormV3.php', type: 'button' }
  ];

  return (
    <>
      {/* Custom CSS for the glassy effect */}
      <style>
        {`
        .glassy-bg {
          /* Increased opacity to 0.7 for less transparency (more opaque) */
          background-color: rgba(255, 255, 255, 0.7); /* Light white with 70% opacity */
          backdrop-filter: blur(8px); /* Frosted glass effect */
          -webkit-backdrop-filter: blur(8px); /* For Safari support */
        }
        /* Tailwind's group-hover works by default, so we combine with click state */
        .dropdown-content.visible-on-click {
          opacity: 1;
          transform: scale(1);
          visibility: visible;
        }
        `}
      </style>

      <nav ref={navbarRef} className={`${currentPage === 'home' ? 'fixed' : 'sticky'} top-0 left-0 w-full z-30 px-4 py-3 lg:py-4 transition-all duration-300 ease-in-out ${
        currentPage === 'home'
          ? (isScrolled ? 'bg-white shadow-lg rounded-b-3xl' : 'bg-transparent') // Navbar transparent on home, solid white when scrolled
          : 'bg-white shadow-lg' // Navbar is solid white on all other pages
      }`}
      >
        <div className="mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" onClick={() => navigateTo('home')} className={`flex items-center text-2xl font-bold ${currentPage === 'home' ?
              (isScrolled ? 'text-blue-600' : 'text-white') :
              'text-blue-600'
            }`}
          >
             <span>
              <img src={logo} alt="School Logo" style={{ height: '40px' }} />
            </span>
          </a>

          {/* Mobile Menu Toggler */}
          <button className={`lg:hidden focus:outline-none ${currentPage === 'home' ?
              (isScrolled ? 'text-gray-800' : 'text-white') :
              'text-gray-800'
            }`}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                // Close dropdown on mouse leave for both hover and click
                onMouseLeave={() => setActiveDropdown(null)} // Simplify mouse leave to always close
              >
                {item.type === 'link' && (
                  <button
                    onClick={item.action}
                    className={`text-lg font-semibold py-2 px-3 rounded-full transition-colors duration-300
                      ${item.className ? item.className : // Use custom class if provided (e.g., for Login)
                        (currentPage === 'home'
                          ? (isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-200')
                          : 'text-gray-600 hover:text-blue-600')
                      }
                      ${currentPage === item.name.toLowerCase().replace(/\s/g, '') ? 'text-blue-600' : ''}`}
                  >
                    {item.name}
                  </button>
                )}
                {item.type === 'dropdown' && (
                  <>
                    <button
                      className={`flex items-center text-lg font-semibold py-2 px-3 rounded-full transition-colors duration-300 focus:outline-none ${currentPage === 'home' ?
                          (isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-200') :
                          'text-gray-600 hover:text-blue-600'
                        }`}
                      onClick={() => {
                        toggleDropdown(item.name); // Toggle dropdown on click
                        // No detailAction here, so it just opens/closes dropdown
                      }}
                      onMouseEnter={() => setActiveDropdown(item.name)} // Open dropdown on hover
                    >
                      {item.name}
                      {/* Chevron rotates based on click activeDropdown state, will also respond to group-hover */}
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    <div
                      className={`absolute right-0 mt-2 py-2 w-48 glassy-bg rounded-lg shadow-xl transition-all duration-300 ease-out transform opacity-0 scale-95 invisible z-40
                        group-hover:opacity-100 group-hover:scale-100 group-hover:visible
                        ${activeDropdown === item.name ? 'visible-on-click' : ''}
                      `}
                    >
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => {
                            if (subItem.action) {
                              subItem.action();
                            }
                            setActiveDropdown(null); // Close dropdown after clicking a sub-item
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md transition-colors duration-200"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {item.type === 'button' && (
                  <button
                    onClick={item.action}
                    className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu (Appears only on small screens) */}
          <div className={`fixed inset-0 bg-white z-40 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <a href="#" onClick={() => navigateTo('home')} className="flex items-center text-blue-600 text-2xl font-bold">
                <GraduationCap className="w-8 h-8 mr-2" />
                <span>SchoolName</span>
              </a>
              <button className="focus:outline-none text-gray-800" onClick={toggleMobileMenu}>
                <X size={32} />
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.type === 'link' && (
                    <button
                      onClick={() => { item.action(); toggleMobileMenu(); }}
                      className={`block w-full text-left text-xl font-semibold py-3 px-4 rounded-lg transition-colors duration-200 ${currentPage === item.name.toLowerCase().replace(/\s/g, '') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'}`}
                    >
                      {item.name}
                    </button>
                  )}
                  {item.type === 'dropdown' && (
                    <>
                      <button
                        className="flex justify-between items-center w-full text-left text-xl font-semibold py-3 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                        onClick={() => toggleDropdown(item.name)} // Corrected to use toggleDropdown
                      >
                        {item.name}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`mt-2 ml-4 border-l-2 border-gray-200 pl-4 space-y-1 ${activeDropdown === item.name ? 'block' : 'hidden'}`}>
                        {item.subItems.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => {
                              if (subItem.action) {
                                subItem.action();
                              }
                              toggleMobileMenu();
                              setActiveDropdown(null); // Also close active dropdown state for mobile
                            }}
                            className="block w-full text-left py-2 text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                  {item.type === 'button' && (
                    <button
                      onClick={() => { item.action(); toggleMobileMenu(); }}
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 mt-2"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
