const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Array of messages
const messages = [
    'Hello from my microservice!',
    'Welcome to my awesome microservice!',
    'This microservice is powered by Node.js and Express!'
];

// Route for the homepage
app.get('/', (req, res) => {
    // Generate a random message from the array
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    // Send the random message as the response
    res.send(randomMessage);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
