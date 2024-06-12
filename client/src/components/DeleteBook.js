// client/src/components/DeleteBook.js
import React, { useState } from 'react';
import axios from 'axios';

const DeleteBook = () => {
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:5000/books/delete/${id}`);
    // Handle success (e.g., clear form, show success message)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Book ID" />
      <button type="submit">Delete Book</button>
    </form>
  );
};

export default DeleteBook;
