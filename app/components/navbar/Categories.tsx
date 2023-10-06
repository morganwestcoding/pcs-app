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
    ? { borderTop: `6px solid ${selectedColor}`, marginTop: '-6px' }
    : { borderTop: '6px solid transparent', marginTop: '-6px' };


  return (
    <div className='bg-white' style={containerStyle}>
    <Container>
      <div className="flex flex-row items-stretch gap-20 ">
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
  );
}
 
export default Categories;