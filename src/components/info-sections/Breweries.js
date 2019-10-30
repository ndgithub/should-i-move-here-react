import React, { useEffect, useState } from 'react';
import { getBreweries } from '../../apiUtils';
import Loading from '../Loading';
const Breweries = ({ place }) => {
  const [breweryState, setBreweryState] = useState({
    isLoading: true,
    isError: false
  });

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        console.log('asdf');
        console.log(place);

        const res = await getBreweries(place);
        console.log('si');

        setBreweryState({
          breweries: res,
          isLoading: false,
          isError: false
        });
      } catch (error) {
        console.log(error);
        setBreweryState({
          isLoading: false,
          isError: true
        });
      }
    };
    fetchBreweries();
  }, [place]);
  return (
    <div className="brewery-container">
      {breweryState.isLoading ? (
        <Loading />
      ) : breweryState.isError ? (
        'There was a problem getting the local breweries'
      ) : (
        JSON.stringify(breweryState.breweries)
      )}
    </div>
  );
};

export default Breweries;
