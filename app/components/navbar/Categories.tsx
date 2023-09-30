'use client';
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
    image:'/images/nails.jpg',
    description: 'Nail technician services',
  },
  {
    label: 'Barber',
    icon: ImScissors,
    image:'/images/nails.jpg',
    description: 'Barber services',
  },
  {
    label: 'Salon',
    icon: PiScissorsLight,
    image:'/images/nails.jpg',
    description: 'Hair dresser services'
  },
  {
    label: 'Massage',
    icon: TbMassage,
    image:'/images/nails.jpg',
    description: 'Massueuse Services'
  },
  {
    label: 'Eyebrows',
    icon: TbEyeClosed,
    image:'/images/nails.jpg',
    description: 'Eye brow services'
  },
  {
    label: 'Facial',
    icon: MdFaceRetouchingNatural,
    image:'/images/nails.jpg',
    description: 'Dermatologist services'
  },
  {
    label: 'Trainer',
    icon: BiRun,
    image:'/images/nails.jpg',
    description: 'Personal trainer servies'
  },
  {
    label: 'Flex',
    icon: IoIosFitness,
    image:'/images/nails.jpg',
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
    <div className='bg-white'>
    <Container>
      <div className="flex flex-row items-stretch justify-between gap-0">
        {categories.map((item) => (
           
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            image={item.image}
            selected={category === item.label}
          />
         
        ))}
      </div>
    </Container>
    </div>
  );
}
 
export default Categories;