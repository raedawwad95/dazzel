import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker } from 'react-google-maps';
import $ from 'jquery';

/*
* This is  an react component shows the react-google-maps
*/
class Map extends React.Component {
  constructor(props){
    super(props)
      this.state={
        specialties:[],
        markerPosition:null,
        isMarkerShown:false
      }

    this.onMapClick=this.onMapClick.bind(this)
    this.showNearest=this.showNearest.bind(this);
  }

/*
* Ajax request fetch the nearest three Doctors from  the data base  
*/
  showNearest(){
   
    if(this.state.markerPosition && this.props.specialty){
      var that=this
      $.ajax({
        url:'/docNearst/'+that.props.specialty,
        type:'GET',
        success:function(data){
          var arr=[]
          for (var i = 0; i < data.length; i++) {
            var distance=0;
            distance=Math.sqrt(Math.pow((that.state.markerPosition.lat-data[i].address.lat), 2)+Math.pow((that.state.markerPosition.lng-data[i].address.lng),2))
            console.log(distance);
            data[i].des = distance
            arr.push(data[i])  
          }
          arr.sort(function(a, b){return a.des - b.des});
          arr.splice(3,arr.length-1)

          that.setState({
            specialties:arr
          }) 
        }
      })
    }
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
          <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact 
              bootstrapURLKeys={{ key: "AIzaSyB9Dw8LCdkw5sf4QVXL_Pdj1uxIJiJvEfY" }}
              defaultCenter={{ lat: 31.9454, lng: 35.9284 }}
              defaultZoom={15}
              onClick={this.onMapClick} >
            </GoogleMapReact>
          </div>
          <br/>
          <br/>
        {this.state.specialties.map(function(spe,index){
          return(
            <div className="container " key={index}>
              <div className="jumbotron docInfo">
                  <div className="card-body">
                    <img src='../../photos/five.png' alt="Card image" id='docImg'/>                              
                    <h1 className="card-title">{spe.name}</h1>
                    <p className="card-text">{spe.des}</p>
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