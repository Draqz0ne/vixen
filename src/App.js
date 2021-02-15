import React, {Component} from 'react'
import './App.css';
import {CardList} from './components/cardlists/card-list.components'
import {SearchBox} from './components/search-box/searchbox.components'
  
      
class App extends Component{
  constructor(){
    super();

    this.state={
     Monsters:[  ],
     searchField: ''
    } 
  };
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({Monsters:users}));
  }
  
  render(){
    const {Monsters, searchField} = this.state;
    const filteredMonsters = Monsters.filter(Monster=> Monster.name.toLowerCase().includes(searchField.toLowerCase(), Monster=>Monster.email.toLowerCase().includes.toLowerCase(searchField.toLowerCase)))
    return (
      <div className="App">
        <SearchBox 
          placeholder = 'Search Monsters'
          handleChange = {e => this.setState({searchField:e.target.value})}
        />
         <CardList Monsters = {filteredMonsters} />
      </div>
    );
  }
}

export default App;
