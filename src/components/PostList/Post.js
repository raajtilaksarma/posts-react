import React         from 'react';
import DeleteIcon    from '@material-ui/icons/Delete';
import Grid          from '@material-ui/core/Grid';
import Paper         from '@material-ui/core/Paper';
import './post.css';

const Post = (props) => {
	return (
		<Grid className = 'delete-post'>
			<Paper elevation = { 3 }>
				<Grid className ='delete-post-body'  container>
					<Grid xs = { 10 } item>
						{props.post.text}
					</Grid>
					<Grid variant='outline-primary' onClick={()=>props.delete(props.post.id)} xs = { 2 } align='right' item>
						<DeleteIcon/>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
		);
}

export default Post;
