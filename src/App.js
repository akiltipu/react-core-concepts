import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const players = ['Shakib', 'Mustafiz', 'Mashrafe', 'Muminul'];

  const adobeProducts = [
    {name: 'Photoshop', 
    price: '$100'},
    {name: 'Lightroom', 
    price: '$150'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is React header</h1>
        <Products product={adobeProducts[0]}></Products>
        <Products product={adobeProducts[1]}></Products>
        
        <Player name={players[0]} role="All-rounder"></Player>
        <Player name={players[1]} role="Bowler"></Player>
        <Player name={players[2]} role="Captain"></Player>
        <Player name={players[3]} role="Batsman"></Player>
      </header>
    </div>
  );
}

function Products(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    color: 'purple'
  }
  {/** Destructure */}
  const {name, price} = props.product;
  
  return (
    <div style={productStyle}>
      <h3>{name} </h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>

  );
}

function Player(props) {
  const PlayerStyle = {
    border: '2px solid green',
    width: '400px',
    margin: '10px',
    borderRadius: '20px',
    backgroundColor: 'tomato',
    boxShadow: '10px 10px orange'
  }
  return (
    <div style={PlayerStyle}>
      <h3>Player Name: {props.name} </h3>
      <p>Role: {props.role} </p>
    </div>
  )
}

export default App;
