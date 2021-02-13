import React, {Component} from 'react'
import './App.css';
import {CardList} from './components/cardlists/card-list.components'
  
      
class App extends Component{
  constructor(){
    super();

    this.state={
     Monsters:[ ]
    } 
  };
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({Monsters:users}));
  }
  
  render(){
    return (
      <div className="App">
         <CardList Monsters = {this.state.Monsters} />
      </div>
    );
  }
}

export default App;
