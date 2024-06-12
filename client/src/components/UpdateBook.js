// client/src/components/UpdateBook.js
import React, { useState } from 'react';
import axios from 'axios';

const UpdateBook = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [publishedDate, setPublishedDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBook = { title, author, description, publishedDate };
    await axios.put(`http://localhost:5000/books/update/${id}`, updatedBook);
    // Handle success (e.g., clear form, show success message)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Book ID" />
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
      <input type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} />
      <button type="submit">Update Book</button>
    </form>
  );
};

export default UpdateBook;
