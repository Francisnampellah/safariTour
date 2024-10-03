import WhyUsCard from "../WhyUsCard";
import { LuCheckCircle } from "react-icons/lu";

const LeftSections = [
  {
    title: "Experienced Agent",
    description:
      "Our experience and flying hours have proven that the satisfaction of customers who keep coming back and the various things we have gone through are our basis for providing the best and always being ready to provide solutions for you.",
    img: "https://images.unsplash.com/photo-1567636788276-40a47795ba4d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
  },
  {
    title: "Best Travel Provider",
    description:
      "Your travel memories and stories are our top priority. We ensure that the entire process of your holiday goes well and is unforgettable.",
    img: "https://media.gettyimages.com/id/1087028804/photo/portrait-of-hunting-cheetah-in-high-grass.jpg?s=2048x2048&w=gi&k=20&c=ggwchcWnNamptnWKxaK5t8lkP5gdsGtL8M5NRV_KHbs=",
  }

  // Add more sections as needed
];

const RightSections = [
  {
    title: "Luxury Travel",
    description:
      "Experience the ultimate in luxury travel with our exclusive packages designed to provide you with unparalleled comfort and style.",
    img: "https://media.gettyimages.com/id/1018301750/photo/enjoying-drinks-and-sunsets-on-our-vacation.jpg?s=2048x2048&w=gi&k=20&c=iDDsM8tWUsRyvA5uU1qZG6tPNTG5E9o25vXA9Ou7CZ0=", // Replace with actual image URL
  },
  {
    title: "Adventure Tours",
    description:
      "Embark on thrilling adventures and explore the world's most exciting destinations with our specially curated adventure tours.",
    img: "https://media.gettyimages.com/id/82999960/photo/tourists-photographing-male-lion.webp?s=2048x2048&w=gi&k=20&c=QefmgkfhEYrunOcJFKWtJQSfF8Cen90AwWn9GL02lW0=",
  }

  // Add more sections as needed
];

const WhyUs = () => {
  // Determine the maximum number of sections to handle unequal lengths
  const maxSections = Math.max(LeftSections.length, RightSections.length);

  return (
    <div className="h-auto flex w-full flex-col gap-2 md:gap-8 md:my-8 md:px-32 py-8 md:py-16 bg-white">

      <div className="px-4 md:px-8 gap-2 md:gap-8 my-2 md:my-8 flex flex-col">
        <div className="text-blue-600 text-2xl md:text-3xl  flex gap-2 md:gap-4 items-end" > <LuCheckCircle className="text-4xl md:text-5xl" /> <span className="font-semibold">Why Safari</span></div>
        <h1 className="text-xl md:5xl text-start">
          We Are a World Famous Travel Agency
        </h1>
      </div>

      <div className=" flex lg:hidden">
      <WhyUsCard/>
      </div>

      <div className="relative hidden lg:flex ">
        {/* Central Vertical Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

        {/* Sections */}
        <div className="space-y-20">
          {Array.from({ length: maxSections }).map((_, index) => {
            const left = LeftSections[index];
            const right = RightSections[index];

            return (
              <div key={index} className="flex items-center gap-16">
                {/* Left Section */}
                <div className="w-1/2">
                  {left && (
                    <div className="text-right flex justify-end flex-col">
                      <img
                        src={left.img}
                        alt={left.title}
                        className="w-[450px] h-[280px] rounded-3xl self-end shadow-lg"
                      />
                      <div className="w-[450px] h-[280px] flex justify-end items-end flex-col self-end">

                        <h2 className="text-3xl text-left font-semibold mb-2">
                          {left.title}
                        </h2>
                        <p className="text-gray-700  text-2xl">{left.description}</p>
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
                <div className="w-1/2">
                  {right && (
                    <div className="text-left flex flex-col">
                      <div className="w-[450px] h-[280px] flex justify-start flex-col self-start items-start">
                        <h2 className="text-3xl font-semibold">
                          {right.title}
                        </h2>
                        <p className="text-gray-700 text-2xl">{right.description}</p>
                      </div>
                      <img
                        src={right.img}
                        alt={right.title}
                        className="w-[450px] h-[280px] flex justify-center items-center rounded-3xl shadow-lg"
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