import React from "react";
import "./Item.css";



const Item = ({produ})=>{

    console.log(produ)
    return(

    <div className="card">
        <img className="cardImage" src={produ.imagen} alt="" />
        <div className="cardBody">
            <h4 className="cardTitle" >{produ.name}</h4>
            {/* <p className="cardText">{produ.description}</p> */}
        </div>
        <div className="cardFooter">
            <p className="price">$ {produ.price}</p>
    
        </div>
       
    </div>
)


};

export default Item;