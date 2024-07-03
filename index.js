const express = require('express');
const bodyParser = require('body-parser');
const { generateResponse } = require('./blk'); // Import the generateResponse function

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000
const apiKey = 'AIzaSyCjDXOsQjj_cpjKKHCDAooLnLAzT8EOtX0'; // Replace with your actual Google Generative AI API key (security risk)

app.use(bodyParser.json()); // Allow parsing JSON data from requests

app.post('/generate', async (req, res) => {
  const userInput = req.body.userInput; // Get user input from the request body
  const response = await generateResponse(userInput, apiKey); // Pass the API key directly (security risk)
  res.json(response); // Send the babysitter response as JSON
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/blk.html'); // Send the babysitter.html file on root path
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
