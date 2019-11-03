import React from 'react';
import MapContainer from './info-sections/MapContainer';
import Weather from './info-sections/Weather';
import Restaurants from './info-sections/Restaurants';
import Breweries from './info-sections/Breweries';
import Header from './info-sections/Header';
import Search from './info-sections/Search';
import RecentSearches from './RecentSearches';

const CityInfo = ({ updatePlace, place, recSearches }) => {
  console.log('recSearches', recSearches);
  return (
    <div className="container">
      <div className="city-info">
        <Restaurants place={place} />
        <Breweries place={place} />
        <Header place={place} />
        <Search updatePlace={updatePlace} place={place}>
          <RecentSearches recSearches={recSearches} updatePlace={updatePlace} />
        </Search>
        <div className="map-container">
          <MapContainer coord={{ lat: place.lat, lng: place.lng }} />
        </div>
        <Weather place={place} />
      </div>
    </div>
  );
};

export default CityInfo;
