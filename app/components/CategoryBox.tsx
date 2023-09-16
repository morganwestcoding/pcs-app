'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: IconType,
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
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

  return ( 
    <div
    onClick={handleClick}
    className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        p-2
        ease-in-out duration-300
        cursor-pointer
        ${selected ? 'bg-black rounded-b-full transform -translate-y-7 drop-shadow-lg w-24 ' : ''}
      hover:text-black
      `}
      >
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        p-2
        ease-in-out duration-300
        cursor-pointer
        ${selected ? 'bg-white rounded-full p-2 border-3 transform -translate-y-3 drop-shadow-lg ' : ''}
      hover:text-black
      `}
    >
      <Icon size={30} className={`${selected ? 'text-black' : 'text-gray-500 hover:text-black'}`} />
      <div className="font-medium text-sm">
        {/*label*/}
      </div>
    </div>
    </div>
   );
}
 
export default CategoryBox;