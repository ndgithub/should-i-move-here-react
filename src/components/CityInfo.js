import React, { Fragment } from 'react';
import Autocomplete from 'react-google-autocomplete';
import MapContainer from './info-sections/MapContainer';
import Weather from './info-sections/Weather';
import Restaurants from './info-sections/Restaurants';
import Breweries from './info-sections/Breweries';
import Header from './info-sections/Header';
import Search from './info-sections/Search';

const CityInfo = ({ updatePlace, place }) => {
  console.log('cityInfo' + JSON.stringify(place));
  return (
    <div className="city-info">
      <Restaurants />
      <Breweries />
      <Header />
      <Search updatePlace={updatePlace} place={place} />
      {/* <MapContainer coord={{ lat: place.lat, lng: place.lng }} /> */}
      <Weather />
    </div>
  );
};

export default CityInfo;
