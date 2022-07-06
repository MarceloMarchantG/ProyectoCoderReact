import React from "react";
import './ItemDetail.css'


const ItemDetail =({product})=>{
                console.log(product)
    return(
        <div className="itemDetail">
            <img className="imgDetail" src={product.imagen} alt=""/>
            <h3 className="nameDetail">{product.name}</h3>
            <p className="desDetail">{product.description}</p>
            <h5 className="priceDetail">$ {product.price}</h5>
            <button className="btnDetail ">Agregar al carro</button>
        </div>
    )
}

export default ItemDetail;