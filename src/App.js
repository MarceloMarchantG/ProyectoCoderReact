import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from "./components/Cart/Cart";
import CartProvider from './components/CartContext/CartContext';
import Checkout from './components/Checkout/Checkout';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <header className="App-header">
            <NavBar/>
          </header>
          <Routes>
            <Route path='/' element={<ItemListContainer title='Productos destacados'/>} />           
            <Route path='/category/:categoryName' element={<ItemListContainer greetings='Bienvenido'/>} />
            <Route path='/product/:productId' element={<ItemDetailContainer />} />    
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>  
        </div>
        </CartProvider>
    </BrowserRouter>
  );
}

export default App;
