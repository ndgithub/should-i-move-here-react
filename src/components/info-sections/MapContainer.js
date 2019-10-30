import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

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
  apiKey: 'AIzaSyDKRF_pimlVWA251FHLl_QPXlF2hXtMV1E'
})(MapContainer);
