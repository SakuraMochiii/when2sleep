import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './components/signIn.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="7711428769-lqr79c15vlc9i2jgll2hlvir8pnvp1vq.apps.googleusercontent.com">
    <AuthProvider>
    <App />
    </AuthProvider>
    </GoogleOAuthProvider>;
  </React.StrictMode>,
);
