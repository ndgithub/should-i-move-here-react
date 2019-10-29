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

  const updatePlace = placed => {
    console.log(placed);
    setPlace(placed);
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
