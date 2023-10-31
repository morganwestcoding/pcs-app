'use client';

// ServiceInput.tsx
// ServiceInput.tsx
import React from 'react';
import { UseFormRegister, FieldValues, useFieldArray, Control } from "react-hook-form";

interface Category {
  label: string;
  backgroundColor: string;
}

interface ServiceInputProps {
  addServiceEntry: () => void;
  isLoading: boolean;
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues, any>;
  errors: Record<string, any>;
  categories: Category[];
}

const ServiceInput: React.FC<ServiceInputProps> = ({ 
  addServiceEntry, 
  isLoading, 
  register, 
  control,
  errors, 
  categories,
}) => {
  const { fields, append } = useFieldArray({
    control,
    name: "services"
  });

  const handleAddServiceEntry = () => {
    append({ name: '', price: '', category: '' });
    addServiceEntry();
  }

  return (
    <div className="flex flex-col gap-8">
      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-4">
          {/* Service Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor={`services[${index}].name`}>Service {index + 1}</label>
            <input
              id={`services[${index}].name`}
              type="text"
              disabled={isLoading}
              className={`border rounded-md p-2 ${errors.services?.[index]?.name ? 'border-red-500' : 'border-gray-300'}`}
              {...register(`services[${index}].name`, { required: 'This field is required' })}
            />
            {errors.services?.[index]?.name && <p className="text-red-500 text-sm">{errors.services[index].name.message}</p>}
          </div>

          {/* Service Price */}
          <div className="flex flex-col gap-2">
            <label htmlFor={`services[${index}].price`}>Price</label>
            <input
              id={`services[${index}].price`}
              type="number"
              disabled={isLoading}
              className={`border rounded-md p-2 ${errors.services?.[index]?.price ? 'border-red-500' : 'border-gray-300'}`}
              {...register(`services[${index}].price`, { required: 'This field is required' })}
            />
            {errors.services?.[index]?.price && <p className="text-red-500 text-sm">{errors.services[index].price.message}</p>}
          </div>

          {/* Service Category */}
          <div className="flex flex-col gap-2">
            <label htmlFor={`services[${index}].category`}>Select Category</label>
            <select 
              {...register(`services[${index}].category`, { required: 'This field is required' })}
              className={`border rounded-md p-2 ${errors.services?.[index]?.category ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="" disabled>Select Category</option>
              {categories.map((category) => (
                <option value={category.label} key={category.label}>
                    {category.label}
                </option>
              ))}
            </select>
            {errors.services?.[index]?.category && <p className="text-red-500 text-sm">{errors.services[index].category.message}</p>}
          </div>
        </div>
      ))}

      {/* Add More Button */}
      <button
        type="button"
        onClick={handleAddServiceEntry} 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-xl"
      >
        Add More
      </button>
    </div>
  );
}

export default ServiceInput;


