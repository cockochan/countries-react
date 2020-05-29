import React from 'react'
import Allcountries from './countriesAll.json'

const Select =function() {
    return(
        <select className='select col-4' >
        {Allcountries.map((country) => <option className ="option" key={country.name} value={country.name}>{country.name}</option>)}
        </select>
    )

}
export default Select