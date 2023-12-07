// testModel.js
const mongoose = require('mongoose');
const User = require('./models/user.cjs'); 

mongoose.connect('mongodb+srv://elaineliang0124:P37zxcLEqYK8OLcB@yeelainee.fbylql0.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Connected to MongoDB");

    try {
      const user = new User({ name: 'Test User' });
      await user.save();
      console.log("User saved:", user);
    } catch (error) {
      console.error("Error saving user:", error);
    } finally {
      await mongoose.disconnect();
    }
  })
  .catch(err => console.error("MongoDB connection error:", err));
