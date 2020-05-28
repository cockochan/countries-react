import React from 'react';
import Card from './Card'
const data =[];
 let GetData = ()=> {return(
  fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(data =>{ return(
 <div className ='CardBox'>
     {data.map(
         country=>{
             <Card data={data}/>
         }
     )}
 </div>
)
}))}
export default GetData