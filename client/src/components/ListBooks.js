// client/src/components/ListBooks.js
import React, { useState, useEffect } from 'react';   // Import necessary modules from React,
import axios from 'axios';                            // and axios.

const ListBooks = () => {                             // Define the ListBooks component.
  const [books, setBooks] = useState([]);             // Declare a state variable 'books' to store the list of books.

  const fetchBooks = async () => {                    // Function to fetch books from the server.
    try {                                             // Try,
      const response = await axios.get('http://localhost:5000/books');// making a GET request to the server to fetch the books,
      setBooks(response.data);                        // and then updating the state variable 'books' with the fetched data.
    } catch (err) {                                   // Otherwise,
      console.error('Error fetching books:', err);    // Log any errors that occur during the fetch
    }                                                 // .
  };

  useEffect(() => {                                   // Using useEffect so we can perform side effects.
    fetchBooks();                                     // Initial fetch.
    const intervalId = setInterval(fetchBooks, 5000); // Fetch every 5 seconds.

    return () => clearInterval(intervalId);           // Cleanup function to clear the interval when the component unmounts
  }, []);                                             // .

  return (                                            // Return the JSX to render the component.
    <div>                                             {/*div.*/}
      <h2>Book List</h2>                              {/*Heading for the book list.*/}
      <ul>                                            {/*Unordered list to display the books.*/}
        {books.map((book) => (                        // Map over the 'books' state variable to create a list item for each book.
          <li key={book._id}>                         {/*Each list item must have a unique key, here it is 'book._id'.*/}
            {book.title} by {book.author} - {book.description} ({book.publishedDate}) ID: {book._id}{/*Display the book's title, author, description, published date, and ID*/}
          </li>                                       // .
        ))}
      </ul>
    </div>
  );
};

export default ListBooks;                             // Export the ListBooks component as the default export