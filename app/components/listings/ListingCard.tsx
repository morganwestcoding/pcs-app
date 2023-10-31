'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { californiaCities } from '@/app/components/inputs/CountrySelect';
import { SafeListing, SafeUser } from "@/app/types";
import React, { useState } from 'react';
import ServiceSlider from "../inputs/ServiceSlider";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import HeartButton from "../HeartButton";
import Button from "../Button";
import { CustomArrowProps } from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';



interface ListingCardProps {
  data: SafeListing;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
};

const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <div
    className="slick-arrow slick-next"
    onClick={(e) => {
      e.stopPropagation();
      if (onClick) onClick(e);
    }}
    style={{
      position: "absolute",
      top: "50%",
      right: "-15px",
      transform: "translateY(-50%)",
      backgroundColor: "black", // Changed to black
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      zIndex: 1,
    }}
  >

  </div>
);

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <div
    className="slick-arrow slick-prev"
    onClick={(e) => {
      e.stopPropagation();
      if (onClick) onClick(e);
    }}
    style={{
      position: "absolute",
      top: "50%",
      left: "-15px",
      transform: "translateY(-50%)",
      backgroundColor: "black", // Changed to black
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      zIndex: 1,
    }}
  >
  </div>
);




const ListingCard: React.FC<ListingCardProps> = ({
  data,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}) => {
  console.log("Listing Data:", data); 
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

  const [sliderIndex, setSliderIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
    afterChange: (current: number) => setSliderIndex(current),
  };



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
        <div className="service-section" style={{ position: "relative", backgroundColor: "white" }}>
          {data.services && data.services.length > 0 ? (
            <Slider key={data.id} {...settings}>
              {data.services.map((service) => (
                <div key={service.id} className="p-2">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full mr-2"></div>
                    <div>{service.name}: ${service.price}</div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <p>No services available</p>
          )}
        </div>
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
  );
}

export default ListingCard;
