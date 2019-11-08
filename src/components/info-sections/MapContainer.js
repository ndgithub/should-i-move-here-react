import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.size = React.createRef();
  }
  render(props) {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={this.props.coord}
        center={this.props.coord}></Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);
