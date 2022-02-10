const mongoose = require('mongoose');

// create mongoose schema
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Once the schema is created you then create the model
const PostMessage = mongoose.model('PostMessage', postSchema);

// then you export only the model
module.exports = PostMessage;
