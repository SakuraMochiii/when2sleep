# When2Sleep

## Local setup

Requires Node.js 20.19 or newer.

1. Copy `.env.example` to `.env` and replace the placeholder values.
2. Start the API with environment variables loaded:

   ```sh
   node --env-file=.env server.cjs
   ```

3. In another terminal, start the frontend:

   ```sh
   npm run dev
   ```

The API verifies Google ID tokens before writing user data. `MONGODB_URI` and
`GOOGLE_CLIENT_ID` are required by the server. Use `CORS_ORIGINS` as a
comma-separated allowlist for browser origins.
