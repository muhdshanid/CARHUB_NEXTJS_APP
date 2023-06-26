

// const  url =  'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
// const options = {
//   method: 'GET',
//   params: {model: 'corolla'},

import { CarProps, FilterProps } from "@/types/types"

  
// };

// try {
// 	const response = await fetch(url,options);
//     const result = await response.text()
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


export const fetchCars = async (filters: FilterProps) => {
 
  const { manufacturer, year, model, limit, fuel } = filters;
    const headers = {
        'X-RapidAPI-Key': 'fd2efa2838msh8b5d1731327a878p11c1a4jsn9f13c192049f',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    
      const res = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
          headers: headers,
        }
      );
      const result = await res.json() 

      return result
}
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};


export const generateCarImage = (car: CarProps, angle?: string) => {

  const url = new URL("https://cdn.imagin.studio/getimage")

  const {make, year, model} = car

  url.searchParams.append("customer", 'hrjavascript-mastery')
  url.searchParams.append("make", make)
  url.searchParams.append("modelFamily", model.split(" ")[0])
  url.searchParams.append("zoomType", 'fullscreen')
  url.searchParams.append("modelYear", `${year}`)
  url.searchParams.append("angle", `${angle}`)

  return `${url}`
}