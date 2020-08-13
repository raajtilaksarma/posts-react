import React, { Component } from 'react';
import './App.css';
// import { Button, Card } from 'react-bootstrap'
import PostForm from './components/PostForm/PostForm'
import PostList from './components/PostList/PostList';

class App extends Component {
  state = { 
    text: 'Hello world from the state'
   }
  render() { 
    return ( 
      <div className="App">
        <PostForm/>
          <hr/>
            <PostList />
      </div>
     );
  }
}

export default App;
