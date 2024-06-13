// client/src/App.js
import React from 'react';                        // Import React library to enable JSX and component functionalities.
import AddBook from './components/AddBook';       // Import the AddBook component to allow adding new books.
import ListBooks from './components/ListBooks';   // Import the ListBooks component to display the list of books.
import UpdateBook from './components/UpdateBook'; // Import the UpdateBook component to allow updating existing books.
import DeleteBook from './components/DeleteBook'; // Import the DeleteBook component to allow deleting books.

const App = () => {         // Define the main App component.
  return (                  // Return the JSX layout of the application
    <div>                   {/*Wrapper div for the entire application.*/}
      <h1>Book Tracker</h1> {/*Header of the application.*/}
      <AddBook />           {/*Component to add new books.*/}
      <ListBooks />         {/*Component to list all books.*/}
      <UpdateBook />        {/*Component to update existing books.*/}
      <DeleteBook />        {/*Component to delete books*/}
    </div>                  // .
  );
};

export default App;         // Export the App component as the default export