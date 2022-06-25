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
        <>
            <p>Producto</p>
            <div className="input-group">
                <button className="btn" onClick={aumenta} name="aumenta">+</button>
                <input type="number" readOnly size="1" placeholder={counter} aria-label="Cantidad" />
                <button className="btn" onClick={disminuye} name="disminuye">-</button>                   
            </div>
            <button className="btn btn-sm" onClick={() => {onAdd(counter, stock)}} >Agregar al carro</button>
        </>
    )


}

export default ItemCount
