import React from 'react';
import HighlightsCard from './HighlightsCard';
import MainComponent from './MainComponent';
import ProgressSection from './ProgressSection';

function LeftSection() {
  return (
    <div className='w-75 mx-4 my-3'>
        <MainComponent />
        {/* <ProgressSection /> */}
        <HighlightsCard />
    </div>
  );
}

export default LeftSection;