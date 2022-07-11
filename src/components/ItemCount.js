import React, { useState } from "react";
import './ItemCount.css';

const ItemCount= ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);
  

    const aumenta = () =>{
        stock > counter && setCounter(counter + 1)
    }
    const disminuye = () =>{
        setCounter(Math.max(counter - 1, initial))
    }

   

    return(
        <div className="p-4 flex flex-col items-center">
            
            <div className="p-3 flex flex-inline items-center">
                <button className="py-0.5 px-3 bg-blue-500 rounded-tl-md rounded-bl-md text-white font-bold" onClick={aumenta} name="aumenta">+</button>
                <input type="number" readOnly size="1" placeholder={counter} aria-label="Cantidad" />
                <button className="py-0.5 px-3 bg-blue-500 rounded-tr-md rounded-br-md text-white font-bold" onClick={disminuye} name="disminuye">-</button>                   
            </div>                    
            <button className="bg-blue-500 py-2 px-6 flex items-center place-self-center rounded-md text-white font-bold" onClick={() => {onAdd(counter, stock)}} >Agregar  <svg xmlns="http://www.w3.org/2000/svg" className="transform translate-x-1 h-6 w-6 align-baseline text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg> </button>
        </div>
    )


}

export default ItemCount
