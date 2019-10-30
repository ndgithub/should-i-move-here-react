import React, { Fragment } from 'react';
import Autocomplete from 'react-google-autocomplete';
import MapContainer from './info-sections/MapContainer';
import Weather from './info-sections/Weather';
import Restaurants from './info-sections/Restaurants';
import Breweries from './info-sections/Breweries';
import Header from './info-sections/Header';
import Search from './info-sections/Search';

const CityInfo = ({ updatePlace, place }) => {
  return (
    <div className="city-info">
      <Restaurants place={place} />
      <Breweries place={place} />
      <Header place={place} />
      <Search updatePlace={updatePlace} place={place} />
      <div className="map-container">
        <MapContainer coord={{ lat: place.lat, lng: place.lng }} />
      </div>
      <Weather place={place} />
    </div>
  );
};

export default CityInfo;
