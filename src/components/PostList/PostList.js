import React from 'react';
import Post from './Post';
import { Button } from 'react-bootstrap'

const PostList = (props) => {
    return ( 
    <>
        <Button onClick={props.viewPost} variant='primary'> {props.status ? 'Hide posts':'View posts'} </Button>
        {props.status &&
            props.posts.map(post=>{
                return <Post key={post.id} post={post} delete={props.delete}/>
            })}
    </>
     );
    
}
 
export default PostList;