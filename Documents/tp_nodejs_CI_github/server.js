// server.js
const app = require('./app');  // Import the app from app.js
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});