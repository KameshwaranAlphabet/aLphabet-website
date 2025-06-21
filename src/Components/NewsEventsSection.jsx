import React from 'react';

const NewsEventsSection = ({ navigateTo }) => {
  const newsItems = [
    {
      id: 'news-1',
      title: 'Annual Science Fair Showcases Innovation',
      date: 'June 10, 2025',
      image: 'http://d1fbuevzm5rgyw.cloudfront.net/main-gallery/EYP celebrations (28).JPG',
      summary: 'Students from all grades presented groundbreaking projects, showcasing their scientific curiosity and problem-solving skills...',
      fullContent: 'The annual Science Fair was a resounding success, with over 150 projects submitted across various disciplines. Judges were highly impressed by the ingenuity and depth of research displayed by our students. From sustainable energy solutions to innovative robotics, the fair highlighted the diverse talents and intellectual curiosity fostered within our school community. Parents and visitors enjoyed interactive demonstrations and learned about the scientific method from our budding scientists.',
    },
    {
      id: 'news-2',
      title: 'School Play "A Midsummer Night\'s Dream" Success',
      date: 'May 28, 2025',
      image: 'http://d1fbuevzm5rgyw.cloudfront.net/main-gallery/Grade 4 music (44).JPG',
      summary: 'Our drama club delivered a spectacular performance of Shakespeare\'s classic comedy, receiving rave reviews from the audience...',
      fullContent: 'The SchoolName Drama Club truly outdid themselves with their captivating rendition of "A Midsummer Night\'s Dream." The elaborate sets, vibrant costumes, and stellar performances transported the audience to an enchanted forest. Students from all age groups participated, demonstrating their dedication and collaborative spirit. Director Ms. Eleanor Vance praised the cast and crew for their hard work and commitment, making it a memorable experience for everyone involved.',
    },
    {
      id: 'news-3',
      title: 'Admissions Open for New Academic Year',
      date: 'May 15, 2025',
      image: 'http://d1fbuevzm5rgyw.cloudfront.net/main-gallery/Grade 6 bio (48).JPG',
      summary: 'Applications are now being accepted for the upcoming academic year. We invite prospective families to learn more...',
      fullContent: 'Exciting news for prospective students and their families! Admissions are now officially open for the new academic year at SchoolName. We encourage interested families to visit our Admissions page to learn about the application process, key dates, and eligibility criteria. Our admissions team is available to answer any questions and guide you through the journey of becoming a part of our thriving educational community. Early applications are highly encouraged!',
    },
  ];

  return (
    <section id="news-events" className="py-16 md:py-20 bg-blue-50 rounded-2xl shadow-lg mb-12">
      <div className="text-center px-6 md:px-8">
        <h2 className="text-4xl font-bold text-blue-800 mb-4 border-b-4 border-yellow-500 pb-2 inline-block">Student Achievements</h2>
        <p className="text-gray-700 text-xl max-w-3xl mx-auto mb-12">
          Stay up-to-date with the latest happenings and exciting events at SchoolName.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-blue-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/cccccc/000000?text=Image+Error'; }} // Fallback
              />
              <div className="p-6 text-left">
                <p className="text-gray-500 text-sm mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.summary}</p> {/* Show summary on card */}
                <button
                  onClick={() => navigateTo('newsDetail', item)} // Pass entire item to detail page
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center group"
                >
                  Read More
                  <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">&#8594;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
