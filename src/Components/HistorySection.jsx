import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const HistorySection = () => {
  const navigate = useNavigate();

  const navigateTo = (page, data = null) => {
    navigate(`/${page}`, { state: data });
  };

  const timelineEventsRef = useRef([]);
  const processBarRef = useRef(null);
  const timelineContainerRef = useRef(null);

  const [activeStep, setActiveStep] = useState(0);
  const [isCardAnimating, setIsCardAnimating] = useState(false);
  const [processBarHeight, setProcessBarHeight] = useState(0);

  const timelineEventsData = [
    {
      year: '1985',
      title: 'Founding Year',
      description: 'The school was established with a vision to provide quality education and foster a strong community spirit.',
    },
    {
      year: '1995',
      title: 'Expansion of Campus',
      description: 'A new wing was added, including state-of-the-art laboratories and a spacious library.',
    },
    {
      year: '2005',
      title: 'Introduction of Arts Program',
      description: 'The school launched a vibrant arts program including music, drama, and visual arts.',
    },
    {
      year: '2015',
      title: 'Technological Advancements',
      description: 'Integrated cutting-edge technology with smart classrooms and computer labs.',
    },
    {
      year: '2025',
      title: 'Community Outreach Programs',
      description: 'Launched community outreach initiatives to foster social responsibility.',
    },
  ];

  const updateProcessBarAndCircles = useCallback(() => {
    if (
      timelineEventsRef.current.length === 0 ||
      !processBarRef.current ||
      !timelineContainerRef.current
    ) return;

    const firstEventElement = timelineEventsRef.current[0];
    const currentEventElement = timelineEventsRef.current[activeStep];

    if (firstEventElement && currentEventElement) {
      const firstCircle = firstEventElement.querySelector('.timeline-circle');
      const currentCircle = currentEventElement.querySelector('.timeline-circle');

      if (firstCircle && currentCircle) {
        const currentCircleTop = currentCircle.offsetTop;
        const circleHeight = currentCircle.offsetHeight;

        const newHeight = currentCircleTop + circleHeight / 2;
        setProcessBarHeight(newHeight);
      }

      timelineEventsRef.current.forEach((eventDiv, index) => {
        const circle = eventDiv.querySelector('.timeline-circle');
        if (circle) {
          if (index <= activeStep) {
            circle.classList.add('bg-blue-800');
            circle.classList.remove('bg-blue-600');
          } else {
            circle.classList.remove('bg-blue-800');
            circle.classList.add('bg-blue-600');
          }
        }
      });
    }
  }, [activeStep]);

  useEffect(() => {
    if (activeStep >= 0 && timelineEventsRef.current[activeStep]) {
      setIsCardAnimating(true);
      const animationTimeout = setTimeout(() => {
        setIsCardAnimating(false);
      }, 500);
      return () => clearTimeout(animationTimeout);
    }
  }, [activeStep]);

  useEffect(() => {
    const pauseAtStepDuration = 2000;

    updateProcessBarAndCircles();

    const timeoutId = setTimeout(() => {
      if (activeStep === timelineEventsData.length - 1) {
        setActiveStep(0);
      } else {
        setActiveStep(prev => prev + 1);
      }
    }, pauseAtStepDuration);

    return () => clearTimeout(timeoutId);
  }, [activeStep, timelineEventsData.length, updateProcessBarAndCircles]);

  useEffect(() => {
    if (
      timelineEventsRef.current.length === timelineEventsData.length &&
      timelineContainerRef.current
    ) {
      updateProcessBarAndCircles();
    }
  }, [timelineEventsData.length, updateProcessBarAndCircles]);

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://placehold.co/1500x500/87CEFA/FFFFFF?text=Our+History")',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center">Our Rich History</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Established in <strong>1985</strong>, <strong>Your School Name</strong> has a proud legacy
          of academic excellence and holistic development.
        </p>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
            Milestones Through the Years
          </h2>
          <div ref={timelineContainerRef} className="relative wrap overflow-hidden p-10 h-full">
            <div
              className="border-2 absolute h-full border-blue-300"
              style={{ left: '50%', transform: 'translateX(-50%)' }}
            ></div>

            <div
              ref={processBarRef}
              className="absolute bg-blue-800 w-1 transition-all duration-700 ease-in-out"
              style={{ left: 'calc(50% - 2px)', top: 0, height: `${processBarHeight}px` }}
            ></div>

            {timelineEventsData.map((event, index) => (
              <div
                key={index}
                className={`mb-8 flex justify-between items-center w-full flex-col md:flex-row ${
                  index % 2 === 0 ? 'left-timeline' : 'right-timeline'
                }`}
                ref={(el) => (timelineEventsRef.current[index] = el)}
              >
                {index % 2 === 0 ? (
                  <>
                    <div
                      className={`order-1 md:w-5/12 bg-blue-100 rounded-lg shadow-xl px-6 py-4 text-center md:text-right transition-transform duration-300 hover:scale-105 w-full md:order-1 ${
                        activeStep === index && isCardAnimating ? 'scale-105 shadow-2xl' : ''
                      }`}
                    >
                      <h3 className="mb-3 font-bold text-gray-800 text-xl">
                        {event.title} - {event.year}
                      </h3>
                      <p className="text-sm text-gray-900">{event.description}</p>
                    </div>
                    <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full timeline-circle my-2 md:my-0 md:order-2">
                      <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                    </div>
                    <div className="order-1 md:w-5/12 w-full md:order-3"></div>
                  </>
                ) : (
                  <>
                    <div className="order-1 md:w-5/12 w-full md:order-1"></div>
                    <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full timeline-circle my-2 md:my-0 md:order-2">
                      <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                    </div>
                    <div
                      className={`order-1 md:w-5/12 bg-blue-100 rounded-lg shadow-xl px-6 py-4 text-center md:text-left transition-transform duration-300 hover:scale-105 w-full md:order-3 ${
                        activeStep === index && isCardAnimating ? 'scale-105 shadow-2xl' : ''
                      }`}
                    >
                      <h3 className="mb-3 font-bold text-gray-800 text-xl">
                        {event.title} - {event.year}
                      </h3>
                      <p className="text-sm text-gray-900">{event.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-800 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Be a Part of Our Future</h2>
          <p className="text-xl mb-8">
            Our history is a testament to our enduring commitment to education. Join us as we write
            the next chapter.
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xl"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default HistorySection;
