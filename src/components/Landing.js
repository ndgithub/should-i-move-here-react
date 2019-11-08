import React from 'react';
import RecentSearches from './RecentSearches';
import Search from './info-sections/Search';

const Landing = ({ updatePlace, recSearches }) => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <div className="title">Where Should I Move?</div>
          <div className="sub-title">
            Enter a U.S. city to learn more about your next home : )
          </div>

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
