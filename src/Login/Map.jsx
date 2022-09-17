import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}

          initialCenter={{

            lat: "19.9738911",
            lng: "73.8536568"
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'This is test name'}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB85SpRN3-735c9BGIIOjWNdIS_G1aCVFM'
})(Demo1);


{/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=myMap"></script> */ }

