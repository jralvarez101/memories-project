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
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

module.exports = { getPosts, createPost };
