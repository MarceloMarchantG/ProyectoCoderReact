import React from "react";
import { createContext, useState } from "react";



export const cartContext = createContext();
const { Provider } = cartContext;

const CartProvider = ({children}) => {

    const [ products, setProducts] = useState([]);

    const getQtyItem =()=>{

    }

    const addItem = (product) =>{
        if(isInCart(product.id)){
            console.log(`el id es ${product.id}`)
            const auxCart = [...products];
            
            const found = auxCart.find(i => i.id === product.id);
            found.quantity += product.quantity;
            setProducts(auxCart)
            
        }else{
            setProducts([...products, product])
            console.log(product)
        }
    }

    const removeItem = (id)=>{
        setProducts(products.filter(del => del.id !== id))
    }

    const clearCart = () => {
        setProducts([]);
    }

    const isInCart = (id)=>{
        return products.some(item => item.id === id)
    }

    return(
        <Provider value={{ products, addItem, removeItem, clearCart}}>
            {children}
        </Provider>
    )
}

export default CartProvider;

