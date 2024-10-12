import React, { useState } from "react";
import DayAccordion from "../DayAccordion";

const PackageDescription = ({ item }: { item: any }) => {
  const [activeSection, setActiveSection] = useState('Description');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  console.log(item.dayItineraries)
  const renderContent = () => {
    switch (activeSection) {
      case 'Description':
        return (
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Description</h2>
            <p>
              {item.description}
            </p>
            <p>
              Highlights of the tour include:
              <ul className="list-disc ml-5">
                {item.inclusions.map((each: any) =>
                  <li>{each.inclusion}</li>

                )}

              </ul>
            </p>
          </div>
        );
      case 'List':
        return (
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">List</h2>
            <div className="px-">
              {item.dayItineraries.map((item: any, index: any) => {
                return (

                  <DayAccordion
                    day={item}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                  />
                )
              })}
            </div>
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
      case 'Activities':
        return (
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Activities</h2>
            <div className="mb-4">
              <ul className="list-disc">
                {item.tourActivities.map((activity: any) => (
                  <li>{activity.activity}</li>
                ))}
              </ul>
            </div>
          </div>
        );
        case 'Transport':
          return (
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">Activities</h2>
              <div className="mb-4">
                <ul className="list-disc">
                  {item.transportTypes.map((transport: any) => (
                    <li>{transport.transport}</li>
                  ))}
                </ul>
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
            <div className="relative">
              <h1
                className={`cursor-pointer ${activeSection === 'Activities' ? 'font-bold' : ''}`}
                onClick={() => setActiveSection('Activities')}
              >
                Activities
              </h1>
              {activeSection === 'Activities' && <hr className="absolute bottom-0 left-0 w-full border-t-2 border-black" />}
            </div>
            <div className="relative">
              <h1
                className={`cursor-pointer ${activeSection === 'Transport' ? 'font-bold' : ''}`}
                onClick={() => setActiveSection('Transport')}
              >
                Transport
              </h1>
              {activeSection === 'Transport' && <hr className="absolute bottom-0 left-0 w-full border-t-2 border-black" />}
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
