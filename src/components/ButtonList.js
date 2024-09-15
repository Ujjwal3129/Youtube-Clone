import React, { useRef } from 'react';
import Button from './Button';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';  // Icons for scrolling

function ButtonList() {
    const List = [
        "All", "Music", "Tamil", "News", "Trailers", "Cricket", "Comedy", "Arijit Singh",
        "WebSeries", "T-Series", "Music", "Tamil", "News", "Trailers", "Cricket", "Comedy", "Arijit Singh", "WebSeries", "T-Series"
    ];

    // Ref for the button container (for scrolling)
    const scrollContainerRef = useRef(null);

    // Function to scroll right
    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    // Function to scroll left
    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    return (
        <div className='flex items-center m-2'>
            {/* Scroll left button */}
            <button onClick={scrollLeft} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                {/* <FaChevronLeft /> */}
            </button>

            {/* Scrollable container for buttons */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide scroll-smooth m-2 space-x-2"
                style={{ maxWidth: '80vw' }} // Adjust the width to your needs
            >
                {List.map((btname, index) => (
                    <Button key={index} name={btname} />
                ))}
            </div>

            {/* Scroll right button */}
            <button onClick={scrollRight} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                {/* <FaChevronRight /> */}
            </button>
        </div>
    );
}

export default ButtonList;
