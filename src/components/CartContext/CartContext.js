import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const cartContext = createContext();

const { Provider } = cartContext;

const CartProvider = ({children}) => {

    const [ products, setProducts] = useState([]);
    const [ qtyItem, setQtyItem] = useState(0)
    const [ total, setTotal ] = useState(0)

    const tot =()=>{
        let subtotal=0;
        products.forEach(elment=>{
            subtotal = elment.quantity*elment.element.price + subtotal
        });
        setTotal(subtotal)
    }
    
    const getQtyItem = ()=>{
        let qty = 0;
        products.forEach(element => {
            qty = element.quantity + qty
        });
        setQtyItem(qty)
    }

    useEffect(()=> {
        getQtyItem();
        tot();
    }, [products]
    ) 

    const addItem = (product) =>{
        if(isInCart(product.id)){           
            const auxCart = [...products];            
            const found = auxCart.find(i => i.id === product.id);
            found.quantity += product.quantity;
            setProducts(auxCart)            
        }else{
            setProducts([...products, product])           
        };
        tot()
    }

    const removeItem = (id)=>{
        setProducts(products.filter(del => del.id !== id));       
    }

    const clearCart = () => {
        setProducts([]);
        setQtyItem(0);
    }

    const isInCart = (id)=>{
        return products.some(item => item.id === id)
    }

    return(
        <Provider value={{ products, addItem, removeItem, clearCart, qtyItem, total}}>
            {children}
        </Provider>
    )
}

export default CartProvider;

