import React from "react";

const LeftSections = [
  {
    title: "Experienced Agent",
    description:
      "Our experience and flying hours have proven that the satisfaction of customers who keep coming back and the various things we have gone through are our basis for providing the best and always being ready to provide solutions for you.",
    img: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    title: "Best Travel Provider",
    description:
      "Your travel memories and stories are our top priority. We ensure that the entire process of your holiday goes well and is unforgettable.",
    img: "https://via.placeholder.com/300",
  }
 
  // Add more sections as needed
];

const RightSections = [
  {
    title: "Luxury Travel",
    description:
      "Experience the ultimate in luxury travel with our exclusive packages designed to provide you with unparalleled comfort and style.",
    img: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    title: "Adventure Tours",
    description:
      "Embark on thrilling adventures and explore the world's most exciting destinations with our specially curated adventure tours.",
    img: "https://via.placeholder.com/300",
  }
 
  // Add more sections as needed
];

const WhyUs = () => {
  // Determine the maximum number of sections to handle unequal lengths
  const maxSections = Math.max(LeftSections.length, RightSections.length);

  return (
    <div className="h-auto mx-auto py-10  px-32 overflow-y-hidden">
      <h1 className="text-4xl font-bold text-center mb-12">
        We Are a World Famous Travel Agency
      </h1>

      <div className="relative overflow-y-auto">
        {/* Central Vertical Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

        {/* Sections */}
        <div className="space-y-20">
          {Array.from({ length: maxSections }).map((_, index) => {
            const left = LeftSections[index];
            const right = RightSections[index];
            return (
              <div key={index} className="flex items-center">
                {/* Left Section */}
                <div className="w-1/2 ">
                  {left && (
                    <div className="text-right flex justify-end flex-col">
                      <img
                        src={left.img}
                        alt={left.title}
                        className="w-96 h-[239px] rounded-lg self-end shadow-lg"
                      />
                      <div className="w-96 h-[239px] flex justify-end flex-col self-end">

                      <h2 className="text-2xl font-semibold mb-2">
                        {left.title}
                      </h2>
                      <p className="text-gray-700">{left.description}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Central Dots */}
                <div className="w-16 flex flex-col items-center space-y-60">
                  <div className="w-5 h-5 bg-blue-600 rounded-full border-4 border-blue-100 shadow-md z-10"></div>
     
                  <div className="w-5 h-5 bg-blue-600 rounded-full border-4 border-blue-100 shadow-md z-10"></div>
                  
                </div>

                {/* Right Section */}
                <div className="w-1/2 pl-8 md:pl-12 ">
                  {right && (
                    <div className="text-left flex flex-col">
                      <div className="w-96 h-[239px] flex justify-start flex-col self-start items-start">
                      <h2 className="text-2xl font-semibold">
                          {right.title}
                        </h2>
                        <p className="text-gray-700">{right.description}</p>
                      </div>
                      <img
                        src={right.img}
                        alt={right.title}
                        className="w-96 h-[239px] flex justify-center items-center rounded-lg shadow-lg"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;