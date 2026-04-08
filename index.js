const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
    res.status(200).send('Hello! The backend is running successfully on Vercel.');
});

// Sample API endpoint
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];
    res.status(200).json(users);
});

// Sample POST endpoint
app.post('/api/data', (req, res) => {
    const data = req.body;
    res.status(201).json({
        message: 'Data received successfully',
        receivedData: data
    });
});

// Local development server setup
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Local server is running on port ${PORT}`);
    });
}

// CRITICAL: Export the app for Vercel's serverless environment
module.exports = app;