import React from 'react';
import MapContainer from './info-sections/MapContainer';
import Weather from './info-sections/Weather';
import Restaurants from './info-sections/Restaurants';
import Breweries from './info-sections/Breweries';
import Header from './info-sections/Header';
import Search from './info-sections/Search';
import RecentSearches from './RecentSearches';

const CityInfo = ({ updatePlace, place, recSearches }) => {
  return (
    <div className="city-info">
      <Restaurants place={place} />
      <Breweries place={place} />
      <Header place={place} />
      <Search updatePlace={updatePlace} place={place} />
      <RecentSearches recSearches={recSearches} />j
      <div className="map-container">
        <MapContainer coord={{ lat: place.lat, lng: place.lng }} />
      </div>
      <Weather place={place} />
    </div>
  );
};

export default CityInfo;
