import Image from "next/image";
import { californiaCities } from '@/app/components/inputs/CountrySelect';
import { SafeUser } from "@/app/types";
import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser
}) => {
  const city = californiaCities.find(city => city.value === locationValue);

  const cityName = city?.label || "Unknown City";
  const cityRegion = city?.region || "Unknown Region";


  const stateName = "California";


  return ( 
    <>
      <Heading
        title={title}
        subtitle={`${cityName}, ${stateName}`}
      />
      <div className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <Image
          src={imageSrc}
          fill
          className="object-cover w-full"
          alt="Image"
        />
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          <HeartButton 
            listingId={id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </>
   );
}
 
export default ListingHead;
