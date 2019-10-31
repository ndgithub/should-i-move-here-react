import React, { useEffect, useState } from 'react';
import { LOC_STORE_REC_SEARCHES } from '../constants';

const RecentSearches = () => {
  const [state, setState] = useState({
    searches: []
  });

  let recentSearches = JSON.parse(localStorage.getItem(LOC_STORE_REC_SEARCHES));
  useEffect(() => {
    setState({
      searches: recentSearches
    });
  }, [recentSearches]);

  return (
    <div>
      {state.searches
        ? JSON.stringify(state.searches)
        : 'There are no recent searches'}
    </div>
  );
};

export default RecentSearches;
