import React from 'react';
import $ from 'jquery';
import Map from './Map.jsx'
/*
* This is  an react component shows the  highest  Doctor rate  
*/
class Rate extends React.Component{
	constructor(props){
		super(props)
			
		this.state={
			specialties:[]
        
        }

		this.showRate = this.showRate.bind(this);
		
	}


		

/*
* Ajax request fetch  the highet rate for  Doctors from  the data base  
*/		
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
				},
			error:function(err){
				console.log(err)

				}
			})
	    }
	}

				 
/*
* Render the highest Doctor rate and call Map file
*/	
	render(){
		return(

		<div>
			<div className="row">
				<div className="col-sm-6">
				 	<button  onClick ={this.showRate}type="button" className='btn btn-info btn-transparent  homebtn'>Rate</button>
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
 


export default Rate;