import React from 'react';

import './App.css';
import Allcountries from './countriesAll.json'
import CardBox from'./CardBox'
import Header from './Header'
function App() {

  return (
    <div >

      <Header />
<CardBox allcountries={Allcountries}/>
    </div>
  );
}

export default App;
