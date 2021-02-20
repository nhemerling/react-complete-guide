import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Nicholas', age: 29 },
      { name: 'Belinda', age: 32 },
      { name: 'Alexander', age: 21 },
    ],
    otherState: 'some other value',
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Bel', age: 33 },
        { name: 'Ali', age: 22 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Nicholas', age: 29 },
        { name: event.target.value, age: 33 },
        { name: 'Alexander', age: 22 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.switchNameHandler('Nicoco')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Nicholas Picholas')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
