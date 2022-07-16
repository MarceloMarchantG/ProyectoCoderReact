import React from "react";
import { useContext } from "react";
import { cartContext } from "./CartContext";


const Cart = ()=>{

    const {products, removeItem, clearCart} = useContext(cartContext);
    
    return( 
        <>
        {products.map(p => 
        <div key={p.id}>
        <h2 >{p.quantity}</h2>
        <h3 >{p.title}</h3>
        <button onClick={()=>{removeItem(p.id)}}>Eliminar</button>
        </div>
        )}
        <button onClick={()=>{clearCart()}}>Borrar carro</button>
        </>
    )
}

export default Cart;