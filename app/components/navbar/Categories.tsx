'use client';
import React, { useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { ImScissors } from 'react-icons/im';
import { TbMassage, TbEyeClosed } from 'react-icons/tb';
import { 
  GiFingernail, 
} from 'react-icons/gi';
import { BiRun } from 'react-icons/bi';
import { PiScissorsLight } from 'react-icons/pi';
import { IoIosFitness } from 'react-icons/io';
import { MdFaceRetouchingNatural } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';
import { Switch } from '@mui/base/Switch';

export const categories = [
  {
    label: 'Nails',
    icon: GiFingernail,
    backgroundColor:'#c49a6c',
    description: 'Nail technician services',
  },
  {
    label: 'Barber',
    icon: ImScissors,
    backgroundColor:'#b08b61',
    description: 'Barber services',
  },
  {
    label: 'Salon',
    icon: PiScissorsLight,
    backgroundColor:'#9d7b56',
    description: 'Hair dresser services'
  },
  {
    label: 'Massage',
    icon: TbMassage,
    backgroundColor:'#896c4c',
    description: 'Massueuse Services'
  },
  {
    label: 'Eyebrows',
    icon: TbEyeClosed,
    backgroundColor:'#765c41',
    description: 'Eye brow services'
  },
  {
    label: 'Facial',
    icon: MdFaceRetouchingNatural,
    backgroundColor:'#624d36',
    description: 'Dermatologist services'
  },
  {
    label: 'Trainer',
    icon: BiRun,
    backgroundColor:'#4e3e2b',
    description: 'Personal trainer servies'
  },
  {
    label: 'Flex',
    icon: IoIosFitness,
    backgroundColor:'#3b2e20',
    description: 'Flexologist services'
  }

]

const Categories = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  const containerStyle = selectedColor 
    ? {
        borderBottom: `6px solid ${selectedColor}`,
        marginBottom: '-6px',
        transition: 'border-bottom-color 0.3s ease-in-out'
      }
    : {
        borderBottom: '1px solid #E5E7EB',  // border-neutral-200 in Tailwind
        marginBottom: '-1px',
        transition: 'border-bottom-color 0.3s ease-in-out'
};


  return (
    <>
    <div className='bg-white' style={containerStyle}>
    <Container>
      <div className=" flex flex-row justify-center ml-8 ">
        {categories.map((item) => (
           
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            backgroundColor={item.backgroundColor}
            onSelectColor={setSelectedColor}
            selected={category === item.label}
            
          />
         
        ))}
      </div>     
    </Container>
    </div>

 <div className="mt-4 bg-white switch-container">
 <label className="switch">
    <input type="checkbox" />
    <span className="slider round"></span>
  </label>
</div>
      </>
  );
}
 
export default Categories;