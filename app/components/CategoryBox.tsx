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
      style={style}  // Add this line to apply the style object to your div
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        p-4
        ease-in-out duration-300
        cursor-pointer
        ${selected ? 'p-4 bg-white rounded-xl border-3 transform -translate-y-2 drop-shadow-lg ' : ''}
      hover:text-black
      `}
    >
      <Icon size={30} className={`${selected ? 'text-black' : 'text-gray-500 hover:text-black'}`} />
      <div className="pt-2 font-medium text-sm">
        {label}
      </div>
    </div>
  );
}
 
export default CategoryBox;
