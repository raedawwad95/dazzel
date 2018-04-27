import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker } from 'react-google-maps';
import $ from 'jquery';

/*
* This is  an react component shows the react-google-maps
*/
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends React.Component {
  constructor(props){
    super(props)
      this.state={
        specialties:[]
      }

    this.showNearest=this.showNearest.bind(this);
    this.getDistance=this.getDistance.bind(this);
    this.deg2rad=this.deg2rad.bind(this);
  }

// Haversine distance-"determines the great-circle distance between two points on a sphere given their longitudes and latitudes"
  getDistance(lat1,lng1,lat2,lng2) {
  var earthRadius = 6371; // Radius of the earth in km
  var dLat = this.deg2rad(lat2-lat1);  
  var dLng = this.deg2rad(lng2-lng1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
    Math.sin(dLng/2) * Math.sin(dLng/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = earthRadius* c; // Distance in km
  return d;
}
deg2rad(deg) {
  return deg * (Math.PI/180);
}

/*
* Ajax request fetch the nearest three Doctors from  the data base  
*/
 showNearest(){
   //console.log(this.props.lat,this.props.lng)
    
      var that=this
      $.ajax({
        url:'/docNearst/'+that.props.specialty,
        type:'GET',
        success:function(data){
          var arr=[]
          for (var i = 0; i < data.length; i++) {
            var distance=0
            distance=that.getDistance(data[i].address.lat,that.props.lat,data[i].address.lng,that.props.lng);
            data[i].des = distance;
            arr.push(data[i]);
          }
          arr.sort(function(a, b){return a.des - b.des});
          arr.splice(3,arr.length-1)
          that.setState({
            specialties:arr
          }) 
         }
      })
      }
/*
* function gives the lat and lng when the user click on his location 
*/
  onMapClick(e){
    this.setState({
      markerPosition: {lat:e.lat,lng:e.lng},
      isMarkerShown:true

    })
  }
  /*
  * rendering the nearest three doctors after determing the user loction 
  */
  render() {
    
    return (
      <div>

        <button  onClick ={this.showNearest} type="button" className='btn btn-info btn-transparent homebtn'  >Nearest</button>
          <br/>
          
          <br/>
          <br/>
        {this.state.specialties.map(function(spe,index){
          return(
            <div className="container " key={index}>
              <div className="jumbotron docInfo">
                  <div className="card-body">
                    <img src='../../photos/five.png' alt="Card image" id='docImg'/>                              
                    <h2 className="DocName">Dr.{spe.name}</h2>
                    <h3 className="cardText ">distance: {spe.des}</h3>
                    <h3 className="cardText">Tel: {spe.tel}</h3>

                  </div>
                </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Map