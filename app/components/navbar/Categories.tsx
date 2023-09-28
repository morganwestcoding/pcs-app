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
    label: 'Nails',
    icon: GiFingernail,
    description: 'Nail technician services',
  },
  {
    label: 'Barber',
    icon: ImScissors,
    description: 'Barber services',
  },
  {
    label: 'Salon',
    icon: PiScissorsLight,
    description: 'Hair dresser services'
  },
  {
    label: 'Massage',
    icon: TbMassage,
    description: 'Massueuse Services'
  },
  {
    label: 'Eyebrows',
    icon: TbEyeClosed,
    description: 'Eye brow services'
  },
  {
    label: 'Facial',
    icon: MdFaceRetouchingNatural,
    description: 'Dermatologist services'
  },
  {
    label: 'Trainer',
    icon: BiRun,
    description: 'Personal trainer servies'
  },
  {
    label: 'Flex',
    icon: IoIosFitness,
    description: 'Flexologist services'
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
    <div className='bg-white pt-4'>
    <Container>
      <div className=" flex flex-row items-center justify-between">
        {categories.map((item) => (
           
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
         
        ))}
      </div>
    </Container>
    </div>
  );
}
 
export default Categories;