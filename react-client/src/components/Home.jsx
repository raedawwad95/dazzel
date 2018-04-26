import React,{Component} from 'react';
import { Navbar,Nav,NavItem} from 'react-bootstrap';
 import Specialties from './Specialties.jsx'
import { SocialIcon } from 'react-social-icons';

/*
* This is  an react-bootstrap component Design .
*/
export default class Home extends Component{
	
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
	      					about
	    				</NavItem>
	  				</Nav>
  				</Navbar>
				<div className="devImg">
				<img className="img" src='../photos/240_F_115928369_E2yDqT2WqvoKl6XmsmL6Yitlb6j9Lh1Q.jpg' /> 
				</div>
			
				<Specialties/>

			</div>
		)
	}
}