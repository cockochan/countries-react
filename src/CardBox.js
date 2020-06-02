import React from 'react'
import Card from'./Card'
const CardBox =(props)=>{
    return(
      
    <div className='cardBox row'>
        {props.allcountries.map(country=>{

        return(
        <Card country={country}/>
        )
        }  )}
     </div>
    )
}
export default CardBox