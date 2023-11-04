'use client';

import { BiNews } from 'react-icons/bi';

const StaticSearch = () => {
    return (
        <div className="relative flex items-center justify-center w-16 h-16" style={{ transform: 'translateX(5px)' }} >
            {/* White Circle / Search Bar Background */}
            <div 
                className="absolute top-1/2 transform -translate-y-1/2 translate-x-7 h-12 rounded-full bg-white transition-all duration-300 z-10"
                style={{ right: 'calc(50% + 0.5rem - 4px)' }}
            />
            
            {/* White Circle Border */}
            <div 
                className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-full bg-white w-12 h-12 flex items-center justify-center z-10 border-[2px] border-neutral-200" 
                style={{ left: '50%' }}
            >
                {/* Black Circle with Search Icon - Remains stationary */}
                <div 
                    className="rounded-full bg-white w-9 h-9 flex items-center justify-center border-[4px] border-blue-500" 
                >
                    <BiNews className="text-black" />
                </div>
            </div>
        </div>
    );
};

export default StaticSearch;

