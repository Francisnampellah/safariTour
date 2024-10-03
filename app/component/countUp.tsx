import { useState, useEffect, useRef } from "react";



export default function CountUpGrid({ data }: { data: any }) {




    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState<number[]>(new Array(data.length).fill(0)); // Array to hold counts
    const gridRef = useRef<HTMLDivElement | null>(null);



    // Custom hook to count up
    const useCountUp = (start: number, end: number, duration: number) => {
        const [count, setCount] = useState(start);

        useEffect(() => {
            let startTimestamp: number | null = null;
            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                setCount(Math.floor(progress * (end - start) + start));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }, [start, end, duration]);

        return count;
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once visible
                    const newCounts = data.map(item => item.count); // Prepare the counts
                    setCounts(newCounts); // Update counts
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the grid is visible
        );

        if (gridRef.current) {
            observer.observe(gridRef.current);
        }

        return () => observer.disconnect();
    }, [data]);

    return (
        <div ref={gridRef} className="grid grid-cols-2 gap-2">
            {data.map((item: any, index: any) => {
                // Use countUp only when isVisible is true
                const count = isVisible ? useCountUp(0, counts[index], 1000) : 0;

                return (
                    <div key={item.id} className="flex flex-col items-center rounded-lg p-4 m-2">
                        <span className="text-3xl md:text-4xl text-blue-600 font-extrabold">
                            {count}
                        </span>
                        <span className="text-lg md:text-xl text-gray-400">{item.description}</span>
                    </div>
                );
            })}
        </div>
    );
}
