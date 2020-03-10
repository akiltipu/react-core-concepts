import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React header </p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        
      </header>
    </div>
  );
}
function Person(){
  const personStyle = {
    border: '2px solid red',
    margin: '10px'
  }
  return(
  <div style={personStyle}>
    <h1>Name: Sakib Al Hasan</h1>
    <h3>Hero of the year</h3>
  </div>
  );
}

export default App;
