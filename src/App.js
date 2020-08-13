import React, { Component } from 'react';
import './App.css';
// import { Button, Card } from 'react-bootstrap'
import PostForm from './components/PostForm/PostForm'
import PostList from './components/PostList/PostList';
import { Container } from 'react-bootstrap';
import cuid from 'cuid';

class App extends Component {
  state = { 
    posts : [],
    viewPosts : false
   }

  viewPostsHandler = () => {
    const viewPostCurrentState = this.state.viewPosts
    this.setState({viewPosts : !viewPostCurrentState})
  }

  addPost = (text) => {
    const new_post = {
      id : cuid(),
      text : text,
    }
    const posts = [...this.state.posts, new_post]
    this.setState({posts : posts})
  }

  deletePostHandler = (id)=> {
    let posts = [...this.state.posts]
    posts  = posts.filter(post=>post.id !== id)
    this.setState({posts})
  } 

  render() { 
    return ( 
      <Container>
        <PostForm add={this.addPost}/>
          <hr/>
            <PostList 
            posts = {this.state.posts} 
            status={this.state.viewPosts} 
            viewPost={this.viewPostsHandler}
            delete={this.deletePostHandler}
            />
      </Container>
     );
  }
}

export default App;
