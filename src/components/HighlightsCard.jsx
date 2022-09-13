import React from 'react';
import '../assets/css/HighlightsCard.css';
import Sunrise from '../assets/weather-icons-master/design/fill/sunrise.svg';
import Sunset from '../assets/weather-icons-master/design/fill/sunset.svg';

function HighlightsCard() {
    const aqiColors = ["#08e303", "#ff7d01", "#ff0000", "#8e3f98", "#7d0121"];
    const aqiName = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
    return (
        <div className='mt-5'>
            <h2 className='text-start mb-4'>Today's Highlights</h2>
            <div className='d-flex highlightContainer'>
                <div className='highlightCard w-50 me-3 d-flex flex-column justify-content-between'>
                    <h5 className='text-start ms-4 mt-3 fw-bold'>Sunrise & Sunset</h5>
                    <div className='d-flex justify-content-between mx-4'>
                        <div>
                            <img src={Sunrise} />
                            <span className='ms-3 fw-bold'>6:23 AM</span>
                        </div>
                        <div>
                            <img src={Sunset} />
                            <span className='ms-3 fw-bold'>6:40 PM</span>
                        </div>
                    </div>
                    <i class="bi bi-brightness-high"></i>
                </div>

                <div className='highlightCard w-50 ms-3 d-flex flex-column justify-content-between'>
                    <h5 className='text-start ms-4 mt-3 fw-bold'>Air Quality Index</h5>
                    <div className='d-flex justify-content-between mx-4'>
                        <div>
                            <div className='circle d-flex justify-content-center align-items-center mb-2' style={{backgroundColor: aqiColors[1]}}>
                                <span className='text-white h5 mb-0'>140</span>
                            </div>
                            <span className='fw-bold'>{aqiName[1]}</span>
                        </div>
                        <div className='container ms-5 mb-3 d-flex'>
                            <div className='d-flex flex-row align-items-start'>
                                <div className='d-flex flex-column align-items-start me-4'>
                                    <span className='fw-bold'>CO</span>
                                    <span className='fw-bold'>NO</span>
                                    <span className='fw-bold'>NO2</span>
                                    <span className='fw-bold'>O3</span>
                                </div>
                                <div className='d-flex flex-column align-items-end'>
                                    <span>527.38</span>
                                    <span>0.18</span>
                                    <span>17.99</span>
                                    <span>103</span>
                                </div>
                            </div>

                            <div className='d-flex flex-row align-items-start ms-5'>
                                <div className='d-flex flex-column align-items-start me-4'>
                                    <span className='fw-bold'>SO2</span>
                                    <span className='fw-bold'>PM2.5</span>
                                    <span className='fw-bold'>PM10</span>
                                    <span className='fw-bold'>NH3</span>
                                </div>
                                <div className='d-flex flex-column align-items-end'>
                                    <span>34.33</span>
                                    <span>40.01</span>
                                    <span>52.24</span>
                                    <span>7.16</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <i class="bi bi-water"></i>
                </div>
            </div>
            
        </div>
    );
}

export default HighlightsCard;