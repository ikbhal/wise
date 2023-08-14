const express = require('express');
const app = express();
const port = 3040;

app.use(express.static('public'));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, welcome to wise.rontohub.com!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
