import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface DayProps {
    title: string;
    dayNumber: number;
    description: string;
    accommodationLevel?: string; // Mark as optional
    accommodationName?: string; // Mark as optional
    accommodationType?: string; // Mark as optional
    accommodationLocation?: string; // Mark as optional
}

interface DayAccordionProps {
    day: DayProps;
    isOpen: boolean;
    onToggle: () => void;
}

const DayAccordion: React.FC<DayAccordionProps> = ({ day, isOpen, onToggle }) => {
    const [stars, setStars] = useState<number>(0);

    function getStarRating(str?: string): number | null {
        if (!str) return null; // Return null if str is undefined or empty
        const match = str.match(/(\d+)-Star/); // Regular expression to find the number followed by "-Star"
        return match ? parseInt(match[1], 10) : null; // Return the number or null if not found
    }

    useEffect(() => {
        const starCount = getStarRating(day.accommodationLevel);
        setStars(starCount || 0);
    }, [day.accommodationLevel]); // Update stars when accommodationLevel changes

    return (
        <div className="border-b border-gray-200 w-full">
            <button
                onClick={onToggle}
                className="w-full py-4 text-left focus:outline-none flex justify-between items-center"
            >
                <span className="text-lg font-semibold">  Day  {day.dayNumber} : {day.title}</span>
                <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-4 py-2 text-gray-600">{day.description}</div>

                {day.accommodationName && (
                    <div className='flex flex-col my-4 '>
                        <h1 className="text-lg font-semibold px-4 py-2">Accommodation</h1>
                        <div className="px-4 text-gray-600">Type : {day.accommodationType}</div>
                        <div className="px-4 text-black text-3xl"><span className='font-bold'> {day.accommodationName}
                        </span></div>
                        <div className='px-4 flex gap-4 items-center'>
                            <span>
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon
                                        key={index}
                                        icon={faStar}
                                        className={`w-5 h-5 ${index < stars ? "text-yellow-500" : "text-gray-300"}`} // Fill stars based on the rating
                                    />
                                ))}
                            </span>
                            <span>Location: <span className='font-black'> {day.accommodationLocation}</span></span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DayAccordion;
