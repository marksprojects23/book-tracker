// client/src/App.js
import React from 'react';
import AddBook from './components/AddBook';
import ListBooks from './components/ListBooks';
import UpdateBook from './components/UpdateBook';
import DeleteBook from './components/DeleteBook';

const App = () => {
  return (
    <div>
      <h1>Book Tracker</h1>
      <AddBook />
      <ListBooks />
      <UpdateBook />
      <DeleteBook />
    </div>
  );
};

export default App;
