import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContext from './context';
import Table from './Table';
class App extends Component {
  state = {
    data : [
      {
        "id":1,
        "name":"Foo",
        "age":"20"
     },
     {
        "id":2,
        "name":"Bar",
        "age":"30"
     },
     {
        "id":3,
        "name":"Baz",
        "age":"40"
     }
    ]
  }
  render() {
    return (
      <div className="App">
        <ListContext.Provider value = {this.state.data}>
          <Table/>
        </ListContext.Provider>
      </div>
    );
  }
}

export default App;
