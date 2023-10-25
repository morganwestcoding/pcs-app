'use client';

import React, { useState } from 'react';

type Service = {
  name: string;
  price: number;
};

interface ServiceSliderProps {
  services: Service[];
}

export const ServiceSlider: React.FC<ServiceSliderProps> = ({ services = [] }) => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const nextService = () => {
    setCurrentServiceIndex((prevIndex) => 
      prevIndex < services.length - 1 ? prevIndex + 1 : 0
    );
  }

  if (!services.length) return <div>No services available!</div>;

  return (
    <div onClick={nextService}>
      {services[currentServiceIndex]?.name ?? 'N/A'}: 
      ${services[currentServiceIndex]?.price ?? '0'}
    </div>
  );
};

export default ServiceSlider;
