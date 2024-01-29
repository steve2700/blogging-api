const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

// Create Post
router.post('/posts', postController.createPost);

// Get Single Post
router.get('/posts/:postId', postController.getPost);

// List Posts
router.get('/posts', postController.listPosts);

// Update Post
router.put('/posts/:postId', postController.updatePost);

// Delete Post
router.delete('/posts/:postId', postController.deletePost);

module.exports = router;

