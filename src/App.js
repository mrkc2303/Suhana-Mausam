import './App.css';
import React, { useState, useEffect } from 'react';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import MainContainer from './components/MainContainer'
import Header from './components/Header';
// import { getAllUsers } from './assets/services/weatherCall';

function App() {
  const [data, setData] = useState({});
  const [dataPol, setDataPol] = useState({});
  const [location, setLocation] = useState('Delhi');
  const [loading, setLoading] = useState(false);
  
  const API = "c28f28d025ab2bd31b4e38bab8a5cf16";
  const units = "metric";

  useEffect(() => {
    async function getAllUsers() {
      const url = `https://api.openweathermap.org/data/2.5/weather?appid=${API}&q=${location}&units=${units}`;
      try{
          const response = await fetch(url);
          const data = await response.json();
          if(data.cod === 200) {
            setData(data);
            const lat = data.coord.lat;
            const lon = data.coord.lon;
            const urlPol = `https://api.openweathermap.org/data/2.5/air_pollution?appid=${API}&lat=${lat}&lon=${lon}`;
            try {
              const responsePol = await fetch(urlPol);
              const dataPol = await responsePol.json();
              setDataPol(dataPol);
              console.log(dataPol);
            }catch(e) {
              console.log(e.message);
            }
            console.log(data);
            setLoading(true);
          } else if(data.cod === "404") {
            alert("City not found");
          } else {
            alert("Server Issue");
          }
          
      }catch(error) {
        console.log(error.message);
      }
    }
    getAllUsers();
  }, [location]);

  const onSearchChange = (event) => {
    setLocation(event);
  } 

  return (
    <div className="App"> 
      {/* {getAllUsers()} */}
      <Header changeLocation={ onSearchChange } />
      {loading ? (
        <MainContainer>
          <LeftSection weatherData={ data } dataPol={ dataPol } />
          <RightSection cityName={data.name} changeLocation={ onSearchChange } />
        </MainContainer>
      ) : (<div class="loading spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
      )}
      
    </div>
  );
}

export default App;
