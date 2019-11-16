import React from 'react';
import Autocomplete from 'react-google-autocomplete';

const Search = ({ updatePlace, recSearches, children }) => {
  return (
    <div className="search-container">
      <Autocomplete
        placeholder="Enter a U.S. city"
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
      {children}
    </div>
  );
};

export default Search;
