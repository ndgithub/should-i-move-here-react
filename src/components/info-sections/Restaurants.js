import React, { useEffect, useState } from 'react';
import { getRestInfo } from '../../apiUtils';
import Loading from '../Loading';
import RestItem from './RestItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const Restaurants = ({ place }) => {
  const [restState, setRestState] = useState({
    rests: [],
    isLoading: true,
    isError: false
  });

  useEffect(() => {
    const getRestInfos = async () => {
      // Set the state again so if the users enters a new city, you get the loading symbol and errors reset to false.
      setRestState({ isLoading: true, isError: false });
      try {
        const restInfo = await getRestInfo(place);
        setRestState({ rests: restInfo, isLoading: false, isError: false });
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
    <section className="restaurant-container section-container">
      <h2 className="section-title">
        {' '}
        <FontAwesomeIcon icon={faUtensils} /> Top Rated Restaurants
      </h2>
      <div className="restaurant-list">
        {restState.isLoading ? (
          <Loading />
        ) : restState.isError ? (
          'We had some trouble getting the restaurants'
        ) : (
          restState.rests.map((rest, i) => {
            return <RestItem key={i} rest={rest} />;
          })
        )}
      </div>
    </section>
  );
};

export default Restaurants;
