import React, { useEffect, useState } from 'react';
import { getRestInfo } from '../../apiUtils';
import Spinner from '../Loading';
const Restaurants = ({ place }) => {
  const [restState, setRestState] = useState({
    isLoading: true,
    isError: false
  });

  useEffect(() => {
    const getRestInfos = async () => {
      // Set the state again so if the users enters a new city, you get the loading symbol and errors reset to false.
      setRestState({ isLoading: true, isError: false });
      try {
        const restInfo = await getRestInfo(place);
        setRestState({ ...restInfo, isLoading: false, isError: false });
      } catch (error) {
        console.log(error);
        setRestState({
          isLoading: false,
          isError: true
        });
      }
    };

    getRestInfos();
  }, [place]);

  return (
    <div className="restaurant-container">
      {restState.isLoading ? (
        <Spinner />
      ) : restState.isError ? (
        'We had some trouble getting the restaurants'
      ) : (
        JSON.stringify(restState)
      )}
    </div>
  );
};

export default Restaurants;
