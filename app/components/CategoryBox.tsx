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
  backgroundColor?: string;
  borderTopColor?: string;  // Add this line to define the image prop
  selected?: boolean;
  onSelectColor?: (color: string) => void;
  
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
  backgroundColor,
  borderTopColor,  // <-- Destructure this prop here
  onSelectColor,  // Destructure the new prop  // Destructure the new prop
  selected,
  
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label
    }

    if (params?.get('category') === label) {
      delete updatedQuery.category;

      // Clear the border color when tab is deselected
      if (onSelectColor) {
        onSelectColor('');
      }
    } else {
      // Set the border color when tab is selected
      if (onSelectColor) {
        if (label === 'Filter') {
          onSelectColor('transparent');  // Set border color to transparent for "Filter"
        } else {
          onSelectColor('black');
        }
      }
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, { skipNull: true });

    router.push(url);
}, [label, router, params, onSelectColor]);

  // Define a style object to set the background image
  const style = {
    backgroundImage: image ? `url('${image}')` : undefined,
    backgroundColor: label === 'Filter' 
      ? (selected ? 'white' : 'black') 
      : (selected ? 'black' : backgroundColor || 'transparent'),
    color: label === 'Filter' ? (selected ? 'black' : 'white') : 'white',
    border: 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const categoryClassName = label.toLowerCase();

  return (
    <div
      onClick={handleClick}
      style={style} 
      
            className={`
            tab round ${categoryClassName}
       ${selected ? 'drop-shadow-lg active' : ''}
        transition-all 
        ease-in-out 
        cursor-pointer
      `}
    >
      {/*<Icon size={30} className={`${selected ? 'text-white' : 'text-white'}`} />*/}
      <div className="label font-semibold text-white">
        {label}
      </div>
    </div>
  );
}
 
export default CategoryBox;
