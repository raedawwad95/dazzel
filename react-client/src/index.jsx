import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import ListItem from './components/ListItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      doctors: []
    }
  }

  componentDidMount(name,tel,address,email,rate,specialization) {
    $.ajax({
      type: 'POST',
      url: '/doctors',
      data :{name :name,specialization : specialization,email:email,address:address,rate:rate,tel:tel },
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
      <ListItem AddDoctor={this.componentDidMount.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));