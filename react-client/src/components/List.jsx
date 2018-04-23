import React from 'react';
import ListItem from './ListItem.jsx';
import $ from 'jquery';
import {Jumbotron, Grid,Row,Col,Image,Button,MenuItem,ButtonToolbar,DropdownButton,Thumbnail} from 'react-bootstrap';

class List extends React.Component{
		constructor(props){
			super(props)
			this.showRate = this.showRate.bind(this)
			this.state={
			specialty:[],
		}
		}


			showRate(){
				var that = this;
		console.log(this.props.specialty)
		$.ajax({
			url:'/doctors/'+that.props.specialty,
			type:'GET',
			success:function(data){
				
				that.setState({
					specialty:data
				})
				
				console.log(that.state)
			},
			error:function(err){

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
				      	{this.state.specialty.map(function(spe,index){
				      		return(
				      			<div className="container ">
				      			<div className="jumbotron docInfo">
				      			<div className="card-body">
				      			<img src='../../photos/five.png' alt="Card image" id='docImg'/>                              
				      			<h1 className="card-title">{spe.name}</h1>
                                <p className="card-text">{spe.address}</p>
                                </div>
				      			</div>
				      			</div>
				      			)
				      	})}
				 </div>
				 <div className="col-sm-6">
				 <button  onClick ={this.showNearest} type="button" className='btn btn-info btn-transparent homebtn'  >Nearest</button>

				 </div>
				 </div>
 				 </div>
				)
		}
} 
 


export default List;