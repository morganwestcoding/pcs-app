'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Nail Tech',
    icon: TbBeach,
    description: 'Nail technician services',
  },
  {
    label: 'Barber',
    icon: GiWindmill,
    description: 'Barber services',
  },
  {
    label: 'Hair dresser',
    icon: MdOutlineVilla,
    description: 'Hair dresser services'
  },
  {
    label: 'Masseuse',
    icon: TbMountain,
    description: 'Massueuse Services'
  },
  {
    label: 'Eye brows',
    icon: TbPool,
    description: 'Eye brow services'
  },
  {
    label: 'Dermatoligist',
    icon: GiIsland,
    description: 'Dermatologist services'
  },
  {
    label: 'Personal trainer',
    icon: GiBoatFishing,
    description: 'Personal trainer servies'
  },
  {
    label: 'Flexologist',
    icon: FaSkiing,
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
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
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
  );
}
 
export default Categories;