import React from 'react';
import '../assets/css/HighlightsCard.css';
import Sunrise from '../assets/weather-icons-master/design/fill/sunrise.svg';
import Sunset from '../assets/weather-icons-master/design/fill/sunset.svg';
// import aqiCalculator from "aqi-calculator";

function HighlightsCard({ sunrise, sunset, dataPol }) {
    const aqiColors = ["#08e303", "#ff7d01", "#ff0000", "#8e3f98", "#7d0121"];
    const aqiName = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];

    const sunriseDate = new Date(sunrise * 1000);
    const sunriseTime =  sunriseDate.toLocaleTimeString("en-US");

    const sunsetDate = new Date(sunset * 1000);
    const sunsetTime =  sunsetDate.toLocaleTimeString("en-US");

    // var DATA = [
    //     {
    //       datetime: "2022-09-14T13:00:00.000Z", //Taking the 24-hour average concentration  - change when you use this example
    //       pm25: dataPol.list ? dataPol.list[0].components.pm2_5 : null,
    //       pm10: dataPol.list ? dataPol.list[0].components.pm10 : null,
    //       so2: dataPol.list ? dataPol.list[0].components.so2 : null,
    //       no: dataPol.list ? dataPol.list[0].components.no : null,
    //       nox: null,
    //       no2: dataPol.list ? dataPol.list[0].components.no2 : null,
    //       o3: dataPol.list ? dataPol.list[0].components.o3 : null,
    //       co: null,
    //     }];
    // var AQI = aqiCalculator(DATA);
    // console.log(AQI);
    return (
        <div className='mt-5'>
            <h2 className='text-start mb-4'>Today's Highlights</h2>
            <div className='d-flex highlightContainer'>
                <div className='highlightCard w-50 me-3 d-flex flex-column justify-content-between'>
                    <h5 className='text-start ms-4 mt-3 fw-bold'>Sunrise & Sunset</h5>
                    <div className='d-flex justify-content-between mx-4'>
                        <div>
                            <img src={Sunrise} />
                            <span className='ms-3 fw-bold'>{sunriseTime}</span>
                        </div>
                        <div>
                            <img src={Sunset} />
                            <span className='ms-3 fw-bold'>{sunsetTime}</span>
                        </div>
                    </div>
                    <i class="bi bi-brightness-high"></i>
                </div>

                <div className='highlightCard w-50 ms-3 d-flex flex-column justify-content-between'>
                    <h5 className='text-start ms-4 my-3 fw-bold'>Air Quality Index</h5>
                    <div className='d-flex justify-content-between mx-4'>
                        <div>
                            <div className='circle d-flex justify-content-center align-items-center mb-2' style={{backgroundColor: aqiColors[(dataPol.list ? dataPol.list[0].main.aqi-1  : 0)]}}>
                                <span className='text-white h5 mb-0'>{dataPol.list ? dataPol.list[0].main.aqi : 0}</span>
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
                                    <span>{dataPol.list ? dataPol.list[0].components.co : 0}</span>
                                    <span>{dataPol.list ? dataPol.list[0].components.no : 0}</span>
                                    <span>{dataPol.list ? dataPol.list[0].components.no2 : 0}</span>
                                    <span>{dataPol.list ? dataPol.list[0].components.o3 : 0}</span>
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
                                    <span>{dataPol.list ? dataPol.list[0].components.so2 : 0}</span>
                                    <span>{dataPol.list ? dataPol.list[0].components.pm2_5 : 0}</span>
                                    <span>{dataPol.list ? dataPol.list[0].components.pm10 : 0}</span>
                                    <span>{dataPol.list ? dataPol.list[0].components.nh3 : 0}</span>
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