import React from 'react';
import SingleCity from './SingleCity';

const CityList = ({ city, changeLocation }) => {
    return(
        <>
            {city.map(name => <SingleCity cityName = {name} changeLocation={ changeLocation } />)}
        </>
    );
}

export default CityList;