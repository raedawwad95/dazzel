import React,{Component} from 'react';
import { Navbar,Nav,NavItem,Carousel} from 'react-bootstrap';
 import Specialties from './Specialties.jsx'
import { SocialIcon } from 'react-social-icons';

/*
* This is  an react-bootstrap component Design .
*/
export default class Home extends Component{
	
	render(){
			
		return (
			<div>
				<Navbar className='divNav'> 

				<Navbar.Header>
    				<Navbar.Brand >
     					 <a  className='header'href="#home"><strong>Doctory</strong></a>
    				</Navbar.Brand>
  				</Navbar.Header>
						
	 				<Nav pullRight className='nav' >
	    				<NavItem className='  nav' eventKey='home' href='#home'>
	      					<p>Home</p>
	    				</NavItem>
	    				<NavItem  className='  nav'  eventKey='about' href ='#about'>
	      					<p>about</p>
	    				</NavItem>
	  				</Nav>
  				</Navbar>
				<div className="devImg" >
					<Carousel >
					  <Carousel.Item className="img">
					    <img   className="img"  src="../photos/240_F_115928369_E2yDqT2WqvoKl6XmsmL6Yitlb6j9Lh1Q.jpg" />
					  </Carousel.Item>
					  <Carousel.Item className="img" >
					    <img  className="img" alt="900x500" src="../photos/md_experienceddoctors.jpg"/>
					  </Carousel.Item>
					  <Carousel.Item className="img">
					    <img className="img" alt="900x500" src="../photos/dr-toddler-ear-exam-500px.jpg" />
					   
					  </Carousel.Item>
					</Carousel>
				</div>
					<div>
				<Specialties/>
				</div>
	
				<footer className="navbar-fixed-bottom footer">
					<div className="container">
						<div className="row">
							 <h4> Contact Us :</h4>
                    
                    <SocialIcon url='http://twitter.com'  />
                    <SocialIcon url='http://facebook.com' />
                    <SocialIcon url='http://slack.com'/> 
                    <SocialIcon url='http://github.com'  />


                
						</div>
					</div>
				</footer>

			</div>

		)
	}
}



