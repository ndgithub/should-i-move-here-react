import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import MapContainer from './info-sections/MapContainer';

const Landing = ({ updatePlace }) => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <p>Landing Page</p>
          <Autocomplete
            style={{ width: '90%' }}
            onPlaceSelected={place => {
              updatePlace({
                formatted_address: place.formatted_address,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
              });
            }}
            types={['(regions)']}
            componentRestrictions={{ country: 'us' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
