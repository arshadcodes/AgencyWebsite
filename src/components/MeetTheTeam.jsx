import React, { useEffect, useRef } from 'react';

const team = [
    { name: "member 1", role: "Fullstack Dev", image: "member.png" },
    { name: "member 2", role: "Front-End Engineer", image: "member.png" },
    { name: "member 3", role: "Back-End Engineer", image: "member.png" },
    { name: "member 4", role: "UI/UX Specialist", image: "member.png" },
    { name: "member 5", role: "Front-End Engineer", image: "member.png" },
    { name: "member 6", role: "Back-End Engineer", image: "member.png" },
    { name: "member 7", role: "DevOps Engineer", image: "member.png" },
    { name: "member 8", role: "Front-End Engineer", image: "member.png" },
    { name: "member 9", role: "UI/US-Specialist", image: "member.png" },
    { name: "member 10", role: "Front-End Engineer", image: "member.png" },
    { name: "member 11", role: "Fullstack Engineer", image: "member.png" },
    { name: "member 12", role: "Back-End Engineer", image: "member.png" },

];

// Create a new array with duplicated members for looping effect
const extendedTeam = [...team, ...team];

export default function MeetTheTeam() {
    const scrollContainerRef = useRef(null);
    const scrollAmount = 300; // Adjust this value based on your item width

    // Function to scroll the container
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });

            // After scrolling, check if we need to loop back
            setTimeout(() => {
                const scrollPosition = scrollContainerRef.current.scrollLeft;
                const containerWidth = scrollContainerRef.current.scrollWidth;
                const visibleWidth = scrollContainerRef.current.clientWidth;

                // Check if scrolled to the end
                if (scrollPosition >= containerWidth - visibleWidth) {
                    scrollContainerRef.current.scrollLeft = 0; // Loop back to the start
                } else if (scrollPosition === 0) {
                    scrollContainerRef.current.scrollLeft = containerWidth / 2; // Jump to the middle
                }
            }, 300); // Match with scroll behavior time
        }
    };

    // Auto-scroll functionality
    useEffect(() => {
        const interval = setInterval(() => scroll('right'), 3000); // Auto-scroll to the right every 3 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className='flex flex-col items-center justify-center mt-36 dark:text-white mb-25'>
            <div className="flex items-center text-7xl">
                Meet The Team
            </div>

            <div className="flex items-center mt-9 w-full">
                {/* Left Scroll Button */}
                <button onClick={() => scroll('left')} className="bg-gray-300 text-gray-800 p-2 rounded-l-md hover:bg-gray-400">
                    &lt; {/* Left Arrow */}
                </button>

                {/* Scrollable Container */}
                <div 
                    ref={scrollContainerRef} 
                    className="overflow-x-auto w-full flex" 
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    <div className="flex space-x-4">
                        {extendedTeam.map((member, index) => (
                            <div 
                                key={index} 
                                className="text-center flex-none w-1/9 scroll-snap-start" // Set the width to show 9 members
                            >
                                <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full" />
                                <p className="mt-2 text-lg font-medium">{member.name}</p>
                                <p className="mt-2 text-sm text-gray-500 mb-20">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Scroll Button */}
                <button onClick={() => scroll('right')} className="bg-gray-300 text-gray-800 p-2 rounded-r-md hover:bg-gray-400">
                    &gt; {/* Right Arrow */}
                </button>
            </div>
        </div>
    );
}
