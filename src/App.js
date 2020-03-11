import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const players = ['Shakib', 'Mustafiz', 'Mashrafe', 'Muminul', 'Rubel', 'Tamim', 'Mahmudullah'];

  const adobeProducts = [
    {name: 'Photoshop', price: '$100'},
    {name: 'Lightroom', price: '$150'},
    {name: 'PDF reader', price: '$50'},
    {name: 'Premier', price: '$344'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>Practicing react core concepts</h1>
        <Counter></Counter>
        <Users></Users>
        <ol>
          {
            players.map(players => <li>{players}</li>)
          }
        </ol>
        {
          adobeProducts.map(adobeProducts => <Products product={adobeProducts}></Products>)
        }
        
        
        <Player name={players[0]} role="All-rounder"></Player>
        <Player name={players[1]} role="Bowler"></Player>
        <Player name={players[2]} role="Captain"></Player>
        <Player name={players[3]} role="Batsman"></Player>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {
          users.map(users => <li>{users.company.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  /* const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }; */
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
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
  };

  // eslint-disable-next-line no-lone-blocks
  // Destructuring
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
