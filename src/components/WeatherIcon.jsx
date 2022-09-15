import Drizzle from '../assets/weather-icons-master/design/fill/drizzle.svg';
import Thunderstorm from '../assets/weather-icons-master/design/fill/thunderstorms.svg';
import Rain from '../assets/weather-icons-master/design/fill/rain.svg';
import Mist from '../assets/weather-icons-master/design/fill/mist.svg';
import Clear from '../assets/weather-icons-master/design/fill/clear-day.svg';
import Snow from '../assets/weather-icons-master/design/fill/snow.svg';
import Cloudy from '../assets/weather-icons-master/design/fill/cloudy.svg';
import Smoke from '../assets/weather-icons-master/design/fill/smoke-particles.svg';
import Haze from '../assets/weather-icons-master/design/fill/haze.svg';
import DustWinds from '../assets/weather-icons-master/design/fill/dust-wind.svg';
import Fog from '../assets/weather-icons-master/design/fill/fog.svg';
import Dust from '../assets/weather-icons-master/design/fill/dust.svg';
import Tornado from '../assets/weather-icons-master/design/fill/tornado.svg';
import Squall from '../assets/weather-icons-master/design/fill/wind-beaufort-12.svg';

const WeatherIcon=({ icon })=>{
    let weatherIcon;
    if(icon>=200 && icon<=232){
        weatherIcon=Thunderstorm;
    }else if(icon>=300 && icon<=321){
        weatherIcon=Drizzle;
    }else if(icon>=500 && icon<=531){
        weatherIcon=Rain;
    }else if(icon>=600 && icon<=622){
        weatherIcon=Snow;
    }else if(icon===701){
        weatherIcon=Mist;
    }else if(icon===711){
        weatherIcon=Smoke;
    }else if(icon===721){
        weatherIcon=Haze;
    }else if(icon===731){
        weatherIcon=DustWinds;
    }else if(icon===741){
        weatherIcon=Fog;
    }else if(icon===751){
        weatherIcon=DustWinds;
    }else if(icon===761){
        weatherIcon=Dust;
    }else if(icon===771){
        weatherIcon=Squall;
    }else if(icon===781){
        weatherIcon=Tornado;
    }else if(icon>=801 && icon<=804){
        weatherIcon=Cloudy;
    }else{
        weatherIcon=Clear;
    }
    return(
        <img src={weatherIcon} alt="" className='mainIcon mx-4 align-self-center' ></img>
    )
}

export default WeatherIcon;