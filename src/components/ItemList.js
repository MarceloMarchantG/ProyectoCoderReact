import React from "react";
import Item from "./Item";
import "./ItemList.css"



const ItemList = ({productos}) =>{
    
  

    return(
        <div className="itemList">
            { productos.map((product) =>               
            <Item key={product.id} pId={product.id} produ={product.element}/>                       
            )}           
        </div>)
        
}
    
;



export default ItemList;