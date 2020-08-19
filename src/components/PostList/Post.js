import React         from 'react';
import DeleteIcon    from '@material-ui/icons/Delete';
import Grid          from '@material-ui/core/Grid';
import Paper         from '@material-ui/core/Paper';
import './post.css';

const Post = (props) => {
	return (
		<Grid className = 'post-row'>
			<Paper elevation = { 3 }>
				<Grid className ='post-row-body'  container>
					<Grid xs = { 10 } item>
						{props.post.text}
					</Grid>
					<Grid className = 'delete-post' variant='outline-primary' onClick={()=>props.delete(props.post.id)} xs = { 2 } align='right' item>
						<DeleteIcon/>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
		);
}

export default Post;
