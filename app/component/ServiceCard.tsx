import React from 'react';

const BannerSection = ({ item }: { item: any }) => {
    return (
        <section className={`relative w-full h-full rounded-3xl overflow-hidden group ${item.extraClass}`}>
            <div className="absolute top-0 z-20 left-0 right-0 text-white">
                <div className="main-container">
                    <div className="kontainer">
                        <div className="itemCard">
                            <span className="text-xl font-black text-black">Service</span>
                        </div>
                    </div>
                </div>
            </div>


            {/* Image with zoom effect on hover */}
            <img
                src={item.imageUrl}
                alt="Banner"
                className="w-full h-full object-cover rounded-3xl transition-transform duration-100 ease-out group-hover:scale-105"
            />

            {/* Overlay with opacity transition on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end items-end px-8 py-4 transition-opacity duration-500 ease-out group-hover:bg-opacity-30">
                <div className="text-white">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm mt-1">{item.description}</p>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
