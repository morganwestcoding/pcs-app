'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { californiaCities } from '@/app/components/inputs/CountrySelect';
import { SafeListing, SafeUser } from "@/app/types";
import { ServiceSlider } from "../inputs/ServiceSlider";

import HeartButton from "../HeartButton";
import Button from "../Button";

interface ListingCardProps {
  data: SafeListing;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
};

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}) => {
  console.log("Services in ListingCard:", data.services);  
  const router = useRouter();
  const city = californiaCities.find(city => city.value === data.locationValue);

  const cityName = city?.label || "Unknown City";
  const cityRegion = city?.region || "Unknown Region";

  const stateName = "California";

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (disabled) {
      return;
    }

    onAction?.(actionId)
  }, [disabled, onAction, actionId]);

  return (
    <div 
      onClick={() => router.push(`/listings/${data.id}`)} 
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div 
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={data.imageSrc}
            alt="Listing"
          />
          
          <div className="
            absolute
            top-3
            right-3
          ">
            <HeartButton 
              listingId={data.id} 
              currentUser={currentUser}
            />
          </div>
        </div>
        <div className="mt-2 text-lg font-semibold">
          {data.title}
        </div>
        <div className="font-light text-neutral-500">
          {`${cityName}, ${stateName}`}
        </div>
        <div className="text-sm font-light text-neutral-500">
          <ServiceSlider services={data.services || []} />
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel} 
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
  );
}

export default ListingCard;
