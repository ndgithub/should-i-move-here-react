import React from 'react';

const BreweryItem = ({ brewery: { name, city, street, state } }) => {
  return (
    <div>
      <ul>
        <li>{name}</li>
      </ul>
      <ul>
        <li>{city}</li>
      </ul>
      <ul>
        <li>{street}</li>
      </ul>
      <ul>
        <li>{state}</li>
      </ul>
    </div>
  );
};

export default BreweryItem;
