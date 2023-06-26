

// const  url =  'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
// const options = {
//   method: 'GET',
//   params: {model: 'corolla'},
  
// };

// try {
// 	const response = await fetch(url,options);
//     const result = await response.text()
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


export const fetchCars = async () => {

    const headers = {
        'X-RapidAPI-Key': 'fd2efa2838msh8b5d1731327a878p11c1a4jsn9f13c192049f',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    
      const  res =  await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers,
      })

      const result = await res.json()
}