import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './List.jsx';
import ListItem from './ListItem.jsx';

class NewDoctor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      doctors: []
    }
  }

  componentDidMount(name,tel,address,email,rate,specialization) {
    if(name && tel && address && email && rate && specialization){
    $.ajax({
      type: 'POST',
      url: '/doctors',
      data :{name :name,specialization : specialization,email:email,address:address,rate:rate,tel:tel },
      success: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  }

  render () {
    return (<div>
      <h1>Item List</h1>
    <List />
      <ListItem AddDoctor={this.componentDidMount.bind(this)}/>
    </div>)
  }
}

export default NewDoctor;