import React from "react";
import ItemDetail from './ItemDetail'
import { useEffect, useState } from "react";
// import productStock from '../data/productos.json';
import LinearProgress from '@mui/material/LinearProgress';
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";





const ItemDetailContainer = ()=>{

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState (true)
    const {productId} = useParams()

  
    useEffect(()=>{  

        const productCollection = collection(db, "productos")
        const refDoc = doc(productCollection, productId)      
        getDoc(refDoc)
        .then(rest => {
            const item = {
                id: rest.id,
                ...rest.data(),
            }
            setProduct(item)
           
        })
        .catch(err=> console.log(err)) 
        .finally(()=>setLoading(false))




        
        // fetch(`https://dummyjson.com/products/${productId}`)
        // .then(res => res.json())
        // .then(data => setProduct(data))
        // .finally(()=>setLoading(false))

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