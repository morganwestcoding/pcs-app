'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: IconType,
  label: string;
  image?: string;  // Add this line to define the image prop
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  image,  // Add this line to destructure the image prop
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
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      onClick={handleClick}
      style={style} 
            className={`
        tab 
        ${selected ? 'active' : ''} 
        transition-all 
        ease-in-out 
        duration-300
        cursor-pointer
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
