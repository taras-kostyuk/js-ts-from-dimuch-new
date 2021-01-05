import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const users = [{id: 1, name:"Alexandr"},{id: 2, name:"Dimych"},{id: 3, name:"Katya"},]
  const liElements = users.map( (u) => <li key = {u.id}>{u.name}</li>)
  return (
    <div className="App">
<ul>
  {liElements}
</ul>
    </div>
  );
}

export default App;
