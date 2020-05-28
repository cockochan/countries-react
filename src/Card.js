import React from 'react'
const Card = (props)=>{

return(<div className='card col-4'>
    
    <img className = 'flag row' src ={props.country.flag}></img>
    <h1 className ='countryname'>{props.country.name}</h1>
    <p className ='population'><strong>Population</strong>{props.country.population}</p>
    <p className ='region'><strong>Region</strong>: {props.country.region}</p>
    <p className ='capital'><strong>Capital</strong>{props.country.capital}</p>
    </div>)
};
export default Card