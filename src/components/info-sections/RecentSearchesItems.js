import React from 'react';

const RecentSearchesItem = ({ place, updatePlace }) => {
  console.log('place', place);
  const placeSplit = place.formatted_address.split(',');
  placeSplit.pop();
  const city = placeSplit.join(',');
  return <div onClick={() => updatePlace(place)}>{city}</div>;
};

export default RecentSearchesItem;
