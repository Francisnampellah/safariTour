import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1567636788276-40a47795ba4d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      header: 'Experienced Agent',
      detail: 'Explore the wonders of nature with stunning landscapes.',
    },
    {
      image: 'https://media.gettyimages.com/id/1087028804/photo/portrait-of-hunting-cheetah-in-high-grass.jpg?s=2048x2048&w=gi&k=20&c=ggwchcWnNamptnWKxaK5t8lkP5gdsGtL8M5NRV_KHbs=',
      header: 'Best Travel Provider',
      detail: 'Discover breathtaking views from around the world.',
    },
    {
      image: 'https://media.gettyimages.com/id/1018301750/photo/enjoying-drinks-and-sunsets-on-our-vacation.jpg?s=2048x2048&w=gi&k=20&c=iDDsM8tWUsRyvA5uU1qZG6tPNTG5E9o25vXA9Ou7CZ0=',
      header: 'Luxury Travel',
      detail: 'Embark on thrilling adventures in exotic locations.',
    },
    {
        image: 'https://media.gettyimages.com/id/82999960/photo/tourists-photographing-male-lion.webp?s=2048x2048&w=gi&k=20&c=QefmgkfhEYrunOcJFKWtJQSfF8Cen90AwWn9GL02lW0=',
        header: 'Adventure Tours',
        detail: 'Embark on thrilling adventures in exotic locations.',
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic slide change with timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        handleNextClick();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, isPaused]);

  const handlePrevClick = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    resetPause();
  };

  const handleNextClick = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    resetPause();
  };

  const resetPause = () => {
    setTimeout(() => setIsPaused(false), 5000); // Reset auto-slide after 5s of user interaction
  };

  return (
    <div className="relative w-full max-w-xs mx-auto rounded-lg overflow-hidden shadow">
      <img
        src={slides[currentIndex].image}
        alt={slides[currentIndex].header}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-3">
        <h2 className="text-white text-lg font-bold">
          {slides[currentIndex].header}
        </h2>
        <p className="text-white text-sm">{slides[currentIndex].detail}</p>
      </div>

      {/* Control Buttons */}
      <button
        onClick={handlePrevClick}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 glassy p-1 w-8 h-8 rounded-full shadow-md text-white flex justify-center items-center"
      >
        &#8249;
      </button>
      <button
        onClick={handleNextClick}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 glassy w-8 h-8 flex justify-center items-center text-white p-1 rounded-full shadow-md "
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
