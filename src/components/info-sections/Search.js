import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import RecentSearches from '../RecentSearches';

const Search = ({ updatePlace, recSearches, children }) => {
  return (
    <div className="search-container">
      <Autocomplete
        style={{ width: '90%' }}
        onPlaceSelected={place => {
          console.log('sup');
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
