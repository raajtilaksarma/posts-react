import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class PostForm extends Component {
    state = { 
        post : '',
     }
    
    postChangeHandler = (e) => {
        this.setState({post : e.target.value})
    }

    createPostHandler = (e) => {
        e.preventDefault()
        console.log('click')
        const post = this.state.post
        if (post.length>0) {
            // pass from child to parent
            this.props.add(post)
            this.setState({post : ''})
        }
    }

    render() { 
        return ( 
            <Form onSubmit={this.createPostHandler}>
                <h3>Add a post</h3>
                <input type='text' className='form-control' value={this.state.post} onChange={this.postChangeHandler}/>
                <Button type='submit' size='lg' variant='info' className='mt-2'>Submit</Button>
            </Form>
         );
    }
}
 
export default PostForm;