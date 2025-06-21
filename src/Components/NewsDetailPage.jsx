import React from 'react';
import { User } from 'lucide-react';

const NewsDetailPage = ({ navigateTo, newsItem }) => {
  if (!newsItem) {
    return (
      <div className="container mx-auto px-4 py-16 md:py-20 max-w-4xl bg-white rounded-2xl shadow-lg my-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">News Article Not Found</h1>
        <p className="text-lg text-gray-600 mt-4">Please go back to the homepage to select a news article.</p>
        <button
          onClick={() => navigateTo('home')}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-20 max-w-4xl bg-white rounded-2xl shadow-lg my-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">{newsItem.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{newsItem.date}</p>
      <img
        src={newsItem.image}
        alt={newsItem.title}
        className="w-full h-auto object-cover rounded-xl shadow-md mb-8"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x450/cccccc/000000?text=News+Image+Error'; }}
      />
      <div className="prose lg:prose-xl mx-auto max-w-none text-gray-700">
        <p className="text-lg leading-relaxed mb-4">{newsItem.fullContent}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Curabitur pretium tincidunt lacus. Nulla facilisi. Aenean feugiat mi vel nulla. Curabitur sollicitudin, magna quis interdum tempor, mauris lectus egestas erat, et sollicitudin magna diam a lorem. Praesent ac leo vel massa euismod pulvinar.
        </p>
      </div>
      <div className="text-center mt-12">
        <button
          onClick={() => navigateTo('home')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NewsDetailPage;
