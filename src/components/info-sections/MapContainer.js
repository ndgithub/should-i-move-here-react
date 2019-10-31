import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  render(props) {
    console.log(this.props);
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={this.props.coord}
        center={this.props.coord}
        style={{
          width: '200px',
          height: '200px'
        }}></Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);
