import React from 'react';

const TravelAdviceCard = ({ item }: { item: any }) => {
    return (
        <div className="relative rounded-3xl overflow-hidden shadow-lg group">
        {/* Black overlay layer with reduced opacity on hover */}
        <div className="absolute inset-0 bg-black opacity-40 z-10 transition-opacity duration-1000 ease-out group-hover:opacity-10"></div>
  
        {/* Top content above the image */}
        <div className="absolute top-0 z-20 left-0 right-0 text-white">
          <div className="main-container">
            <div className="kontainer">
              <div className="itemCard">
                <span className="text-xl font-black text-black">Manyara</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Image with smooth and slow zoom effect */}
        <img
          src={item.imageUrl}
          alt="Elephant in the wild"
          className="w-[450px] h-[280px] md:object-fill lg:object-cover  lg:h-[900px] lg:w-[560px] object-cover transform transition-transform duration-1000 ease-out group-hover:scale-110"
        />
  
        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-transparent to-transparent text-white z-20">
          <button className="border border-white text-white py-[10px] px-4 rounded-full mb-2 text-3xl">
            Explore Here
          </button>
          <h3 className="text-lg font-semibold">Expert Travel Advice</h3>
          <p className="text-base">Tips and guides to enhance your travel experience.</p>
        </div>
      </div>
    );
};

export default TravelAdviceCard;
