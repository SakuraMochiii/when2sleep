const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user.cjs'); 
const cors = require('cors');
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://elaineliang0124:P37zxcLEqYK8OLcB@yeelainee.fbylql0.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log("MongoDB connected with Mongoose"))
  .catch(err => console.error("MongoDB connection error:", err));


app.use(express.json());
app.use(cors());

app.post('/login', async (req, res) => {
  try {
    console.log('Request body:', req.body); 
    const { name } = req.body;
    const user = new User({ name: 'Static Name' });
    await user.save();
    res.status(200).json({ message: "User saved", user });
  } catch (error) {
    console.error("Error in /login route:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



