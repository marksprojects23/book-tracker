// client/src/components/DeleteBook.js
import React, { useState } from 'react';        // Imports React as well as states.
import axios from 'axios';                      // Imports axios for HTTP requests.

const DeleteBook = () => {                      // Let's define how to delete books.
  const [id, setId] = useState('');             // We will use the inputted book ID as the state.

  const handleSubmit = async (e) => {           // When the Delete Book button is pressed,
    e.preventDefault();                         // the page is kept from refreshing,
    await axios.delete(`http://localhost:5000/books/delete/${id}`); // and then we send the DELETE request
  };                                            // .

  return (                                      // JSX.
    <form onSubmit={handleSubmit}>              {/*Upon submission of the form, handleSubmit() is called.*/}
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Book ID" />{/*The state is changed to whatever the inputted ID is, otherwise it's "Book ID".*/}
      <button type="submit">Delete Book</button>{/*The button will be labeled Delete Book.*/}
    </form>                                     // .
  );
};

export default DeleteBook;                      // Export this component.