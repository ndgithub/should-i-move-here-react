import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    borderRadius: 50,
    margin: '10px',
    color: 'white',
    backgroundColor: '#ffffff22',
    border: 'none'
  },
  label: {
    textTransform: 'capitalize'
  }
})(Button);

const RecentSearchesItem = ({ place, updatePlace }) => {
  const placeSplit = place.formatted_address.split(',');
  placeSplit.pop();
  const city = placeSplit.join(',');
  return (
    <StyledButton
      className="rec-search-item"
      onClick={() => updatePlace(place)}
      variant="outlined">
      {city}
    </StyledButton>
  );
};

export default RecentSearchesItem;
