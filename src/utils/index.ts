export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; 
  const mileageFactor = 0.1; 
  const ageFactor = 0.05; 

  
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export async function fetchtCars() {
  const headers = {
    "x-rapidapi-key": "fd1922d403mshbe8264e792ccb12p1ca144jsnc7119d43fc05",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const url =
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=aventador";
  const response = await fetch(url, { headers });
  const data = await response.json();

  return data;
}
