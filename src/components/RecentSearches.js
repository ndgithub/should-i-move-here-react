import React from 'react';
import RecentSearchesItem from './info-sections/RecentSearchesItems';

const RecentSearches = ({ recSearches, updatePlace }) => {
  return (
    <div className="rec-search-container">
      {recSearches
        ? recSearches.map((place, i) => (
            <RecentSearchesItem
              key={i}
              place={place}
              updatePlace={updatePlace}
            />
          ))
        : 'There are no recent searches'}
    </div>
  );
};

export default RecentSearches;
