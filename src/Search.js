import React from 'react';

const Search =(props) =>{
  

      return ( <input className='search col-4' type='text' placeholder ="search"  onChange ={props.handleChange}/>)
    }
export default Search

