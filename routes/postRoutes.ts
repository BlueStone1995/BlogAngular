import { Router } from 'express';

const mongoose = require('mongoose');
const Post = mongoose.model('posts');
const requireLogin = require('../middlewares/requireLogin');

const postRoutes = Router();

postRoutes.get('/posts', (req, res) => {
  res.send('posts');
});

postRoutes.get('/posts/new', (req, res) => {
  res.send('New post');
});

postRoutes.get('/posts/view/:id', async (req, res) => {
  res.send('post');
});

export {postRoutes};
