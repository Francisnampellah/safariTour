import React, { useState } from "react";

const PackageDescription = () => {
  const [activeSection, setActiveSection] = useState('Description');

  const renderContent = () => {
    switch (activeSection) {
      case 'Description':
        return (
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Description</h2>
            <p>
              This package offers a comprehensive tour of the most beautiful and exotic locations. 
              You will experience breathtaking landscapes, vibrant cultures, and unforgettable adventures. 
              Our expert guides will ensure you have an enriching and enjoyable experience. 
              The tour includes visits to historical sites, natural wonders, and local markets. 
              Enjoy comfortable accommodations and delicious local cuisine throughout your journey.
            </p>
            <p>
              Highlights of the tour include:
              <ul className="list-disc ml-5">
                <li>Guided tours of historical landmarks</li>
                <li>Excursions to natural parks and reserves</li>
                <li>Interactive cultural experiences</li>
                <li>Gourmet meals featuring local specialties</li>
                <li>Luxury transportation and accommodations</li>
              </ul>
            </p>
          </div>
        );
      case 'List':
        return (
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">List</h2>
            <ul className="list-disc ml-5">
              <li>Day 1: Arrival and welcome dinner</li>
              <li>Day 2: City tour and museum visit</li>
              <li>Day 3: Excursion to the national park</li>
              <li>Day 4: Cultural workshop and local market tour</li>
              <li>Day 5: Free day for personal exploration</li>
              <li>Day 6: Beach day and water activities</li>
              <li>Day 7: Departure and farewell breakfast</li>
            </ul>
          </div>
        );
      case 'Reviews':
        return (
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Reviews</h2>
            <div className="mb-4">
              <p className="font-bold">John Doe</p>
              <p>
                "This tour was absolutely amazing! The guides were knowledgeable and friendly, 
                and the itinerary was well-planned. I especially loved the cultural experiences 
                and the beautiful landscapes. Highly recommend!"
              </p>
            </div>
            <div className="mb-4">
              <p className="font-bold">Jane Smith</p>
              <p>
                "A fantastic experience from start to finish. The accommodations were top-notch, 
                and the food was incredible. I learned so much about the local culture and history. 
                This tour exceeded all my expectations."
              </p>
            </div>
            <div className="mb-4">
              <p className="font-bold">Michael Brown</p>
              <p>
                "An unforgettable adventure! The activities were diverse and exciting, and the 
                guides made sure everyone had a great time. I can't wait to book another tour with this company."
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="h-auto flex flex-col gap-8 my-8 px-4 md:px-32">
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-2/3 w-full">
          <div className="flex flex-row space-x-6 mb-4">
            <div className="relative">
              <h1
                className={`cursor-pointer ${activeSection === 'Description' ? 'font-bold' : ''}`}
                onClick={() => setActiveSection('Description')}
              >
                Description
              </h1>
              {activeSection === 'Description' && <hr className="absolute bottom-0 left-0 w-full border-t-2 border-black" />}
            </div>
            <div className="relative">
              <h1
                className={`cursor-pointer ${activeSection === 'List' ? 'font-bold' : ''}`}
                onClick={() => setActiveSection('List')}
              >
                List
              </h1>
              {activeSection === 'List' && <hr className="absolute bottom-0 left-0 w-full border-t-2 border-black" />}
            </div>
            <div className="relative">
              <h1
                className={`cursor-pointer ${activeSection === 'Reviews' ? 'font-bold' : ''}`}
                onClick={() => setActiveSection('Reviews')}
              >
                Reviews
              </h1>
              {activeSection === 'Reviews' && <hr className="absolute bottom-0 left-0 w-full border-t-2 border-black" />}
            </div>
          </div>
          <div className="my-4">{renderContent()}</div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 w-full p-4 mt-8 md:mt-0">
          <div className="flex flex-col">
            <div>
              <p>Additional Information</p>
            </div>
            <div className="flex flex-col mt-4">
              <div>
                <p className="font-bold">DIMENSIONS</p>
              </div>
              <div>
                <p>3X3X3</p>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <div className="font-bold">
                <p>WEIGHT</p>
              </div>
              <div>
                <p>0.75 lbs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageDescription;
