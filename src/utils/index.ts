import { CarProps, FilterProps } from "@/types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {};

export async function fetchtCars(filters: FilterProps) {
  // console.log(filters);
  const { model, manufacturer, year, fuel, limit } = filters;

  const headers = {
    "x-rapidapi-key": "fd1922d403mshbe8264e792ccb12p1ca144jsnc7119d43fc05",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
  const response = await fetch(url, { headers: headers });
  const data = await response.json();

  return data;
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName
};
