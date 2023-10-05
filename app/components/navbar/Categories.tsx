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
    backgroundColor:'#ff0000',
    description: 'Nail technician services',
  },
  {
    label: 'Barber',
    icon: ImScissors,
    backgroundColor:'#00b1ff',
    description: 'Barber services',
  },
  {
    label: 'Salon',
    icon: PiScissorsLight,
    backgroundColor:'#00cc16',
    description: 'Hair dresser services'
  },
  {
    label: 'Massage',
    icon: TbMassage,
    backgroundColor:'#1b00ff',
    description: 'Massueuse Services'
  },
  {
    label: 'Eyebrows',
    icon: TbEyeClosed,
    backgroundColor:'#5800e6',
    description: 'Eye brow services'
  },
  {
    label: 'Facial',
    icon: MdFaceRetouchingNatural,
    backgroundColor:'#e67900',
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
      <div className="flex flex-row items-stretch gap-20">
        {categories.map((item) => (
           
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            image={item.image}
            backgroundColor={item.backgroundColor}
            selected={category === item.label}
          />
         
        ))}
      </div>
    </Container>
    </div>
  );
}
 
export default Categories;