import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from "./components/Cart";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar/>
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer greetings='Bienvenido'/>} />
          
          <Route path='/category/:categoryName' element={<ItemListContainer greetings='Bienvenido'/>} />
          <Route path='/product/:productId' element={<ItemDetailContainer />} />
   
          <Route path='/cart' element={<Cart/>} />
        </Routes>  

        {/* <ItemListContainer greetings='Bienvenido'/>
        <ItemDetailContainer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
