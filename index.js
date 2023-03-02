const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// Set up MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Create user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Create user model
const User = mongoose.model('User', userSchema);

// Define API routes
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.post('/users', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.send(newUser);
});

// Start server
app.listen(3020, () => console.log('Server started on port 3020'));
