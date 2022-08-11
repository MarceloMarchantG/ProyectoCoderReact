import React from "react";
import Item from "../Item/Item";


const ItemList = ({productos}) =>{
    
    return(
    
        <div className=" flex flex-wrap justify-around">             
            { productos.map((product) =>               
            <Item key={product.id} pId={product.id} produ={product.element}/>                       
            )}           
        </div>        
    )
}

export default ItemList;