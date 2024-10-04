import React, { useState } from 'react';

const PackageOffer = ({ item, animationClass }: { item: any, animationClass: string }) => {
    if (!item || !item.imageUrl) {
        return <div className="text-center text-xl font-semibold my-8">No item available</div>;
    }

    return (
        <div className={`relative rounded-3xl overflow-hidden shadow-lg group transform transition-all duration-500 ${animationClass}`}>
            {/* Black overlay layer with reduced opacity on hover */}
            <div className="absolute inset-0 bg-black opacity-40 z-10 transition-opacity duration-1000 ease-out group-hover:opacity-10"></div>

            {/* Top content above the image */}
            <div className="absolute top-0 z-20 left-0 right-0 text-white">
                <div className="main-container">
                    <div className="kontainer">
                        <div className="itemCard">
                            <span className="text-xl font-black text-black">{item.title}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image with smooth and slow zoom effect */}
            <img
                src={item.imageUrl}
                alt={item.title}
                className="w-[450px] h-[280px] md:object-fill lg:object-cover lg:h-[450px] lg:w-[280px] object-cover transform transition-transform duration-1000 ease-out group-hover:scale-110"
            />

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-transparent to-transparent text-white z-20">
                <button className="border border-white text-white py-[5px] px-5 rounded-full mb-2 text-xl transition-colors duration-300 hover:bg-white hover:text-black">
                    Explore Here
                </button>
                <h3 className="text-base font-semibold">Expert Travel Advice</h3>
                <p className="text-base">{item.description}</p>
            </div>
        </div>
    );
};

const TravelCardList = () => {
    const cardData = [
        {
            title: "Manyara",
            imageUrl: "https://images.unsplash.com/photo-1693247669730-0f64c13a57e3?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Tips and guides to enhance your travel experience."
        },
        {
            title: "Serengeti",
            imageUrl: "https://plus.unsplash.com/premium_photo-1661843615544-b2c973491c8b?q=80&w=2244&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Explore the vast plains and witness the great migration."
        },
        {
            title: "Ngorongoro",
            imageUrl: "https://images.unsplash.com/photo-1505148230895-d9a785a555fa?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Discover the unique wildlife in the Ngorongoro Crater."
        },
        {
            title: "Tarangire",
            imageUrl: "https://images.unsplash.com/photo-1641133293394-90f79ea7c600?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Experience the diverse wildlife and beautiful landscapes."
        },
        {
            title: "Zanzibar",
            imageUrl: "https://images.unsplash.com/photo-1707296825230-3f106b3ac450?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Relax on the pristine beaches and explore the rich culture."
        },
        {
            title: "Kilimanjaro",
            imageUrl: "https://plus.unsplash.com/premium_photo-1664304370557-233bccc0ac85?q=80&w=2358&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Challenge yourself with a trek to the summit of Africa's highest peak."
        },
        {
            title: "Selous",
            imageUrl: "https://images.unsplash.com/photo-1725953118719-576db5215ef6?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Discover the largest game reserve in Africa with its abundant wildlife."
        },
        {
            title: "Ruaha",
            imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Explore the rugged wilderness and see the diverse wildlife."
        },
        {
            title: "Mikumi",
            imageUrl: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Enjoy the scenic beauty and wildlife of Mikumi National Park."
        },
        {
            title: "Arusha",
            imageUrl: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Discover the gateway to the northern safari circuit."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationDirection, setAnimationDirection] = useState<'left' | 'right'>('right');

 
    const handleNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setAnimationDirection('right');
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 4) % cardData.length);
                setIsAnimating(false);
            }, 500); // Same as transition duration
        }
    };

    const handlePrev = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setAnimationDirection('left');
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex - 4 + cardData.length) % cardData.length);
                setIsAnimating(false);
            }, 500); // Same as transition duration
        }
    };

    const visibleCards = [
        ...cardData.slice(currentIndex, currentIndex + 4),
        ...cardData.slice(0, Math.max(0, (currentIndex + 4) - cardData.length)),
    ];

    return (
        <div className="relative my-8">
            <h2 className="text-2xl font-bold mb-4 ml-20">You may also like</h2>
            <div className="flex justify-center items-center relative">
                <button onClick={handlePrev} className="absolute left-0 w-16 h-16  p-2 bg-gray-200 text-black rounded-full m-8 hover:bg-gray-400 z-10 font-black">
                    &lt;
                </button>
                <div className="relative w-full flex overflow-hidden justify-center space-x-4 p-4">
                    {visibleCards.map((item, index) => (
                        <PackageOffer
                            key={index}
                            item={item}
                            animationClass={
                                isAnimating
                                    ? animationDirection === 'right'
                                        ? 'translate-x-full opacity-0'
                                        : '-translate-x-full opacity-0'
                                    : 'translate-x-0 opacity-100'
                            }
                        />
                    ))}
                </div>
                <button onClick={handleNext} className="absolute right-0 p-2 w-16 h-16  bg-gray-200 text-black rounded-full m-8 hover:bg-gray-400 z-10 font-black">
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default TravelCardList;
