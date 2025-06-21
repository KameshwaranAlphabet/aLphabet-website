import React, { useState, useEffect, useRef } from 'react';
// The @google/generai library import has been removed as it causes compilation issues
// in this specific environment. We will revert to direct fetch calls for the API.

const Chatbot = () => {
  // State for managing chat messages
  const [messages, setMessages] = useState([]);
  // State for the current user input
  const [input, setInput] = useState('');
  // State to control chatbot visibility (open/closed)
  const [isOpen, setIsOpen] = useState(false);
  // State to show loading indicator
  const [isLoading, setIsLoading] = useState(false);
  // Ref for auto-scrolling to the latest message
  const messagesEndRef = useRef(null);

  // The actual school name (kept separate for spelling logic)
  const SCHOOL_NAME = "Alphabet International School";
  const BOT_NAME = "Alphie Bot";

  // --- SCHOOL KNOWLEDGE BASE TEXT ---
  // This is the main text block where you can add all your school's information.
  // The chatbot will use this as context for the Gemini API.
  // You can add more sections, paragraphs, or bullet points here.
  const SCHOOL_KNOWLEDGE_BASE_TEXT = `
# Alphabet International School Information

You are interacting with ${BOT_NAME}, a friendly and helpful AI assistant for Alphabet International School. ${BOT_NAME}'s goal is to assist students, prospective students, parents, and staff with their inquiries about Alphabet International School.

## General Information
* **School Name:** Alphabet International School
* **Location:** 123 School Lane, Education City, Chennai, Tamil Nadu, India.
* **Principal:** Ms. Eleanor Vance
* **School Email ID:** mail@alphabet.school
* **School Phone:** +91-123-4567890 (Example)
* **School Website:** www.alphabet.school (Example)
  location: "No. 3, MGR Salai, Palavakkam, Chennai, Tamil Nadu, India.",
    founded: "2009",
    gradesOffered: "Mom & Me (for toddlers), Kindergarten (Nursery, LKG, UKG), Grades 1 to 12.",
    mission: "aLphabet endeavours to create a stimulating environment to foster passion amongst lifelong inquirers and broaden their awareness of the global community. The student-centric approach to learning, along with rigorous assessments, strives to gauge the holistic development of curious minds. Learners are empowered to act responsibly, embrace diverse cultures and contribute meaningfully to a united, sustainable world.",
    principal: "Ms. Kavita Saraf",
    schoolHours: "7:50 AM - 2:30 PM, Monday to Friday.",
    curriculum: "IB curriculum.",

## Programs and Curriculum
* **Grades Offered:** Kindergarten to Grade 12
* **Curriculum:** We follow a CBSE curriculum. We also offer specialized tracks in STEM and Arts.
* **Learning Approach:** Our learning approach emphasizes holistic development, critical thinking, problem-solving, and fostering creativity.
Our Vision
aLphabet’s vision is to provide a stimulating learning environment for children and develop a sense of “yearning for learning” amongst young minds by nurturing the uniqueness of each child. We achieve this in myriad ways right from our classroom environment to our pedagogy which is upgraded regularly. We aim at imparting a holistic education, fostering every child in becoming a confident, independent and a self-esteemed individual.


Our Mission
aLphabet endeavours to create a stimulating environment to foster passion amongst lifelong inquirers and broaden their awareness of the global community.

The student-centric approach to learning, along with rigorous assessments, strives to gauge the holistic development of curious minds.

Learners are empowered to act responsibly, embrace diverse cultures and contribute meaningfully to a united, sustainable world.


Our Philosophy
Each child is born with a set of culture and values which have to be an intrinsic part of their teaching and learning process. Complete education should enhance qualities like tolerance, compassion, respect, and co-existence leading to a peaceful life on this planet.

aLphabet internationaL instils leadership qualities to surge into the evolving century. The school creates an environment of continuous learning, critical thinking and excellence in academics.

The holistic development of the learner is also dependent on the creative expression in all forms. The school will grow as a well-knit community with the core team of learners, namely-teachers, students and the parents working hand in hand in an open environment, promoting international-mindedness.


IB Mission
The International Baccalaureate® aims to develop inquiring, knowledgeable and caring young people who help to create a better and more peaceful world through intercultural understanding and respect.

To this end the organization works with schools, governments and international organizations to develop challenging programs of international education and rigorous assessment.

These programs encourage students across the world to become active, compassionate and lifelong learners who understand that other people, with their differences, can also be right.

## Campus Facilities and Resources
* **Classrooms:** Modern, well-lit, and equipped with interactive whiteboards.
* **Labs:** State-of-the-art Science Labs (Physics, Chemistry, Biology), Computer Labs with high-speed internet, and a Language Lab.
* **Library:** A vast collection of books, digital resources, and quiet study areas.
* **Sports Complex:** Includes a full-sized basketball court, a large soccer field, indoor badminton courts, and facilities for athletics.
* **Arts & Music:** Dedicated Art Studio, Music Room with various instruments, and a fully equipped Auditorium for performances.
* **Cafeteria:** Offers healthy and nutritious meals with vegetarian and non-vegetarian options.

## Admission Procedures and Deadlines
* **Application Period:** Applications typically open annually on October 1st and close by January 31st for the next academic year.
* **Required Documents:** Previous academic transcripts/report cards, birth certificate, passport-sized photographs, and parent/guardian identification.
* **Entrance Exam:** An entrance exam is required for admissions into Grades 6 and above to assess academic readiness.
* **Interview:** Shortlisted candidates and their parents will be invited for an interview.
* **Important Note:** We have limited spots available and encourage early application.

## Extracurricular Activities and Clubs
* **STEM Club:** Focuses on Robotics, Coding, and various Science Experiments. Meets every Tuesday afternoon.
* **Arts & Drama Club:** Offers weekly workshops, organizes annual school plays, and participates in inter-school competitions.
* **Sports:** Basketball, Soccer, Athletics, Cricket, and Swimming. Tryouts for school teams are typically held in September.
* **Debate Club:** Develops public speaking and critical thinking skills.
* **Environmental Club:** Engages in sustainability projects and campus greening initiatives.
* **Music & Dance:** Offers training in various musical instruments and dance forms.

## School Events and Calendar
* **Annual Science Fair:** November 15th, held in the School Auditorium. Open to all grades.
* **Parent-Teacher Meeting:** December 10th, conducted online via Zoom.
* **Winter Concert:** December 20th, held in the School Auditorium. Features performances by students from all grades.
* **Sports Day:** March 10th, annual sports event at the school ground.
* **Graduation Ceremony:** May 25th, for graduating students of Grade 12.

## Contact Details for Different Departments
* **General Enquiries:** info@alphabet.school
* **Admissions Office:** admissions@alphabet.school
* **Accounts Department:** accounts@alphabet.school
* **Administration:** admin@alphabet.school
* **Phone:** +91-123-4567890 (General Line)

## General School Policies
* **Dress Code:** Students are required to wear the prescribed school uniform.
* **Attendance:** Regular attendance is mandatory.
* **Discipline:** The school maintains a strict disciplinary policy to ensure a safe and respectful learning environment.
* **Safety & Security:** Comprehensive security measures are in place including CCTV surveillance and trained security personnel.
`;

  // Initialize GoogleGenerativeAI - Reverting to direct fetch method
  // The API key is intentionally left as an empty string. In the Canvas environment,
  // it will be automatically provided at runtime for Gemini models.
  const apiKey = "";
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${'AIzaSyBGSYspjoozxzd8wOSfS7dErDjQc5CCcXY'}`;

  // Function to scroll to the bottom of the chat window
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Effect to scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to handle sending a message
  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    // Add user message to chat history
    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    const userQuery = input.toLowerCase().trim(); // Convert to lowercase for easier matching
    setInput(''); // Clear input field

    setIsLoading(true); // Show loading indicator

    let botResponseText = '';

    // --- Specific hardcoded responses for very precise queries ---
    if (userQuery.includes('school name') && userQuery.includes('spell')) {
      botResponseText = SCHOOL_NAME.split('').join('-'); // Spells out the school name
    } else if (userQuery.includes('school name')) {
      botResponseText = SCHOOL_NAME;
    } else {
      // --- Use Gemini API for general queries, leveraging the SCHOOL_KNOWLEDGE_BASE_TEXT ---
      try {
        const prompt = `
        You are ${BOT_NAME}, an AI assistant for ${SCHOOL_NAME}. Your role is to provide accurate and helpful information about the school.
        
        Refer ONLY to the following information about ${SCHOOL_NAME} to answer questions. If the answer cannot be found in the provided text, politely state that you do not have that specific information and suggest contacting the school directly.
        
        --- SCHOOL INFORMATION ---
        ${SCHOOL_KNOWLEDGE_BASE_TEXT}
        --- END SCHOOL INFORMATION ---

        User's Query: ${userQuery}
        `;

        const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
        const payload = { contents: chatHistory };

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const result = await response.json();
        
        // Ensure to access the text from the response structure correctly
        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
          botResponseText = result.candidates[0].content.parts[0].text;
        } else {
          console.error("Unexpected API response structure:", result);
          botResponseText = `I'm sorry, I am ${BOT_NAME} and I am currently unable to process that request. Please try again or contact the school directly.`;
        }

      } catch (error) {
        console.error('Error fetching from Gemini API:', error);
        botResponseText = `I'm sorry, I am ${BOT_NAME} and I encountered an error trying to find that information. Please try again later.`;
      }
    }

    // Add bot's response to chat history
    setMessages((prevMessages) => [...prevMessages, { text: botResponseText, sender: 'bot' }]);
    setIsLoading(false); // Hide loading indicator
  };

  // Keyboard event handler for sending message on Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    // Fixed positioning for the chatbot container
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center animate-bounce-custom"
        aria-label={isOpen ? "Close Chatbot" : "Open Chatbot"}
      >
        {isOpen ? (
          // Close icon (X) when chatbot is open
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          // Chat icon when chatbot is closed
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        )}
      </button>

      {/* Chat window, conditionally rendered based on isOpen state */}
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-4 w-80 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-[400px] animate-fade-in-scale">
          {/* Chat header */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center rounded-t-lg">
            <h3 className="text-lg font-semibold">School Bot</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-100 focus:outline-none"
              aria-label="Close Chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Chat messages display area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 italic mt-8">
                Type a message to start chatting!
              </div>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-lg shadow-md ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  } animate-message-pop`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {/* Loading indicator for bot's response */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[75%] p-3 rounded-lg bg-gray-200 text-gray-800 rounded-bl-none shadow-md animate-pulse">
                  Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} /> {/* Dummy div for scrolling */}
          </div>

          {/* Chat input and send button */}
          <div className="p-4 border-t border-gray-200 flex items-center bg-gray-50 rounded-b-lg">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a question..."
              className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white shadow-sm"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              className="ml-3 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transform hover:scale-105"
              disabled={isLoading}
              aria-label="Send Message"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
      {/* Custom CSS for bounce animation and scrollbar */}
      <style>{`
        @keyframes bounce-custom {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-bounce-custom {
          animation: bounce-custom 2s infinite ease-in-out;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.3s ease-out forwards;
        }

        @keyframes messagePop {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-message-pop {
          animation: messagePop 0.2s ease-out forwards;
        }

        /* Custom scrollbar styles */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
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
        }
        .animate-fade-in-up.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fade-in-up.delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
