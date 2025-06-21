import React from 'react';
import { User } from 'lucide-react';

const BlogsSection = ({ navigateTo }) => {
  const blogPosts = [
    {
      id: 'blog-1',
      title: 'The Importance of Holistic Education',
      date: 'June 5, 2025',
      author: 'Dr. Emily Carter', // Added author
      image: 'https://assets-alphabet-prod.s3.ap-south-1.amazonaws.com/assets/hero/h2.jpg',
      excerpt: 'Exploring how a balanced approach to education shapes well-rounded individuals...',
      fullContent: 'Holistic education focuses on developing students intellectually, emotionally, socially, physically, and spiritually. It goes beyond academic achievements to nurture well-rounded individuals prepared for life\'s challenges. At SchoolName, we integrate arts, sports, and community service into our curriculum to ensure comprehensive development. This approach fosters critical thinking, creativity, and empathy, empowering students to become compassionate leaders.',
    },
    {
      id: 'blog-2',
      title: 'Innovations in Classroom Technology',
      date: 'May 20, 2025',
      author: 'Mr. Alex Tech', // Added author
      image: 'https://assets-alphabet-prod.s3.ap-south-1.amazonaws.com/assets/hero/h3.jpg',
      excerpt: 'Discovering the latest tools and techniques enhancing the learning experience...',
      fullContent: 'Technology is rapidly transforming education. Our classrooms are equipped with interactive whiteboards, VR headsets for immersive learning, and AI-powered personalized learning platforms. These tools enable dynamic teaching methods and cater to diverse learning styles. We believe in preparing students for a digital future by integrating relevant technologies into everyday learning, making education more engaging and effective.',
    },
    {
      id: 'blog-3',
      title: 'Tips for a Successful Academic Year',
      date: 'April 15, 2025',
      author: 'Ms. Sarah Lee', // Added author
      image: 'https://assets-alphabet-prod.s3.ap-south-1.amazonaws.com/assets/hero/h4.jpg',
      excerpt: 'Practical advice for students and parents to make the most of their time at school...',
      fullContent: 'A successful academic year starts with good planning and a positive mindset. For students, we recommend setting clear goals, managing time effectively, and actively participating in class. For parents, establishing a supportive home learning environment, communicating regularly with teachers, and encouraging extracurricular involvement are key. Remember, collaboration between students, parents, and teachers is the cornerstone of academic success.',
    },
  ];

  return (
    <section id="blogs" className="py-16 md:py-20 bg-white rounded-2xl shadow-lg mb-12">
      <div className="text-center px-6 md:px-8">
        <h2 className="text-4xl font-bold text-blue-800 mb-4 border-b-4 border-yellow-500 pb-2 inline-block">Our Latest Blogs</h2>
        <p className="text-gray-700 text-xl max-w-3xl mx-auto mb-12">
          Dive deeper into educational insights, school news, and thought leadership from our community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-blue-50 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-blue-100"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/cccccc/000000?text=Image+Error'; }} // Fallback
              />
              <div className="p-6 text-left">
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-2 flex items-center">
                  <User className="w-4 h-4 mr-1 text-gray-500" /> {post.author}
                </p>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button
                  onClick={() => navigateTo('blogDetail', post)} // Pass entire post to detail page
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center group"
                >
                  Read Article
                  <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">&#8594;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <button
            onClick={() => navigateTo('allBlogs')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
