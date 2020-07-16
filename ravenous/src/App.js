import React from 'react';
import logo from './logo.svg';
import SearchBar from './components/SearchBar/SearchBar.js';
import BusinessList from './components/BusinessList/BusinessList.js';
import './App.css';


function App() {
  return (
    <div class="App">
      <h1>ravenous</h1>
      <SearchBar/>
      <BusinessList/>
    </div>
  );
}

export default App;
