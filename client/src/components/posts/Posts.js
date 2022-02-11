import React from 'react';
import PostItem from './postItem/PostItem';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles';
// get the posts (getting the state from the reducer)
import { useSelector } from 'react-redux';

function Posts() {
  // with useSelector you have access to the whole state in all the reducers, in this case you only have posts
  const posts = useSelector((state) => state.posts);

  const classes = useStyles();
  return !posts.lengt ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <PostItem post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
