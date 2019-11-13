import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faStar } from '@fortawesome/free-solid-svg-icons';

const RestItem = ({ rest: { name, rating, priceRange, cuisines, imgSrc } }) => {
  return (
    <div className="rest-item">
      <img src={imgSrc} alt="restaurant" className="rest-img" />

      <div className="rest-info">
        <div className="rest-name">{name}</div>
        <div className="rest-rating">
          <FontAwesomeIcon icon={faStar} />
          {rating}
        </div>
        <div className="rest-price-range"></div>
        <div className="rest-cuisines">
          {' '}
          {Array(priceRange).fill(
            <FontAwesomeIcon icon={faDollarSign} />
          )} | {cuisines}
        </div>
      </div>
    </div>
  );
};

export default RestItem;
