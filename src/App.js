import React from 'react';

import './App.css';
import Allcountries from './countriesAll.json'
import CardBox from'./CardBox'

function App() {

  return (
    <div >
<CardBox allcountries={Allcountries}/>
    </div>
  );
}

export default App;
