import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NewDoctor from './components/NewDoctor.jsx'

import ListItem from './components/ListItem.jsx'




const AdminLogIn = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/admin" component={Admin} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

class Admin extends React.Component{
  constructor(props){
  super(props);
  this.state ={
    userName:'',
    password:'',
    redirect:false
  }
  this.onChangeUserName = this.onChangeUserName.bind(this)
  this.onChangePassword = this.onChangePassword.bind(this)
  this.Login = this.Login.bind(this)


}
onChangeUserName(e){
  this.setState({
    userName:e.target.value
  })
}
onChangePassword(e){
  this.setState({
    password:e.target.value
  })
}
Login(){
  $.ajax({
    type :'GET',
    url : '/doctors',
    success: (data) => {
//I'm just trying ,,We need a new table for Admin  'userName','password'
      for (var i = 0; i < data.length; i++) {
       if(this.state.userName===data[i].name && this.state.password===data[i].password){
    this.setState({
      redirect:true
    })
    break;
      }
      
        
  }
      },
      error: (err) => {
        console.log('err', err);
      }
  })
}
render(){


  const { redirect } = this.state;

     if (redirect) {
       return <NewDoctor/>;
     }
  return(
 <div>
      User Name :<br/>
  <input type="text" name="username" id="username" onChange={this.onChangeUserName}/>
  <br/><br/>
  Password :<br/>
  <input type="password" name="password" id="password" onChange={this.onChangePassword}/>
  <br/>
  <br/>
  <input type="button" value="Login" id="submit" onClick={this.Login}/>

  </div>


    )
}
} 
 


export default AdminLogIn;
