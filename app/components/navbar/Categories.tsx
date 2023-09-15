'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { ImScissors } from 'react-icons/im';
import { TbMassage, TbEyeClosed } from 'react-icons/tb';
import { 
  GiFingernail, 
} from 'react-icons/gi';
import {GiMoneyStack} from 'react-icons/gi';
import { BiRun } from 'react-icons/bi';
import { PiScissorsLight } from 'react-icons/pi';
import { IoIosFitness } from 'react-icons/io';
import { MdFaceRetouchingNatural } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Nail Tech',
    icon: GiFingernail,
    description: 'Nail technician services',
  },
  {
    label: 'Barber',
    icon: ImScissors,
    description: 'Barber services',
  },
  {
    label: 'Hair dresser',
    icon: PiScissorsLight,
    description: 'Hair dresser services'
  },
  {
    label: 'Masseuse',
    icon: TbMassage,
    description: 'Massueuse Services'
  },
  {
    label: 'Eye brows',
    icon: TbEyeClosed,
    description: 'Eye brow services'
  },
  {
    label: 'Dermatoligist',
    icon: MdFaceRetouchingNatural,
    description: 'Dermatologist services'
  },
  {
    label: 'Personal trainer',
    icon: BiRun,
    description: 'Personal trainer servies'
  },
  {
    label: 'Flexologist',
    icon: IoIosFitness,
    description: 'Flexologist services'
  },
  {
    label: 'Price',
    icon: GiMoneyStack, // Replace with your actual money icon component
    description: 'Filter by price',
  }

]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <div className='bg-white pb-6'>
    <Container>
      <div className=" flex flex-row items-center justify-between">
        {categories.map((item) => (
           <div className={`${category === item.label ? 'bg-black p-2 drop-shadow-lg rounded-b-full' 
                  : 'p-2'}`}>
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
          </div>
        ))}
      </div>
    </Container>
    </div>
  );
}
 
export default Categories;