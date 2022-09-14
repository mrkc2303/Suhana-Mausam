import React from 'react';
import '../assets/css/MainComponent.css';
import {countries} from 'country-data';
import Skyline from '../assets/images/skyline.webp';

import Drizzle from '../assets/weather-icons-master/design/fill/drizzle.svg';
import Thunderstorm from '../assets/weather-icons-master/design/fill/thunderstorms.svg';
import Rain from '../assets/weather-icons-master/design/fill/rain.svg';
import Mist from '../assets/weather-icons-master/design/fill/mist.svg';
import Clear from '../assets/weather-icons-master/design/fill/clear-day.svg';
 
function MainComponent({data}) {
// const percentage = 66;
    const date = new Date(data ? data.dt+data.timezone * 1000 : 0);
    const time =  date.toLocaleTimeString("en-US");
   
    const country = data.sys ? `${data.sys.country}` : "IN";  

    const weatherCondition = data.weather ? data.weather[0].main : null;

    var weatherIcon;
    if(weatherCondition === "Drizzle") {
        weatherIcon = Drizzle;
    } else if(weatherCondition === "Thunderstorm") {
        weatherIcon = Thunderstorm;
    } else if(weatherCondition === "Rain") {
        weatherIcon = Rain;
    } else if(weatherCondition === "Mist") {
        weatherIcon = Mist;
    } else {
        weatherIcon = Clear;
    }

    return (
        <div className='tempDiv d-flex flex-row px-5 py-3 justify-content-between'>
            <div className='d-flex flex-row'>
                <div>
                    <h2 className='text-start'>{data.name}</h2>
                    <h4 className='text-secondary text-start'>{countries[country].name}</h4>
                    <div className='d-flex align-items-start'>
                        <div>
                            <span className='temp'>{data.main ? data.main.temp : null}</span>
                            <h4 className='text-start pr-4'>{weatherCondition}</h4>
                        </div>
                    </div>
                    {/* <span className='small'>Updated as of: Friday, September 9, 2022 6:51:35 PM (+05:30)</span> */}
                    <span className='small'>Updated as of: <br/>{time}</span>
                </div>
                <img src={weatherIcon} alt='Weather Icon' className='mainIcon mx-4 align-self-center'/>
            </div>
            <img src={Skyline} alt='Skyline Background' className='skyline' />
        </div>
    );
}

export default MainComponent;