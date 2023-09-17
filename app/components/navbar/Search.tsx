'use client';

import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';

const Search = () => {
    const [isExtended, setIsExtended] = useState(false);

    const toggleSearchBar = () => {
        setIsExtended(!isExtended);
    };

    return (
        <div className="relative flex items-center justify-center border-2 border-black w-16 h-16">
            {/* White Circle / Search Bar Background */}
            <div 
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-300 z-10 border-2 border-black ${isExtended ? 'w-64 h-12' : 'w-12 h-12'}`}
            >
                {isExtended && (
                    <input type="text" placeholder="Search..." className="bg-transparent w-full h-full px-4" />
                )}
            </div>

            {/* Black Circle with Search Icon */}
            <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-black w-9 h-9 flex items-center justify-center cursor-pointer z-20 border-2 border-blue-500" 
                onClick={toggleSearchBar}
            >
                <BiSearch className="text-white" />
            </div>
        </div>
    );
};

export default Search;
