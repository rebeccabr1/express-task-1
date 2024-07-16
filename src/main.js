
const express = require('express');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3034;

// Middleware
app.use(express.json()); // To parse JSON bodies

// Routes
app.use('/api/todos', todoRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Todo API');
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
