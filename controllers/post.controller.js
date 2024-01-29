const Post = require('../models/post.model');
const authMiddleware = require('../middlewares/auth.Middleware');
const User = require('../models/user.model');
const postController = {
  // Create Post
  createPost: [authMiddleware, async (req, res) => {
    try {
      const { title, content, imageUrl } = req.body;
      const authorId = req.user._id;

      const newPost = new Post({
        title,
        content,
        author: authorId,
        imageUrl,
      });

      await newPost.save();

      res.status(201).json({ post: newPost });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }],

  // Get Single Post
  getPost: async (req, res) => {
    try {
      const postId = req.params.postId;

      const post = await Post.findById(postId).populate('author');

      if (!post) {
        return res.status(404).json({ message: 'Post not found.' });
      }

      res.status(200).json({ post });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  // List Posts
  listPosts: async (req, res) => {
    try {
      const posts = await Post.find().populate('author');

      res.status(200).json({ posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  // Update Post
  updatePost: [authMiddleware, async (req, res) => {
    try {
      const postId = req.params.postId;
      const { title, content, imageUrl } = req.body;
      const authorId = req.user._id;

      // Check if the user is the author of the post
      const post = await Post.findById(postId);
      if (!post || post.author.toString() !== authorId.toString()) {
        return res.status(403).json({ message: 'You do not have permission to update this post.' });
      }

      // Update the post
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { title, content, imageUrl },
        { new: true }
      ).populate('author');

      res.status(200).json({ post: updatedPost });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }],

  // Delete Post
  deletePost: [authMiddleware, async (req, res) => {
    try {
      const postId = req.params.postId;
      const authorId = req.user._id;

      // Check if the user is the author of the post
      const post = await Post.findById(postId);
      if (!post || post.author.toString() !== authorId.toString()) {
        return res.status(403).json({ message: 'You do not have permission to delete this post.' });
      }

      // Delete the post
      await Post.deleteOne({ _id: postId });

      res.status(200).json({ message: 'Post deleted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }],
};

module.exports = postController;

