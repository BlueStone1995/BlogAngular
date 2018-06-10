const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  image: String,
  title: String,
  content: String,
  loveIts: Number,
  created_at: Date
});


mongoose.model('posts', postSchema);
