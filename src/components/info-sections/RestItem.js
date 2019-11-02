import React from 'react';

const RestItem = ({ rest: { name, rating, priceRange, cuisines } }) => {
  return (
    <div>
      <ul>
        <li>{name}</li>
      </ul>
      <ul>
        <li>{rating}</li>
      </ul>
      <ul>
        <li>{priceRange}</li>
      </ul>
      <ul>
        <li>{cuisines}</li>
      </ul>
      {`************************************`}
    </div>
  );
};

export default RestItem;
