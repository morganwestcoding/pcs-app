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
                className={`absolute top-1/2 right-1/5 transform -translate-y-1/2 ${isExtended ? 'w-64' : 'w-12'} h-12 rounded-full bg-white transition-all duration-300 z-10 border-2 border-black`}
            >
                {isExtended && (
                    <input type="text" placeholder="Search..." className="bg-transparent w-full h-full px-4" />
                )}
            </div>

            {/* Black Circle with Search Icon - Moves to Right of Extended White Circle */}
            <div 
                className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-full bg-red w-9 h-9 flex items-center justify-center cursor-pointer z-20 border-2 border-blue-500 transition-all duration-300" 
                style={{ left: isExtended ? 'calc(100% - -7px + 64px)' : '50%' }}
                onClick={toggleSearchBar}
            >
                <BiSearch className="text-white" />
            </div>
        </div>
    );
};

export default Search;
