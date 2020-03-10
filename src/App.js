import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const players = ['Shakib', 'Mustafiz', 'Mashrafe', 'Muminul'];
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is React header</h1>
        <Player name={players[0]} role="All-rounder"></Player>
        <Player name={players[1]} role="Bowler"></Player>
        <Player name={players[2]} role="Captain"></Player>
        <Player name={players[3]} role="Batsman"></Player>
      </header>
    </div>
  );
}
const PlayerStyle = {
  border: '2px solid green',
  width: '400px',
  margin: '10px',
  borderRadius: '20px',
  backgroundColor: 'tomato',
  boxShadow: '10px 10px orange'
}

function Player(props){
  return(
    <div style={PlayerStyle}>
      <h3>Player Name: {props.name} </h3>
      <p>Role: {props.role} </p>
    </div>
  )
}

export default App;
