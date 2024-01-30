// server.js
const express = require ('express');
const mongoose = require ('mongoose');
const dotenv = require  ('dotenv');
const cookieParser = require ('cookie-parser');
const userRoutes = require ('./routes/user.routes.js');
const postRoutes = require('./routes/post.routes');



dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
  //useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB, you can now start to test your endpoint');
});

// Routes
app.use('/api/users', userRoutes);
// use this for post
app.use('/api', postRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

