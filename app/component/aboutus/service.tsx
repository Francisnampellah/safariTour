import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const services = [
  {
    title: "Beach Vacations",
    description:
      "Experience the ultimate relaxation on pristine beaches with crystal-clear waters and golden sands.",
  },
  {
    title: "Cruises",
    description:
      "Set sail on a luxurious cruise and explore breathtaking destinations. ",
  },
  {
    title: "Excursions",
    description:
      "Embark on exciting excursions and discover hidden gems.",
  },
];

const Service = () => {
  return (
    <section className="h-auto overflow-y-hidden flex w-full flex-col gap-16 my-8 ">
      <div className="px-4">
        {/* Header Section */}
        <div className="px-16 gap-8 my-8 flex flex-col">
          <h1 className="text-blue-600 text-3xl " > /// <span className="font-semibold">Service</span></h1>
          <h1 className="text-5xl text-start">
            We Are a World Famous Travel Agency
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full">
          {/* Left Side - List of Services */}
          <div className="w-[30%]">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-start mb-8 w-full"
              >
                <div className="flex items-start w-full">
                  {/* Icon */}
                  <div className="w-10 h-10 flex-shrink-0 text-gray-500 mr-4 flex items-center justify-center rounded-full border ">
                    <GoArrowUpRight className="text-xl" />
                  </div>

                  {/* Service Info */}
                  <div className=" flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold">{service.title}</h2>
                    <p className="text-gray-600 ">{service.description}</p>
                  </div>
                </div>
                {/* Horizontal Line */}
                {index < services.length - 1 && (
                  <hr className="w-full my-4 border-0 h-1 bg-gradient-to-r from-gray-300 to-transparent" />
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="">
            <img
              src="https://plus.unsplash.com/premium_photo-1670148434900-5f0af77ba500?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="service"
              className="w-[660px] h-[373px] rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
