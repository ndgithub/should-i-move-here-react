import React, { useEffect, useState } from 'react';
import { LOC_STORE_REC_SEARCHES } from '../constants';

const RecentSearches = ({ recSearches }) => {
  return (
    <div>
      {recSearches
        ? JSON.stringify(recSearches)
        : 'There are no recent searches'}
    </div>
  );
};

export default RecentSearches;
