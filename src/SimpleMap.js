import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import AnyReactComponent from './AnyReactComponent'

import { connect } from 'react-redux'

import { 
  addPlace
} from './actions';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 49.43,
      lng: 32.06
    },
    zoom: 13
  };

  handleClick = () => {
    console.log('The link was clicked.');
  }

  handleMapClick = (place) => {
    const id = Math.floor(Math.random() * 100);
    this.props.addPlace({id: id, lat: place.lat, lng: place.lng});
  }
  

  render() {
    const markers =  this.props.store.places.map(place =><AnyReactComponent onClick={this.handleClick} key={place.id} lat={place.lat} lng={place.lng} text={place.eventname}/> )

    return (
      <div style={{ height: '100vh', width: '80%', cursor: 'pointer' }}>
        <GoogleMapReact
          onClick={this.handleMapClick}
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


const mapStateToProps = state => ({store: state})
const mapDispatchToProps = dispatch => ({
  addPlace: (place) => dispatch(addPlace(place)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SimpleMap)