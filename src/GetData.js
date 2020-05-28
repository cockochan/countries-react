import React, { useEffect } from 'react';



let data;

useEffect(() => {
  const url = "https://restcountries.eu/rest/v2/all"
  const response =  fetch(url)

  const data =  response.json()
  console.log(data)
  return data
}
export default data;