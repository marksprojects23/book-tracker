// client/src/components/ListBooks.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get('http://localhost:5000/books');
      setBooks(response.data);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author} - {book.description} ({book.publishedDate}) ID: {book._id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListBooks;
