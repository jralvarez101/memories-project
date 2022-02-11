import React from 'react';
import PostItem from './postItem/PostItem';
import useStyles from './styles';
// get the posts (getting the state from the reducer)
import { useSelector } from 'react-redux';

function Posts() {
  // with useSelector you have access to the whole state in all the reducers, in this case you only have posts
  const posts = useSelector((state) => console.log(state.posts));

  const classes = useStyles();
  return (
    <>
      Posts
      <PostItem />
      <PostItem />
    </>
  );
}

export default Posts;
