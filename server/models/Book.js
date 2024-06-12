// server/models/Book.js
const mongoose = require('mongoose');           // Mongoose because we are operating with MongoDB.

const bookSchema = new mongoose.Schema({        // To interact with the database, we set up the schema structure in the backend.
  title: { type: String, required: true },      // We will need a required title,
  author: { type: String, required: true },     // and a required author for a book.
  description: String,                          // Optionally, we can have a book description,
  publishedDate: Date,                          // and the date the book was published
});                                             // .

const Book = mongoose.model('Book', bookSchema);// Once the model is created,
module.exports = Book;                          // export.
