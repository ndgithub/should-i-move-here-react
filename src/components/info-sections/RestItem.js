import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faStar } from '@fortawesome/free-solid-svg-icons';

const RestItem = ({ rest: { name, rating, priceRange, cuisines, imgSrc } }) => {
  return (
    <div class="rest-item">
      <img src={imgSrc} alt="restaurant" class="rest-img" />

      <div class="rest-img"></div>
      <div class="rest-name">{name}</div>
      <div class="rest-rating">
        <FontAwesomeIcon icon={faStar} />
        {rating}
      </div>
      <div class="rest-price-range">
        {Array(priceRange).fill(<FontAwesomeIcon icon={faDollarSign} />)}
      </div>
      <div class="rest-cuisines">{cuisines}</div>
    </div>
  );
};

export default RestItem;
