import React, { useEffect, useState } from 'react';
import { getRestInfo } from '../../apiUtils';
const Restaurants = ({ place }) => {
  const [restData, setRestData] = useState({});
  // console.log(place);
  // console.log(formatted_address);

  //get location, pass in
  useEffect(() => {
    const getRestInfos = async () => {
      try {
        const restInfo = await getRestInfo(place);
        console.log(restInfo);
        setRestData(restInfo);
      } catch (error) {
        console.log(error);
      }
    };

    getRestInfos();
  }, [place]);

  return (
    <div className="restaurant-container"> {JSON.stringify(restData)}</div>
  );
};

export default Restaurants;
