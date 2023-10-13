'use client';

// ServiceInput.tsx
import React from 'react';
import { UseFormRegister } from "react-hook-form";

interface ServiceInputProps {
  serviceEntries: number;
  addServiceEntry: () => void;
  isLoading: boolean;
  register: UseFormRegister<any>;
  errors: Record<string, any>;
  categories: { label: string, backgroundColor: string }[];
}

const ServiceInput: React.FC<ServiceInputProps> = ({
  serviceEntries,
  addServiceEntry,
  isLoading,
  register,
  errors,
  categories
}) => {
  return (
    <div className="flex flex-col gap-8">
      {Array.from({ length: serviceEntries }).map((_, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor={`services[${index}].name`}>Service {index + 1}</label>
            <input
              id={`services[${index}].name`}
              type="text"
              disabled={isLoading}
              className={errors[`services[${index}].name`] ? 'border-red-500' : 'border-gray-300'}
              {...register(`services[${index}].name`)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor={`services[${index}].price`}>Price</label>
            <input
              id={`services[${index}].price`}
              type="number"
              disabled={isLoading}
              className={errors[`services[${index}].price`] ? 'border-red-500' : 'border-gray-300'}
              {...register(`services[${index}].price`)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor={`services.${index}.color`}>Select category color</label>
            <select 
              {...register(`services.${index}.color`)}
              className="border rounded-md p-2 w-full focus:border-blue-500"
            >
              <option value="" disabled>Select category color</option>
              {categories.map((category) => (
                <option value={category.backgroundColor} key={category.label}>
                    {category.label} - {category.backgroundColor}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
      <button
        onClick={addServiceEntry} 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add More
      </button>
    </div>
  );
}

export default ServiceInput;

