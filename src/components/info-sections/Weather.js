import React, { useState, useEffect } from 'react';
import { getWeathData } from '../../apiUtils';
import Loading from '../Loading';
import { Line } from 'react-chartjs-2';

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
    <div className="weather-container">
      asdf
      {weathState.isLoading ? (
        <Loading />
      ) : weathState.isError ? (
        'There was a problem getting the weather'
      ) : (
        JSON.stringify(weathState.weathData) && (
          <Line
            data={{
              labels: [
                'Jan',
                'Feb',
                'March',
                'April',
                'May',
                'June',
                'July',
                'Aug',
                'Sept',
                'Oct',
                'Nov',
                'Dec'
              ],
              datasets: [
                {
                  label: 'Highs',
                  borderColor: 'rgb(255, 0, 0)',
                  data: weathState.weathData.highs,
                  fill: false
                },
                {
                  label: 'Lows',
                  borderColor: 'rgb(0, 0, 255)',
                  data: weathState.weathData.lows,
                  fill: false
                }
              ]
            }}
          />
        )
      )}
    </div>
  );
};

export default Weather;
