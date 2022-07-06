import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
  
      </header>
      <ItemListContainer greetings='Bienvenido'/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
