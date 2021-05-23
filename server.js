const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

// Connect to MongoDB
connectDB();

const app = express();

// Init Middleware
app.use(express.json({ extended: false}));

const PORT = process.env.PORT || 5000;

// Define Routes here
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

// Serve Static files on production server
if(process.env.NODE_ENV === 'production') {
    // Set Static Folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

app.listen(PORT, () => console.log(`The Server started on port ${PORT}`));