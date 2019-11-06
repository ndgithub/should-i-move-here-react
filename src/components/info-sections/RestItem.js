import React from 'react';

const RestItem = ({ rest: { name, rating, priceRange, cuisines, imgSrc } }) => {
  return (
    <div class="rest-item">
      <div class="rest-img"></div>
      <div class="rest-name">{name}</div>
      <div class="rest-rating">{rating}</div>
      <div class="rest-price-range">{priceRange}</div>
      <div class="rest-cuisines">{cuisines}</div>
      <img src={imgSrc} alt="restaurant" class="rest-img" />
    </div>
  );
};

export default RestItem;
