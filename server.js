const express = require('express');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

const app = express();

// Init Middleware
app.use(express.json({ extended: false}));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({"msg": "Welcome to the Contact Manager API"});
});

// Define Routes here
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`The Server started on port ${PORT}`));