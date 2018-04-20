import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
  if(this.state.userName==='raed' && this.state.password==='123'){
    this.setState({
      redirect:true
    })
  }
}
render(){
  const { redirect } = this.state;

     if (redirect) {
       return <ListItem />;
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
