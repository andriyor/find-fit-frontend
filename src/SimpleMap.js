import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import AnyReactComponent from './AnyReactComponent'
// const AnyReactComponent = ({ text }) => <div>{text}<LocationOn /></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 49.43,
      lng: 32.06
    },
    zoom: 13
  };
 
  render() {
    const user ={place :[
      {id: 1, lat:  49.432214, lng: 32.057925, eventname: 'ev1'},
      {id: 2, lat: 49.428038, lng: 32.088534, eventname: 'ev2'}
    ]};

    const markers = user.place.map(obj =><AnyReactComponent key={obj.id} lat={obj.lat} lng={obj.lng} text={obj.eventname}/> )

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAM4Tk6tRekMBjmfK3Zf0OIePc0TIAgae4' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {markers}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;