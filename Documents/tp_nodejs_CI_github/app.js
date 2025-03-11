// app.js
const express = require('express');
const app = express();

// Define a route that responds with "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app;  // Export the app to be used in server.js
