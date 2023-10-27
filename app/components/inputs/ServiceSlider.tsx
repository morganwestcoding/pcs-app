'use client';

import React, { useState } from 'react';

type Service = {
  name: string;
  price: number;
  color?: string; // Assuming you might have a color field based on your form
};

interface ServiceSliderProps {
  services: Service[];
}

export const ServiceSlider: React.FC<ServiceSliderProps> = ({ services = [] }) => {
  console.log('Received Services:', services); 
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const nextService = () => {
    setCurrentServiceIndex((prevIndex) => 
      prevIndex < services.length - 1 ? prevIndex + 1 : 0
    );
  }

  if (!services.length) return <div>No services available!</div>;

  const currentService = services[currentServiceIndex];

  return (
    <div 
      className="service-slider-container" 
      style={{ backgroundColor: currentService.color || 'white' }}
      onClick={nextService}
    >
      <div className="service-slider-content">
        <h3 className="service-name">{currentService.name || 'N/A'}</h3>
        <p className="service-price">${currentService.price || '0'}</p>
      </div>
      <div className="service-slider-navigation">
        <button onClick={() => setCurrentServiceIndex(currentServiceIndex - 1)} disabled={currentServiceIndex === 0}>
          Previous
        </button>
        <button onClick={() => setCurrentServiceIndex(currentServiceIndex + 1)} disabled={currentServiceIndex === services.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ServiceSlider;
