import React from 'react';
import ListItem from './ListItem.jsx';
import $ from 'jquery';
import {Jumbotron, Grid,Row,Col,Image,Button,MenuItem,ButtonToolbar,DropdownButton,Thumbnail} from 'react-bootstrap';

class List extends React.Component{
		constructor(props){
			super(props)
			
			this.state={
			specialties:[],
			lat:0,
			lng:0

		}
		this.showRate = this.showRate.bind(this);
		this.showNearest=this.showNearest.bind(this);
		this.onChangelat= this.onChangelat.bind(this);
		this.onChangelng= this.onChangelng.bind(this)
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
		
		console.log(this.props.specialty)
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

		showNearest(){
			var that=this
			$.ajax({
				url:'/docNearst/'+that.props.specialty,
				type:'GET',
				success:function(data){
					var arr=[]
				for (var i = 0; i < data.length; i++) {
					var distance=0;
					distance=Math.sqrt(Math.pow((that.state.lat-data[i].address.lat), 2)+Math.pow((that.state.lng-data[i].address.lng),2))
					console.log(distance);
					data[i].des = distance
					arr.push(data[i])

						
					}
					arr.sort(function(a, b){return b.des - a.des});
					console.log(arr)	
				}
			})
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
				 <button  onClick ={this.showNearest} type="button" className='btn btn-info btn-transparent homebtn'  >Nearest</button>

				 <br/>
				 <input placeholder="lat" onChange={this.onChangelat} />
				 <br/>
				 <input placeholder="lng"   onChange={this.onChangelng}/>
				 </div>
				 </div>
 				 </div>
				)
		}
} 
 


export default List;