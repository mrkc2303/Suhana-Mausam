import React from 'react';
import Drizzle from '../assets/weather-icons-master/design/fill/drizzle.svg';
import '../assets/css/MainComponent.css';

function MainComponent() {
const percentage = 66;
  return (
    <div className='d-flex flex-column'>
        <h2>Delhi, IN</h2>
        <div className="tempDiv d-flex align-items-start justify-content-center">
            <img src={Drizzle} className="mainIcon mx-4"/>
            <div>
                <span className='temp'>27°</span>
                <h4 className='text-start px-4'>Rain</h4>
            </div>
            <div className='d-flex flex-column mx-4'>
                <span className="unitSelect">C</span>
                <span>F</span>
            </div>
        </div>
        {/* <span className='small'>Updated as of: Friday, September 9, 2022 6:51:35 PM (+05:30)</span> */}
        <span className='small'>Updated as of: 6:51:35 PM (+05:30)</span>
    </div>
  );
}

export default MainComponent;