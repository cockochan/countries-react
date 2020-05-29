import React from 'react'
import Search from'./Search'
import Select from './Select'


const Header = ()=>{
    return(
<div className = 'header'>
    <div className='headerTop row'>
    <h1 className = 'title col-6'> Where in the world?</h1>
    <div className ='moonHolder row'>
  
    <h2 className='modeSelector '>Dark mode</h2>
    </div>
    </div>
    <div className ='subHeader row'>
        <Search />
        <Select />
    </div>
</div>
    )
}
export default Header