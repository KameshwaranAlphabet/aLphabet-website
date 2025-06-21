import React from 'react';
import { User } from 'lucide-react';

const BlogDetailPage = ({ navigateTo, blogPost }) => {
  if (!blogPost) {
    return (
      <div className="container mx-auto px-4 py-16 md:py-20 max-w-4xl bg-white rounded-2xl shadow-lg my-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Blog Post Not Found</h1>
        <p className="text-lg text-gray-600 mt-4">Please go back to the homepage to select a blog post.</p>
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
      <h1 className="text-4xl font-bold text-blue-800 mb-4">{blogPost.title}</h1>
      <p className="text-gray-500 text-sm mb-2 flex items-center">
        <User className="w-4 h-4 mr-1 text-gray-500" /> {blogPost.author} &bull; {blogPost.date}
      </p>
      <img
        src={blogPost.image}
        alt={blogPost.title}
        className="w-full h-auto object-cover rounded-xl shadow-md mb-8"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x450/cccccc/000000?text=Blog+Image+Error'; }}
      />
      <div className="prose lg:prose-xl mx-auto max-w-none text-gray-700">
        <p className="text-lg leading-relaxed mb-4">{blogPost.fullContent}</p>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat.
        </p>
        <p>
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a sagittis eu, feugiat a felis.
        </p>
      </div>
      <div className="text-center mt-12">
        <button
          onClick={() => navigateTo('allBlogs')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Back to All Blogs
        </button>
      </div>
    </div>
  );
};

export default BlogDetailPage;
