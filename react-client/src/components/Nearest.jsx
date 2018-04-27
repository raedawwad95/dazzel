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
  }

/*
* Ajax request fetch the nearest three Doctors from  the data base  
*/
 showNearest(){
   console.log(this.props.lat,this.props.lng)
    
      var that=this
      $.ajax({
        url:'/docNearst/'+that.props.specialty,
        type:'GET',
        success:function(data){
          console.log(data)
          var arr=[]
          for (var i = 0; i < data.length; i++) {
            var distance=0;
            distance=Math.sqrt(Math.pow((that.props.lat-data[i].address.lat), 2)+Math.pow((that.props.lng-data[i].address.lng),2))
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