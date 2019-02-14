import React, { Component } from 'react';
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
  pushArray = () => {
    var item = {
        "id":3,
        "name":"Binh",
        "age":"20"
    }
    var myArray = this.state.data.slice();
    myArray.push(item);
    this.setState({data:myArray})
  }
  render() {
    return (
      <div className="App">
        <ListContext.Provider value = {this.state.data}>
          <Table/>
        </ListContext.Provider>
        <button onClick = {this.pushArray}>
                    Click me
        </button>
      </div>
    );
  }
}

export default App;
