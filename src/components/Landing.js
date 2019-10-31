import React from 'react';
import RecentSearches from './RecentSearches';
import Search from './info-sections/Search';

const Landing = ({ updatePlace }) => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <p>Landing Page</p>
          <Search updatePlace={updatePlace} />
          <RecentSearches />
        </div>
      </div>
    </div>
  );
};

export default Landing;
