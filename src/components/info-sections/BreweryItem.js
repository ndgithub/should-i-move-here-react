import React from 'react';

const BreweryItem = ({ brewery: { name, city, street, state } }) => {
  return (
    <div className="brew-item">
      <div className="brew-name">{name}</div>
      <div className="brew-street">{street}</div>
      <div className="brew-city">
        {city}, {state}
      </div>
    </div>
  );
};

export default BreweryItem;
