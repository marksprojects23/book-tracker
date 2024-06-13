import React, { useState } from 'react';                  // Import React and useState hook from the 'react' library.
import axios from 'axios';                                // Import axios for making HTTP requests.


const UpdateBook = () => {                                // Define the UpdateBook component.
  const [id, setId] = useState('');                       // State for book ID.
  const [title, setTitle] = useState('');                 // State for book title.
  const [author, setAuthor] = useState('');               // State for book author.
  const [description, setDescription] = useState('');     // State for book description.
  const [publishedDate, setPublishedDate] = useState(''); // State for book published date.

  const handleSubmit = async (e) => {                     // Function to handle form submission.
    e.preventDefault();                                   // Prevent the default form submission behavior.
    const updatedBook = { title, author, description, publishedDate };        // Create an updatedBook object with the state values.
    await axios.put(`http://localhost:5000/books/update/${id}`, updatedBook); // Send a PUT request to the server to update the book
  };                                                      // .

  return (                                                // Return the form JSX.
    <form onSubmit={handleSubmit}>                        {/*Form submission is handled by handleSubmit.*/}
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Book ID" />                      {/*Input field for Book ID.*/}
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />                  {/*Input field for Book Title.*/}
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />               {/*Input field for Book Author.*/}
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>{/*Textarea for Book Description.*/}
      <input type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} />                      {/*Input field for Book Published Date.*/}
      <button type="submit">Update Book</button>          {/*Button to submit the form*/}
    </form>                                               // .
  );
};

export default UpdateBook;                                // Export the UpdateBook component as the default export