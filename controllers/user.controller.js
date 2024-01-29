const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
dotenv.config();

// Function to generate JWT token
const generateToken = (user) => {
  return jwt.sign({ _id: user._id, username: user.username, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
};
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});


const userController = {
  // Signup
  signup: async function (req, res) {
    try {
      const { username, email, password } = req.body;

      // Check if the username or email already exists
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.status(400).json({ message: 'Username or email already exists.' });
      }

      // Create a new user
      const newUser = new User({ username, email, password });

      // Save the user to the database
      await newUser.save();

      // Generate a verification token
      const verificationToken = jwt.sign({ userId: newUser._id }, process.env.VERIFICATION_SECRET, {
        expiresIn: '1h', // Set an expiration time for the verification token
      });

      // Construct the verification link
      const verificationLink = `${process.env.CLIENT_URL}/verify-email/${verificationToken}`;

      // Send the verification email
      const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: 'Email Verification',
        text: `Click the following link to verify your email: ${verificationLink}`,
      };

      // Send verification email using nodemailer transporter
      await transporter.sendMail(mailOptions);

      res.status(201).json({ message: 'Account created successfully. Check your email for verification.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  // Login
  login: async function (req, res) {
    try {
      const { username, password } = req.body;

      // Find the user by username
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }

      // Check if the password is valid
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password.' });
      }

      // Generate JWT token
      const token = generateToken(user);

      // Return the token and user information
      res.status(200).json({ token, user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

module.exports = { userController };

