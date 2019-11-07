import React from 'react';

const BreweryItem = ({ brewery: { name, city, street, state } }) => {
  return (
    <div class="brew-item">
      <div class="brew-name">{name}</div>
      <div class="brew-street">{street}</div>
      <div class="brew-city">
        {city}, {state}
      </div>
    </div>
  );
};

export default BreweryItem;
