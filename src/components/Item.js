import { ProductionQuantityLimits } from "@mui/icons-material";
import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";



const Item = ({pId, produ})=>{

const URL = `/product/${pId}`
    
    return(

    <div className=" bg-white w-80 shadow-2xl rounded-sm gap-y-1 my-2">
        <img className="objet-contain rounded-sm h-48 w-full items-center bg-white flex flex-col justify-between p-2 " src={produ.thumbnail} alt="" />
        <div className="justify-between p-4 bg-cover bg-center">
            <p className="text-gray-500 font-light text-xs text-center">{produ.brand} </p>
            <h4 className="text-gray-800 text-center mt-1" >{produ.title}</h4>      
            <p className="text-gray-800 text-center mt-1">$ {produ.price}</p>
        </div>
        {/* <ItemCount stock={produ.stock} initial={1} onAdd={onAdd}/> */}
        <div className="p-4 flex flex-col items-center">    
            <Link to={URL} > <button  className=" py-2 px-6 flex items-center place-self-center bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md"  >Ver detalle  </button></Link>
        </div>
    </div>
       



)


};

export default Item;