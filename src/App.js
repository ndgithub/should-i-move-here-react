import React, { useState, Fragment } from 'react';
import Landing from './components/Landing';
import CityInfo from './components/CityInfo';
import './App.css';
import dotenv from 'dotenv';

dotenv.config();

const App = () => {
  const [place, setPlace] = useState({
    formatted_address: '',
    lat: '',
    lng: ''
  });

  // have entered city in this state
  const updatePlace = place => {
    console.log(place);

    setPlace(place);
  };

  return (
    <Fragment>
      {!place.formatted_address ? (
        <Landing updatePlace={updatePlace} />
      ) : (
        <CityInfo updatePlace={updatePlace} place={place} />
      )}
    </Fragment>
  );
};

export default App;
