import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';

class App extends Component {
  state = {
    users: null
  }

  getUser = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    Axios.get(`http://localhost:8080/users/${name}`)
      .then(res => {
        this.setState({ users: res.data })
        console.log(res.data);//res.data liste geliyor.
      }).catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">REACT REST Client</h1>
        </header>
        <UserForm getUser={this.getUser} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
