import React from "react";
import '../assets/css/Header.css';

function Header( {changeLocation} ) {
  var today = new Date();
  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      changeLocation(event.target.value);
    }
  }
  
  return (
    <div className="header d-flex align-items-center justify-content-between px-5">
      <div>
        <h2>Weather App</h2>
        <h6 className="text-start">{today.toDateString()}</h6>
      </div>
      <div>
        <div className="input-group rounded-pill border border-white mt-0">
          <span
            className="input-group-text border-0 bg-transparent"
            id="search-addon"
          >
            <i className="bi bi-search text-success"></i>
          </span>
          <input
            id="themeSearch"
            type="search"
            className="searchBarCollections border-0 shadow-none form-control rounded-pill"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            onKeyPress={ searchLocation }
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
