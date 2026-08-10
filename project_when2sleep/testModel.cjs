const mongoose = require('mongoose');
const User = require('./models/user.cjs');

if (!process.env.MONGODB_URI) {
  console.error('MONGODB_URI is required');
  process.exit(1);
}

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');

    try {
      const user = await User.findOneAndUpdate(
        { googleSubject: 'local-model-smoke-test' },
        { $set: { name: 'Test User' } },
        { new: true, runValidators: true, upsert: true },
      );
      console.log('User model smoke test passed:', user.id);
      await User.deleteOne({ googleSubject: 'local-model-smoke-test' });
    } catch (error) {
      console.error('Error testing user model:', error);
      process.exitCode = 1;
    } finally {
      await mongoose.disconnect();
    }
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exitCode = 1;
  });
