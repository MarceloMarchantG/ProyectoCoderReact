import React from 'react';
import logo from '../img/logo-chico-removebg.png';
import carro from '../img/cart.svg';
import user from '../img/person.svg';
import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return(
        <>
        <nav className="App-NavBar">
       
            <div className='leftNavBar'>
         
                <a href="#inicio" >Inicio</a> 
                <a href="#hamburguesas">Hamburguesas</a>
                <a href="#starters">Starters</a>
                <a href="#bebidas">Bebidas</a>
            </div>
            <div className='rightNavBar'>
            <a href="#" role="button">
                    <img src={user} alt="Usuario" />
                </a>


{/* 
                <a href="sections/cart.html"  title="Ir al Carro">
                    <img class="icon" src={carro} alt="Carrito"/>
                </a> */}
                <CartWidget />

            </div>
        </nav>    
            <div className='title'>                           
                <img src={logo} className="App-logo" alt="logo" />
                <h1>ROD BURGER</h1>
            </div>
                    
        
        </>
        )
}

export default NavBar



