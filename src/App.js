import React, { useState } from 'react';

import './App.css';
import Allcountries from './countriesAll.json'
import CardBox from'./CardBox'
import Header from './Header'



function App() {
  const [searchValue, setSearchValue] = useState('')
  const [sendTorenderCountries, setSendTorenderCountries] = useState(Allcountries)
 
  function handleChange (event){
   
    
    setSearchValue(event.target.value)
   
    const filCountries= (Allcountries.filter((el)=>{ 
      console.log(el.name) 
      return(el.name.toLowerCase().includes(searchValue))||el.name.toLowerCase().includes(searchValue)}))

    setSendTorenderCountries(filCountries)
  }
  console.log(searchValue)
 
  // let filCountries = ()=> {return filCountries = Allcountries.filter(cou=>{ cou.name.toLowerCase().inculdes(searchValue.toLowerCase())})}
  return (
    <div >

      <Header handleChange={handleChange}/>
<CardBox allcountries={sendTorenderCountries}/>
    </div>
  );

  }
export default App;
