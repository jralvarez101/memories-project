import React from 'react';
import PostItem from './postItem/PostItem';
import useStyles from './styles';

function Posts() {
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
