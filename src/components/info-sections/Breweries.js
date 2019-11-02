import React, { useEffect, useState } from 'react';
import { getBreweries } from '../../apiUtils';
import Loading from '../Loading';
import BreweryItem from './BreweryItem';
const Breweries = ({ place }) => {
  const [breweryState, setBreweryState] = useState({
    breweries: [],
    isLoading: true,
    isError: false
  });

  useEffect(() => {
    const fetchBreweries = async () => {
      setBreweryState({
        isLoading: true,
        isError: false
      });
      try {
        const res = await getBreweries(place);
        console.log(res);
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
      ) : breweryState.breweries.length > 0 ? (
        breweryState.breweries.slice(0, 5).map(brewery => {
          console.log(brewery);
          return <BreweryItem brewery={brewery} />;
        })
      ) : (
        'There are no breweries found'
      )}
    </div>
  );
};

export default Breweries;
