type City = {
  value: string;
  label: string;
  latlng: [number, number];
  region: string;
};

const cities: City[] = [
  { value: "LosAngeles", label: "Los Angeles", latlng: [34.0522, -118.2437], region: "California" },
  { value: "SanFrancisco", label: "San Francisco", latlng: [37.7749, -122.4194], region: "California" },
  // ... Add more cities as needed
];

const useCities = () => {
  const getAll = () => cities;

  const getByValue = (value: string) => {
    return cities.find((item) => item.value === value);
  }

  return {
    getAll,
    getByValue
  }
};

export default useCities;