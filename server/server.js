require('dotenv').config();                     // Loads environment variables from the .env file at root.
const express = require('express');             // Imports the Express.js framework.
const bodyParser = require('body-parser');      // Imports body-parser for parsing request bodies.
const mongoose = require('mongoose');           // Imports Mongoose because MongoDB.
const cors = require('cors');                   // Imports cors for cross-origin resource sharing.
const app = express();                          // Initializes the Express.js app,
const port = process.env.PORT || 5000;          // on Port 5000.

// Middleware
app.use(bodyParser.json());                     // Using body-parser for parsing JSON bodies.
app.use(cors());                                // Enabling cors.

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {     // Pulls the database connection avenue from .env.
  useNewUrlParser: true,                        // Parser to handle MongoDB connection strings.
  useUnifiedTopology: true,                     // Unified topology layer for robust connection handling
});                                             // .

const db = mongoose.connection;                 // A variable for the MongoDB connection.
db.on('error', console.error.bind(console, 'connection error:'));   // If error, log it.
db.once('open', () => {                         // If opened,
  console.log('Connected to MongoDB');          // log it
});                                             // .

// Routes
app.get('/', (req, res) => {                    // A simple route
  res.send('Hello World!');                     // for the root URL
});                                             // .
const booksRouter = require('./routes/books');  // Imports books routes
app.use('/books', booksRouter);                 // and then uses them for /books endpoint.


app.listen(port, () => {                        // Finally, we start the Express.js server
  console.log(`Server running on port ${port}`);// and log it down in the console
});                                             // .
