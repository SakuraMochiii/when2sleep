const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const { rateLimit } = require('express-rate-limit');
const { OAuth2Client } = require('google-auth-library');
const User = require('./models/user.cjs');

const app = express();
const port = process.env.PORT || 3000;
const googleClient = new OAuth2Client();
const allowedOrigins = new Set(
  (process.env.CORS_ORIGINS || 'http://localhost:5173,https://sakuramochiii.github.io')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
);

app.disable('x-powered-by');
app.use(helmet());
app.use(express.json({ limit: '10kb', strict: true }));
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error('Origin not allowed by CORS'));
  },
}));

app.post('/login', rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 50,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
}), async (req, res) => {
  const { credential } = req.body || {};
  if (typeof credential !== 'string' || credential.length === 0 || credential.length > 4096) {
    return res.status(400).json({ message: 'A valid Google credential is required' });
  }

  let payload;
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    payload = ticket.getPayload();
  } catch (error) {
    console.warn('Rejected invalid Google credential:', error.message);
    return res.status(401).json({ message: 'Invalid Google credential' });
  }

  if (!payload?.sub || !payload?.name) {
    return res.status(401).json({ message: 'Google account is missing required profile data' });
  }

  try {
    const user = await User.findOneAndUpdate(
      { googleSubject: payload.sub },
      {
        $set: {
          name: payload.name,
        },
      },
      {
        new: true,
        runValidators: true,
        setDefaultsOnInsert: true,
        upsert: true,
      },
    );

    return res.status(200).json({
      message: 'User saved',
      user: {
        id: user.id,
        name: user.name,
      },
    });
  } catch (error) {
    console.error('Error saving authenticated user:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.use((error, req, res, next) => {
  if (error.message === 'Origin not allowed by CORS') {
    return res.status(403).json({ message: error.message });
  }

  console.error('Unhandled request error:', error);
  return res.status(500).json({ message: 'Internal Server Error' });
});

async function start() {
  const requiredEnvironment = ['MONGODB_URI', 'GOOGLE_CLIENT_ID'];
  const missingEnvironment = requiredEnvironment.filter((name) => !process.env[name]);

  if (missingEnvironment.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvironment.join(', ')}`);
  }

  await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
  });
  console.log('MongoDB connected with Mongoose');

  return app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

if (require.main === module) {
  start().catch((error) => {
    console.error('Server startup failed:', error.message);
    process.exitCode = 1;
  });
}

module.exports = { app, start };
