// client/src/components/AddBook.js
import React, { useState } from 'react';                            // Imports React and useState hook.
import axios from 'axios';                                          // Imports Axios for making HTTP requests.

const AddBook = () => {                                             // Component for adding books.
  const [title, setTitle] = useState('');                           // Title state variable for form inputs.
  const [author, setAuthor] = useState('');                         // Author state variable for form inputs.
  const [description, setDescription] = useState('');               // Book description state variable for form inputs.
  const [publishedDate, setPublishedDate] = useState('');           // Published date state variable for form inputs.

  const handleSubmit = async (e) => {                               // Form submission handler for adding books.
    e.preventDefault();                                             // Prevents default form submission behavior.
    const newBook = { title, author, description, publishedDate };  // New book object.
    await axios.post('http://localhost:5000/books/add', newBook);   // Sends a POST request for the new book.
  };

  return (                                                          // Returns some JSX.
    <form onSubmit={handleSubmit}>                                  {/*On submission, run handleSubmit().*/}
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />                    {/*Binds the Title input value, handling changes and even placeholders.*/}
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />                 {/*Binds the Author input value, handling changes and even placeholders.*/}
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>  {/*Binds the Description input value using a textarea instead.*/}
      <input type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} />                        {/*Binds the publishedDate input value using a date input field instead.*/}
      <button type="submit">Add Book</button>                                                                               {/*Finally, a submit button labeled Add Book.*/}
    </form>                                                         // The form is done
  );                                                                // .
};

export default AddBook;                                             // Export this component.
