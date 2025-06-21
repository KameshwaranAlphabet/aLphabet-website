import React from 'react';
import { User } from 'lucide-react';

const AllBlogsPage = ({ navigateTo }) => {
    // This data would typically come from an API or a central data store
    const allBlogPosts = [
    {
      id: 'blog-1',
      title: 'The Importance of Holistic Education',
      date: 'June 5, 2025',
      author: 'Dr. Emily Carter',
      image: 'https://placehold.co/400x250/C0E0C0/338833?text=Holistic+Edu',
      excerpt: 'Exploring how a balanced approach to education shapes well-rounded individuals...',
      fullContent: 'Holistic education focuses on developing students intellectually, emotionally, socially, physically, and spiritually. It goes beyond academic achievements to nurture well-rounded individuals prepared for life\'s challenges. At SchoolName, we integrate arts, sports, and community service into our curriculum to ensure comprehensive development. This approach fosters critical thinking, creativity, and empathy, empowering students to become compassionate leaders.',
    },
    {
      id: 'blog-2',
      title: 'Innovations in Classroom Technology',
      date: 'May 20, 2025',
      author: 'Mr. Alex Tech',
      image: 'https://placehold.co/400x250/E0C0C0/883333?text=Tech+in+Class',
      excerpt: 'Discovering the latest tools and techniques enhancing the learning experience...',
      fullContent: 'Technology is rapidly transforming education. Our classrooms are equipped with interactive whiteboards, VR headsets for immersive learning, and AI-powered personalized learning platforms. These tools enable dynamic teaching methods and cater to diverse learning styles. We believe in preparing students for a digital future by integrating relevant technologies into everyday learning, making education more engaging and effective.',
    },
    {
      id: 'blog-3',
      title: 'Tips for a Successful Academic Year',
      date: 'April 15, 2025',
      author: 'Ms. Sarah Lee',
      image: 'https://placehold.co/400x250/C0C0E0/333388?text=Success+Tips',
      excerpt: 'Practical advice for students and parents to make the most of their time at school...',
      fullContent: 'A successful academic year starts with good planning and a positive mindset. For students, we recommend setting clear goals, managing time effectively, and actively participating in class. For parents, establishing a supportive home learning environment, communicating regularly with teachers, and encouraging extracurricular involvement are key. Remember, collaboration between students, parents, and teachers is the cornerstone of academic success.',
    },
    {
      id: 'blog-4',
      title: 'The Benefits of Outdoor Learning',
      date: 'March 1, 2025',
      author: 'Dr. John Naturalist',
      image: 'https://placehold.co/400x250/D0F0D0/2A882A?text=Outdoor+Learning',
      excerpt: 'Exploring how connecting with nature enhances cognitive and emotional development...',
      fullContent: 'Outdoor learning provides invaluable opportunities for students to connect with nature, develop problem-solving skills, and enhance their physical and mental well-being. Our school incorporates regular outdoor excursions, nature studies, and garden-based learning to enrich the curriculum. These experiences foster a deeper understanding of environmental stewardship and encourage creativity outside traditional classroom settings.',
    },
    {
      id: 'blog-5',
      title: 'Cultivating Creativity Through Arts Programs',
      date: 'February 10, 2025',
      author: 'Ms. Clara Brush',
      image: 'https://placehold.co/400x250/FFDDEC/E62299?text=Arts+Program',
      excerpt: 'How robust arts education programs unlock student potential and expression...',
      fullContent: 'The arts play a vital role in fostering creativity, critical thinking, and emotional intelligence. Our comprehensive arts programs, including visual arts, music, dance, and drama, provide students with diverse avenues for self-expression and skill development. We believe that participation in the arts builds confidence, encourages collaboration, and allows students to explore their unique talents, enriching their overall educational journey.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-20 max-w-7xl bg-white rounded-2xl shadow-lg my-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center border-b-4 border-yellow-500 pb-2 inline-block mx-auto block">All Our Blogs</h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Browse through all our insightful articles and updates.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allBlogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-blue-50 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-blue-100"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/cccccc/000000?text=Image+Error'; }}
            />
            <div className="p-6 text-left">
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-2 flex items-center">
                <User className="w-4 h-4 mr-1 text-gray-500" /> {post.author}
              </p>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button
                onClick={() => navigateTo('blogDetail', post)}
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center group"
              >
                Read Article
                <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">&#8594;</span>
              </button>
            </div>
          </div>
        ))}
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

export default AllBlogsPage;
