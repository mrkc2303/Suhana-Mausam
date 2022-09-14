import React from 'react';
import HighlightsCard from './HighlightsCard';
import MainComponent from './MainComponent';
import ProgressSection from './ProgressSection';

function LeftSection( {weatherData, dataPol} ) {
  return (
    <div className='w-75 mx-4 my-3'>
        <MainComponent data={ weatherData }/>
        {/* <ProgressSection /> */}
        <HighlightsCard sunrise={ weatherData.sys ? weatherData.sys.sunrise: 0 } sunset={ weatherData.sys ? weatherData.sys.sunset: 0 } dataPol={ dataPol }/>
    </div>
  );
}

export default LeftSection;