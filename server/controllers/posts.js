const mongoose = require('mongoose');
const PostMessage = require('../models/postMessage.js');
const { post } = require('../routes/posts');

const getPosts = async (req, res) => {
  try {
    // find the database with the messages
    const postMessages = await PostMessage.find();

    //return a json with the post messages(if empty it will return an empty array)
    res.status(200).json(postMessages);
  } catch (error) {
    // return the error message
    res.status(404).send({ message: error.message });
  }
};

const createPost = async (req, res) => {
  // with post you hve access to the body of the request then pass that to a new instance of a postMessage
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    // save the new post that was created into the database
    await newPost.save();
    // then we send this info to the request which was done on the front-end
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  // we will use the mongoose _id
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;
  // then we verify that the _id is valid and exists in the database
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  // if valid just locate the id and update it {new:true} to receive updated version of the post
  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
  // then we send this info to the request that was done on the front-end
  res.json(updatedPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);
  res.json({ message: 'Post deleted successfully' });
};

const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await PostMessage.findById(id);

  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );

  res.json(updatedPost);
};

module.exports = { getPosts, createPost, updatePost, deletePost, likePost };
