import React from 'react';

const SingleCity = ({ cityName, changeLocation }) => {
    const removeCity = (city) => {
        // console.log(localStorage.getItem('city'));
        const cityList = JSON.parse(localStorage.getItem('city')) || [];  
        const idx = cityList.indexOf(city);

        if (idx > -1) {
            cityList.splice(idx, 1);
        }
        console.log(cityList);
        localStorage.setItem('city', JSON.stringify(cityList));
      };

    const showCityData = (city) => {
        changeLocation(city);
    }


    return (
        <button className='cityCard mt-4 px-4 d-flex align-items-center justify-content-between border-0' onClick={showCityData.bind(this, cityName)}>
            <span>{cityName}</span>
            <button className='btn bg-danger' onClick={removeCity.bind(this, cityName)}><i class="bi bi-trash text-white"></i></button>
        </button>   
    );
}

export default SingleCity;