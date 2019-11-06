import React from 'react';

const BreweryItem = ({ brewery: { name, city, street, state } }) => {
  return (
    <div class="brew-item">
      {/* <img src={imgSrc} alt="restaurant" class="rest-img" />

      <div class="rest-img"></div>
      <div class="rest-name">{name}</div>
      <div class="rest-rating">
        <FontAwesomeIcon icon={faStar} />
        {rating}
      </div>
      <div class="rest-price-range"></div>
      <div class="rest-cuisines">
        {' '}
        {Array(priceRange).fill(<FontAwesomeIcon icon={faDollarSign} />)} |{' '}
        {cuisines}
      </div> */}
    </div>
  );
};

export default BreweryItem;
