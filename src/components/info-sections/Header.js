import React from 'react';

const Header = ({ place }) => {
  const placeSplit = place.formatted_address.split(',');
  placeSplit.pop();
  const city = placeSplit.join(',').toUpperCase();
  console.log('city', city);
  return <div className="header-container">{city}</div>;
};

export default Header;
