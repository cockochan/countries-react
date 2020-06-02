import React, { useState } from 'react';

import './App.css';
import Allcountries from './countriesAll.json'
import CardBox from'./CardBox'
import Header from './Header'



function App() {
  const [searchValue, setSearchValue] = useState('none')
  function handleChange (event){
 
    setSearchValue(event.target.value)
  }
  console.log(searchValue)
  const filCountries = Allcountries.filter(cou=>{ cou.name.toLowerCase().inculdes(searchValue.toLowerCase())})
  return (
    <div >

      <Header handleChange={handleChange}/>
<CardBox allcountries={filCountries}/>
    </div>
  );
}

export default App;
