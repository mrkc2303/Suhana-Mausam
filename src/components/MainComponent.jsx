import React from 'react';
import Drizzle from '../assets/weather-icons-master/design/fill/drizzle.svg';
import '../assets/css/MainComponent.css';
import {countries} from 'country-data';
import Skyline from '../assets/images/skyline.webp';
 
function MainComponent() {
// const percentage = 66;
  return (
    <div className='tempDiv d-flex flex-row px-5 py-3 justify-content-between'>
        <div className='d-flex flex-row'>
            <div>
                <h2 className='text-start'>Delhi</h2>
                <h4 className='text-secondary text-start'>{countries["IN"].name}</h4>
                <div className='d-flex align-items-start'>
                    <div>
                        <span className='temp'>27</span>
                        <h4 className='text-start pr-4'>Rain</h4>
                    </div>
                </div>
                {/* <span className='small'>Updated as of: Friday, September 9, 2022 6:51:35 PM (+05:30)</span> */}
                <span className='small'>Updated as of: <br/>6:51:35 PM (+05:30)</span>
            </div>
            <img src={Drizzle} alt='Weather Icon' className='mainIcon mx-4 align-self-center'/>
        </div>
        <img src={Skyline} alt='Skyline Background' className='skyline' />
    </div>
  );
}

export default MainComponent;