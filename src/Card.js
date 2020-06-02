import React from 'react'
const Card = (props)=>{
const styles ={
    paddingLeft:"15px"
};
return(<div className='card col-3'>
    
    <img className = 'flag col-12' src ={props.country.flag} alt=""></img>
    <h1  style={styles} className ='countryname'>{props.country.name}</h1>
    <p  style={styles}  className ='population'><strong>Population</strong>: {props.country.population}</p>
    <p  style={styles}  className ='region'><strong>Region</strong>: {props.country.region}</p>
    <p  style={styles}  className ='capital'><strong>Capital</strong>: {props.country.capital}</p>
    </div>)
};
export default Card