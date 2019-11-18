import React from 'react';
import './App.css';
import ContactList from './ContactList.js';
import Feed from './Feed';

function App() {
  return (
    <div className='App-Div'>
      <Feed />
      <ContactList />
    </div>
  );
}

export default App;
