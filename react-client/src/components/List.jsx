import React from 'react';
import ListItem from './ListItem.jsx';
import $ from 'jquery';
import GoogleMapReact from 'google-map-react';
import { Marker } from 'react-google-maps';
import Map from './Map.jsx'


import {Jumbotron, Grid,Row,Col,Image,Button,MenuItem,ButtonToolbar,DropdownButton,Thumbnail} from 'react-bootstrap';

class List extends React.Component{
		constructor(props){
			super(props)
			
			this.state={
			specialties:[],
            markerPosition:null,
            isMarkerShown:false
        }

		this.showRate = this.showRate.bind(this);
		this.onChangelat= this.onChangelat.bind(this);
		this.onChangelng= this.onChangelng.bind(this);

		}


		onChangelat(e){
			this.setState({
				lat:e.target.value
			})

		}

		onChangelng(e){
			this.setState({
				lng:e.target.value
			})

		}


			showRate(){
				var that = this;
		if(this.props.specialty){
		$.ajax({
			url:'/doctors/'+that.props.specialty,
			type:'GET',
			success:function(data){
				
				that.setState({
					specialties:data
				})
				
				console.log(that.state)
			},
			error:function(err){

			}
		})
	}
	}

				 
			
		render(){
			return(

				 <div>
				 <div className="row">
				 <div className="col-sm-6">
				 <button  onClick ={this.showRate}type="button" className='btn btn-info btn-transparent  homebtn'  >Rate</button>
				      
				      <br/>
				      <br/>
				      	{this.state.specialties.map(function(spe,index){
				      		return(
				      			<div className="container " key={index}>
				      			<div className="jumbotron docInfo">
				      			<div className="card-body">
				      			<img src='../../photos/five.png' alt="Card image" id='docImg'/>                              
				      			<h1 className="card-title">{spe.name}</h1>
                                <p className="card-text">{spe.rate}</p>
                                </div>
				      			</div>
				      			</div>
				      			)
				      	})}
				 </div>
				 <div className="col-sm-6">
				 <Map specialty={this.props.specialty}/>
				 
				 </div>
				 </div>
 				 </div>
				)
		}
} 
 


export default List;