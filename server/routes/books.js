// server/routes/books.js
const express = require('express');               // We are using Express.js,
const router = express.Router();        			    // and its routing features,
const Book = require('../models/Book'); 			    // and using our Book.js model.

// Create a new book
router.post('/add', async (req, res) => {			    // Defines a route for adding books via POST.
  const { title, author, description, publishedDate } = req.body;           // The body is a JSON object consisting of these keys.
  const newBook = new Book({ title, author, description, publishedDate });  // The information will be put into our Book.js model instance.
  try {												                    // Try,
    const savedBook = await newBook.save();		    // saving our stored book,
    res.status(201).json(savedBook);				      // and then contacting the database to see if it saved.
  } catch (err) {							                    // Otherwise,
    res.status(400).json({ message: err.message });	// relay the error message back
  }													                      // .
});

// Get all books
router.get('/', async (req, res) => {				      // Defines a route for displaying all books via GET.
  try {												                    // Try,
    const books = await Book.find();				      // finding any books
    res.json(books);								              // from our, hopefully, functioning cloud database.
  } catch (err) {									                // Otherwise,
    res.status(500).json({ message: err.message });	// relay the error message back
  }													                      // .
});

// Update a book
router.put('/update/:id', async (req, res) => {   // Defines a route for updating a book's information via PUT and an identifier.
  try {												                    // Try,
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });// finding the book via its ID,
    res.json(updatedBook);							          // and then pushing it to the database.
  } catch (err) {									                // Otherwise,
    res.status(400).json({ message: err.message });	// relay the error message back
  }													                      // .
});

// Delete a book
router.delete('/delete/:id', async (req, res) => {// Defines a route for deleting a book from the database via DELETE and an identifier.
  try {												                    // Try,
    await Book.findByIdAndDelete(req.params.id);  // finding and deleting the book via its ID,
    res.json({ message: 'Book deleted' });			  // and then relaying that the book has been deleted.
  } catch (err) {									                // Otherwise,
    res.status(500).json({ message: err.message }); // relay the error message back
  }													                      // .
});

module.exports = router;							            // Our routes are done.