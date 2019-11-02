import React from 'react';

const RecentSearches = ({ recSearches }) => {
  console.log('recSearches', recSearches);
  return (
    <div>
      {recSearches
        ? JSON.stringify(
            recSearches.map(place => {
              place = place.formatted_address.split(',');
              place.pop();
              place = place.join(',');
              return place;
            })
          )
        : 'There are no recent searches'}
    </div>
  );
};

export default RecentSearches;
