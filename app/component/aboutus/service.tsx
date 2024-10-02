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
    <section className="h-auto flex w-full flex-col gap-8 my-8">
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
              src="https://media.gettyimages.com/id/1018301704/photo/always-eager-to-provide-guests-with-the-best-service.jpg?s=2048x2048&w=gi&k=20&c=bcWDJOSe40hQaEUnr_jbRPyv82313jDv2QirCDaLeW8="
              alt="service"
              className="w-[600px] h-[373px] rounded-3xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
