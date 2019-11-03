import React from 'react';
import RecentSearches from './RecentSearches';
import Search from './info-sections/Search';

const Landing = ({ updatePlace, recSearches }) => {
  console.log('recSearches', recSearches);
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <p>Landing Page</p>
          <Search updatePlace={updatePlace}>
            <RecentSearches
              recSearches={recSearches}
              updatePlace={updatePlace}
            />
          </Search>
        </div>
      </div>
    </div>
  );
};

export default Landing;
