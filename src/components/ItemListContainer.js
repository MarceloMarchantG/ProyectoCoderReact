import React from "react";
import ItemCount from "./ItemCount";
import './ItemListContainer.css';

const ItemListContainer = ({greetings}) =>{

    const onAdd = (counter, stock) => {
        if (stock === 0 ) {
            return
        }

        alert(`Se agregaron ${counter} productos al carro`); 
    }

    return(
    <>
        <h3>{greetings}</h3>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </>
    )
    
}

export default ItemListContainer
