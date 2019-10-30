import React, { useState, useEffect } from 'react';
import { getWeathData } from '../../apiUtils';
import Loading from '../Loading';

const Weather = ({ place }) => {
  const [weathState, setWeathState] = useState({
    isLoading: true,
    isError: false,
    weathData: ''
  });

  useEffect(() => {
    const fetchWeath = async () => {
      try {
        console.log(place);
        const res = await getWeathData(place);
        console.log(res);
        setWeathState({
          isLoading: false,
          isError: false,
          weathData: res
        });
      } catch (error) {
        console.log(error);
        setWeathState({
          isLoading: false,
          isError: true
        });
      }
    };
    fetchWeath();
  }, [place]);
  return (
    <div className="weather-container">
      asdf
      {weathState.isLoading ? (
        <Loading />
      ) : weathState.isError ? (
        'There was a problem getting the local breweries'
      ) : (
        JSON.stringify(weathState.weathData)
      )}
    </div>
  );
};

export default Weather;
