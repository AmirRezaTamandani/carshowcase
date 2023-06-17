export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '40a2854702msha57982b948ddfccp19b26ajsned500cf54d70',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}

