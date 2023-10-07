'use client';

import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';

const Search = () => {
    const [isExtended, setIsExtended] = useState(false);

    const toggleSearchBar = () => {
        setIsExtended(!isExtended);
    };

    return (
        <div className="relative flex items-center justify-center w-16 h-16">
            
            {/* White Circle / Search Bar Background */}
            <div 
                className={`absolute top-1/2 transform -translate-y-1/2 translate-x-7 h-12 rounded-full bg-white transition-all duration-300 z-10 border-[2px] border-neutral-200 ${isExtended ? 'w-64' : 'w-12'}`}
                style={{ right: isExtended ? 'calc(50% + 4.5rem - 68px)' : 'calc(50% + 0.5rem - 4px)' }}  // Adjusted positioning here
            >
                {isExtended && (
                    <input type="text" placeholder="Search..." className="bg-transparent w-full h-full px-4" />
                )}
            </div>

            {/* Black Circle with Search Icon - Remains stationary */}
            <div 
                className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-full bg-white w-9 h-9 flex items-center justify-center cursor-pointer z-20 border-[3px] border-blue-500" 
                style={{ left: '50%' }}
                onClick={toggleSearchBar}
            >
                <BiSearch className="text-black" />
            </div>
        </div>
    );
};

export default Search;



