import React from 'react';
import '../assets/css/MainComponent.css';
import {countries} from 'country-data';
import Skyline from '../assets/images/skyline.webp';
import WeatherIcon from './WeatherIcon';

 
function MainComponent({data}) {
// const percentage = 66;
    const date = new Date((data.dt) * 1000);
    const time =  date.toLocaleTimeString("en-IN");

    // console.log(newDate);
   
    const country = data.sys ? `${data.sys.country}` : "IN";  

    const weatherCondition = data.weather ? data.weather[0].main : null;

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
                    <span className='small'>Updated as of: <br/>{time} (+05:30 IST)</span>
                </div>
                <WeatherIcon icon={data.weather[0] ? data.weather[0].id: 0}/>
                {/* <img src={weatherIcon} alt='Weather Icon' className='mainIcon mx-4 align-self-center'/> */}
            </div>
            <img src={Skyline} alt='Skyline Background' className='skyline' />
        </div>
    );
}

export default MainComponent;