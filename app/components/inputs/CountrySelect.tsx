'use client';

import Select from 'react-select'

export type CitySelectValue = {
  label: string;
  value: string;
  flag: string;
  region: string;
}

interface CitySelectProps {
  value?: CitySelectValue;
  onChange: (value: CitySelectValue) => void;
}

export const californiaCities = [
  { 
    label: "Los Angeles", 
    value: "Los Angeles",
    flag: "🌴",  // example flag
    region: "Southern California"  // example region
  },
  // ... other cities
];

const CitySelect: React.FC<CitySelectProps> = ({
  value,
  onChange
}) => {
  return ( 
    <div>
      <Select
        placeholder="Any City in California"
        isClearable
        options={californiaCities}
        value={value}
        onChange={(value) => onChange(value as CitySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1">
                {option.region}
              </span>
            </div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg'
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe4e6'
          }
        })}
      />
    </div>
   );
}

export default CitySelect;
