'use client';

import React, { ReactNode } from 'react';
import qs from 'query-string';
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: IconType,
  label: string;
  image?: string;
  backgroundColor?: string;  // Add this line to define the image prop
  selected?: boolean;
}

interface TabsContainerProps {
  children: ReactNode;
}

const TabsContainer: React.FC<TabsContainerProps> = ({ children }) => {
  return (
    <div className="tabs-container flex flex-row-reverse">
      {children}
    </div>
  );
};

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  image, // Add this line to destructure the image prop
  backgroundColor,  // Destructure the new prop
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    
    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label
    }

    if (params?.get('category') === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, { skipNull: true });

    router.push(url);
  }, [label, router, params]);

  // Define a style object to set the background image
  const style = {
    backgroundImage: image ? `url('${image}')` : undefined,
    backgroundColor: !image ? backgroundColor : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      onClick={handleClick}
      style={style} 
            className={`
        tab 
       ${selected ? 'active z-20' : 'z-10'} 
        transition-all 
        ease-in-out 
        duration-300
        cursor-pointer
        relative  // <-- added relative positioning
        mr-[-30px]  // <-- added negative margin to create overlap
      `}
    >
      {/*<Icon size={30} className={`${selected ? 'text-white' : 'text-white'}`} />*/}
      <div className="label">
        {label}
      </div>
    </div>
  );
}
 
export default CategoryBox;
