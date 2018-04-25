import React,{Component} from 'react';
import {Jumbotron, Navbar,Nav,NavItem,Grid,Row,Col,Image,Button,MenuItem,ButtonToolbar,DropdownButton,Thumbnail} from 'react-bootstrap';
import $ from 'jquery';
 import List from './List.jsx'
import { SocialIcon } from 'react-social-icons';


export default class Home extends Component{

	constructor(props){
		super(props)
		this.state={
			specialty:'',
		}
		this.onSelect=this.onSelect.bind(this)
		
	}

	onSelect(e){
		this.setState({
			specialty:e
		})
	}
	render(){
			
		return (
			<div>
			<Navbar>
			<Nav >
    
      <NavItem ><img src='../../photos/Logo.jpg'id='Logo'/>
      </NavItem>
   
 
	</Nav>
  <Nav pullRight >
    <NavItem className='btn  navbtn' eventKey='home' href='#home'>
      Home
    </NavItem>
    <NavItem  className='btn navbtn'  eventKey='about' href ='#about'>
    
      About
      
    </NavItem>
    
  </Nav>
</Navbar>
			<div className="devImg">
				<img className="img" src='../photos/240_F_115928369_E2yDqT2WqvoKl6XmsmL6Yitlb6j9Lh1Q.jpg' /> 
			</div>
			<div id="home" className=" container spbutton">
			
			
			<div className='row'>
			<div className='col-sm-4'>
			<ButtonToolbar >

			<DropdownButton className="btn btn-info  homebtn" bsStyle='default' onSelect={this.onSelect}title ='choose specialty'
			noCaret
			id='dropdown-no-caret'>
			<MenuItem eventKey='otolaryngologists(ear,nose,throat)'>otolaryngologists(ear,nose,throat)</MenuItem>
			<MenuItem eventKey='cardiology (heart)'>cardiology(heart)</MenuItem>
			<MenuItem eventKey='neurologists(brain and nervus system)'>neurologists(brain and nervus system)</MenuItem>
			<MenuItem eventKey='opthalmologist(eye)'>opthalmologist(eye)</MenuItem>
			<MenuItem eventKey='Pulmonolgy (respiratory)'>Pulmonolgy (respiratory)</MenuItem>
			<MenuItem eventKey='general'>general </MenuItem>
			<MenuItem eventKey='dermatology(skin)'>dermatology(skin) </MenuItem>
			<MenuItem eventKey='Pediatric(children)'>Pediatric(children) </MenuItem>
			<MenuItem eventKey='allergologist'>allergologist </MenuItem>
			


			</DropdownButton>
			</ButtonToolbar>
			</div>
			<div className='col-sm-8'>
				<List specialty={this.state.specialty}/>
				</div>
			
				</div>
			</div>
			<hr/>
 			<div className='container about' id='about'>
 				
 					<h2> Contact Us :</h2>
 					
<SocialIcon url='http://twitter.com'  />
<SocialIcon url='http://facebook.com' />
<SocialIcon url='http://slack.com'/> 
<SocialIcon url='http://github.com'  /> 


 				
 			</div>
			</div>
		)
	}
}