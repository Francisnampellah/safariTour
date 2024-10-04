import React from "react";

const PackageFooter = () => {
  return (
    <div className="bg-gray-300 rounded-3xl w-[86%] mx-auto">
      <div className="relative h-96">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src="https://images.unsplash.com/photo-1542242476-5a3565835a38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGN1cnklMjByb2Fkc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Adventure Background"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center bg-black bg-opacity-50 rounded-3xl">
          <h2 className="text-3xl font-bold text-white mb-2">
            Join Us for an Unforgettable Adventure!
          </h2>
          <p className="text-sm text-white">
            Discover breathtaking landscapes, immerse yourself in diverse
            cultures. Book your tour with us today and embark on a journey like
            no other!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackageFooter;
