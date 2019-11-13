import React, { useState, useEffect } from 'react';
import { getWeathData } from '../../apiUtils';
import Loading from '../Loading';
import LineChart from './LineChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Weather = ({ place }) => {
  const [weathState, setWeathState] = useState({
    isLoading: true,
    isError: false,
    weathData: ''
  });

  useEffect(() => {
    const fetchWeath = async () => {
      try {
        const res = await getWeathData(place);
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
    <div className="weather-container section-container">
      <h2 className="section-title">
        {' '}
        <FontAwesomeIcon icon={faSun} /> Yearly Weather
      </h2>
      {weathState.isLoading ? (
        <Loading />
      ) : weathState.isError ? (
        'There was a problem getting the weather'
      ) : (
        <LineChart data={weathState.weathData} />
      )}
    </div>
  );
};

export default Weather;
