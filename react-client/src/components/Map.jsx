import React from 'react';
import { compose, withStateHandlers } from "recompose";
import { InfoWindow, withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
import $ from 'jquery';
import ReactDOM from 'react-dom'
import Nearest from './Nearest.jsx'
const Map = compose(
  withStateHandlers(() => ({
      isMarkerShown: false,
      markerPosition: null,        
    }), {
      onMapClick: ({ isMarkerShown }) => (e) => ({
          markerPosition: e.latLng,
          isMarkerShown:true,
      })
    }
    ),
  withScriptjs,
  withGoogleMap
)
(props =>
<div>                
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 31.9454, lng: 35.9284 }}
    onClick={props.onMapClick} >
    {props.isMarkerShown && <Marker position={props.markerPosition}/> }
    {props.isMarkerShown && <Nearest specialty={props.specialty}  lat={props.markerPosition.lat()} lng={props.markerPosition.lng()}/>}
  </GoogleMap>
</div>
)
export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
}
/*
* Ajax request fetch the nearest three Doctors from  the data base  
*/ 
render() {
return (
<div>
  <div className="map" >                      
    <Map 
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_s8BRe0493QchXWEDa_WkF8tzDLLWeLE"
        loadingElement={<div style={{ height: `50%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `50%` }} />}
        specialty={this.props.specialty}
    />        
  </div>
</div>
  )
}
}

