import React from 'react';

class ListItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name:'',
			specialization:'',
			address : '',
			tel : 0,
			email:'',
			rate : 0
		}
		this.onChangeName = this.onChangeName.bind(this)
		this.onChangeSpe = this.onChangeSpe.bind(this)
		this.onChangeAddress = this.onChangeAddress.bind(this)
		this.onChangeTel= this.onChangeTel.bind(this)
		this.onChangeEmail = this.onChangeEmail.bind(this)
		this.onChangeRate = this.onChangeRate.bind(this)


	}
	onChangeName(e){
		this.setState({
			name:e.target.value
		})
	}
	onChangeSpe(e){
		this.setState({
			specialization:e.target.value
		})
	}
	onChangeAddress(e){
		this.setState({
			address:e.target.value
		})
	}
	onChangeTel(e){
		this.setState({
			tel:e.target.value
		})
	}
	onChangeRate(e){
		this.setState({
			rate:e.target.value
		})
	}
	onChangeEmail(e){
		this.setState({
			email:e.target.value
		})
	}


	addDoc(){
		this.props.AddDoctor(this.state.name,this.state.specialization,this.state.address,this.state.email,this.state.rate,this.state.tel)
	}

	render(){

		return (
			<div>
			Name : <input value={this.props.name} onChange></input>
			Specialization : <input value={this.props.specialization} onChange></input>
			Address : <input value={this.props.address} onChange></input>
			Tel : <input value={this.props.tel} onChange></input>
			Email : <input value={this.props.email} onChange></input>
			Rate :<input value={this.props.rate} onChange></input>
			<button onClick={this.addDoc}> Add Doctor </button>
			</div>


			)
	}
}

export default ListItem;