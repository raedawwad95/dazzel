import React,{Component} from 'react';
import {MenuItem,ButtonToolbar,DropdownButton} from 'react-bootstrap';
import Rate from './Rate.jsx'
/*
* This is  an react component renders  the specialies using the DropdownButton and onSelect
*/
export default class Specialties extends Component{
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
<div id="home" className=" container spbutton">
<div className='row'>
   <div className='col-sm-4'>
	<ButtonToolbar >
		<DropdownButton className="btn btn-info  homebtn"  onSelect={this.onSelect} title ='choose specialty'
			noCaret
			id='dropdown-no-caret'>
				<MenuItem eventKey='otolaryngologists(ear,nose,throat)'>otolaryngologists(ear,nose,throat)</MenuItem>
				<MenuItem eventKey='cardiology(heart)'>cardiology(heart)</MenuItem>
				<MenuItem eventKey='neurologists(brain and nervus system)'>neurologists(brain and nervus system)</MenuItem>
				<MenuItem eventKey='opthalmologist(eye)'>opthalmologist(eye)</MenuItem>
				<MenuItem eventKey='Pulmonolgy (respiratory)'>Pulmonolgy (respiratory)</MenuItem>
				<MenuItem eventKey='general'>general </MenuItem>
				<MenuItem eventKey='dermatology(skin)'>dermatology(skin) </MenuItem>
				<MenuItem eventKey='Pediatric(children)'>Pediatric(children) </MenuItem>
				<MenuItem eventKey='allergologist'>allergologist </MenuItem>									
		</DropdownButton>
	</ButtonToolbar>
		<br/> <br/>
		<div style={{fontSize:16}} > {this.state.specialty}</div>
   </div>
<div className='col-sm-8'>
	<Rate specialty={this.state.specialty}/>
</div>
</div>
</div>		
</div>
		)
	}
}