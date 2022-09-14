import React from 'react';
import '../assets/css/RightSection.css';
import CityIcon from '../assets/images/city.png';

function RightSection() {
  return (
    <div className='rightSec d-flex justify-content-center w-25 mx-4 my-3 px-3 py-5'>
      <div className='addCityCard d-flex align-items-center justify-content-around'>
        <img src={CityIcon} alt='City View Icon'/>
        <button className='btn'><i className='bi bi-plus me-1'></i>Add City</button>
      </div>
    </div>
  );
}

export default RightSection;