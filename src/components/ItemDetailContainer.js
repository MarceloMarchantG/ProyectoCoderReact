import React from "react";
import ItemDetail from './ItemDetail'
import { useEffect, useState } from "react";
// import productStock from '../data/productos.json';
import LinearProgress from '@mui/material/LinearProgress';
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";

// const promesa = new Promise((res, rej) => {
//     setInterval(() => {    
//     res(productStock[1])
//     }, 5000);
// });




const ItemDetailContainer = ()=>{

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState (true)
    const {productId} = useParams()

  
    useEffect(()=>{  
        
        fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .finally(()=>setLoading(false))

        // promesa.then((data)=>{
        //     setProduct(data);
        //     setLoading(false)
        // })
       
    },[productId])

    return(
        <div className="itemDetailContainer">
        {loading ? <LinearProgress color="success" /> : <ItemDetail product= {product}/>} 
      
        </div>
    )
}

export default ItemDetailContainer;