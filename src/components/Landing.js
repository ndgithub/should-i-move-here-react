import React from 'react';
import RecentSearches from './RecentSearches';
import Search from './info-sections/Search';

const Landing = ({ updatePlace, recSearches }) => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <p>Landing Page</p>
          <Search updatePlace={updatePlace} />
          <RecentSearches recSearches={recSearches} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
