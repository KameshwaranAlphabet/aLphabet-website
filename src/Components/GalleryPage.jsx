import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';

const GalleryPage = () => {
  const [processedImages, setProcessedImages] = useState([]);

  const rawImages = [
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&auto=format&fit=crop',
      alt: 'Beach Sunset'
    },
    {
      src: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546',
      alt: 'Coding on Laptop'
    },
    {
      src: 'http://d1fbuevzm5rgyw.cloudfront.net/main-gallery/Grade 5 Madras Day (2).JPG',
      alt: 'Web Development'
    },
    {
      src: 'http://d1fbuevzm5rgyw.cloudfront.net/main-gallery/IMG_1461.JPG',
      alt: 'Computer Parts'
    },
    {
      src: 'http://d1fbuevzm5rgyw.cloudfront.net/main-gallery/IMG_1661.jpg',
      alt: 'PNG Transparency'
    },
    {
      src: 'http://d1fbuevzm5rgyw.cloudfront.net/main-gallery/MYP Pottery session (31).JPG',
      alt: 'Forest Path'
    },
    {
      src: 'http://d1fbuevzm5rgyw.cloudfront.net/main-gallery/IMG_0534.jpg',
      alt: 'Mushroom in forest'
    }
  ];

  useEffect(() => {
    const loadImages = async () => {
      const promises = rawImages.map((img) => {
        return new Promise((resolve) => {
          const image = new Image();
          image.src = img.src;
          image.onload = () => {
            const isPortrait = image.height > image.width;
            const width = isPortrait ? 300 : 400;

            const hasQuery = img.src.includes('?');
            const thumb = `${img.src}${hasQuery ? '&' : '?'}q=80&w=${width}&auto=format`;

            resolve({
              ...img,
              thumb,
            });
          };

          image.onerror = () => {
            resolve({
              ...img,
              thumb: 'https://placehold.co/300x200/cccccc/000000?text=Error'
            });
          };
        });
      });

      const results = await Promise.all(promises);
      setProcessedImages(results);
    };

    loadImages();
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    768: 2,
    640: 1
  };

  const masonryGridStyle = {
    display: 'flex',
    marginLeft: '-16px',
    width: 'auto',
  };

  const galleryItemStyle = {
    marginBottom: '16px',
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-5xl text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-2 border-b-4 border-yellow-500 pb-2 inline-block">
          Our Photo Gallery
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Explore moments from our vibrant school life, events, and academic achievements.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          style={masonryGridStyle}
        >
          {processedImages.map((image, index) => (
            <div
              key={index}
              className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              style={galleryItemStyle}
            >
              <img
                alt={image.alt}
                src={image.thumb}
                className="w-full h-auto"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/300x200/cccccc/000000?text=Error';
                }}
              />
            </div>
          ))}
        </Masonry>
      </div>

      <style>{`
        .my-masonry-grid_column {
          padding-left: 16px;
          background-clip: padding-box;
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;
