import React, { useState, Fragment } from 'react';
import Landing from './components/Landing';
import CityInfo from './components/CityInfo';
import './App.css';

const App = () => {
  const [place, setPlace] = useState({
    formatted_address: '',
    lat: '',
    lng: ''
  });

  // have entered city in this state

  const updatePlace = place => {
    console.log(JSON.stringify(place) + 'hi');
    setPlace(place);
  };

  return (
    <Fragment>
      {!place.city ? (
        <Landing updatePlace={updatePlace} />
      ) : (
        <CityInfo place={place} />
      )}
    </Fragment>
  );
};

export default App;
