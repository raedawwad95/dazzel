import React,{Component} from 'react';
import {Jumbotron, Navbar,Nav,NavItem,Grid,Row,Col,Image,Button,MenuItem,ButtonToolbar,DropdownButton,Thumbnail} from 'react-bootstrap';
import $ from 'jquery';
 import List from './List.jsx'


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
			  <Navbar.Header>
    
      <NavItem ><img src='../../photos/Logo.jpg'id='Logo'/>
      </NavItem>
   
  </Navbar.Header>
				
	</Nav>
  <Nav pullRight bsStyle="tabs "    >
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
			<MenuItem eventKey='Eyes'>Eyes</MenuItem>
			<MenuItem eventKey='2'>nose</MenuItem>
			<MenuItem eventKey='3'>head</MenuItem>
			<MenuItem eventKey='4'>ear</MenuItem>
			<MenuItem eventKey='5'>Eyesss</MenuItem>
			<MenuItem eventKey='6'>noseee</MenuItem>

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
<a type="button" className="btn-floating btn-lg btn-fb"><i className="fa fa-facebook"></i></a>
 				
 			</div>
			</div>
		)
	}
}