import React, { useState, useEffect } from 'react';
import '../assets/css/RightSection.css';
import CityIcon from '../assets/images/city.png';
import CityList from './CityList';

function RightSection({ cityName, changeLocation }) {

  var [city, getCity] = useState([]);
  // var listItems;

  const addCity = () => {
    if(city.includes(cityName) === false) {
      city.push(cityName);
      localStorage.setItem('city', JSON.stringify(city));
    } else {
      alert('City already added');
    }
    
    // list();
    // console.log(localStorage.getItem('city'));
  };

  useEffect(() => {
    const cityList = JSON.parse(localStorage.getItem('city')) || [];  
    getCity(cityList);
  }, []); 

  return (
    <div className='rightSec d-flex flex-column align-items-center w-25 mx-4 my-3 px-3 py-5'>
      <div className='addCityCard d-flex align-items-center justify-content-around'>
        <img src={CityIcon} alt='City View Icon'/>
        <button className='btn' onClick={addCity}><i className='bi bi-plus me-1'></i>Add City</button>
      </div>
      <CityList city={ city } changeLocation={ changeLocation }/>
    </div>
  );
}

export default RightSection;