const express = require('express');
const passport = require('./auth');

const app = express();
const PORT = process.env.PORT || 3000;

const gmailRouter = require('./Routes/gmail'); // Import Gmail route
const outlookRouter = require('./Routes/outlook'); // Import Outlook route

app.use('/emails', gmailRouter); // Mount Gmail route
app.use('/emails', outlookRouter); // Mount Outlook route

// Route to initiate Google OAuth authentication
app.get('/auth/google', passport.authenticate('google', { scope: ['email'] }));

// Callback URL for Google OAuth authentication
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  // Redirect or respond with success message
  res.send('Google authentication successful!');
});

// Route to initiate Outlook OAuth authentication
app.get('/auth/outlook', passport.authenticate('outlook'));

// Callback URL for Outlook OAuth authentication
app.get('/auth/outlook/callback', passport.authenticate('outlook', { failureRedirect: '/' }), (req, res) => {
  // Redirect or respond with success message
  res.send('Outlook authentication successful!');
});

// Default route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
