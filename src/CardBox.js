import React from 'react'
import Card from'./Card'
const CardBox =(props)=>{
    return(
      
    <div>
        {props.allcountries.map(country=>{
   console.log(country)

        return(
        <Card country={country}/>
        )
        }  )}
     </div>
    )
}
export default CardBox