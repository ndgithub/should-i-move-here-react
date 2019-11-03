import React from 'react';
import RecentSearchesItem from './info-sections/RecentSearchesItems';

const RecentSearches = ({ recSearches, updatePlace }) => {
  console.log('recSearches', recSearches);
  return (
    <div>
      {recSearches
        ? recSearches.map(place => (
            <RecentSearchesItem place={place} updatePlace={updatePlace} />
          ))
        : 'There are no recent searches'}
    </div>
  );
};

export default RecentSearches;
