import React from "react";
import ItemList from "./ItemList"
import './ItemListContainer.css';
import { useEffect, useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";




const ItemListContainer = ({greetings}) =>{

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState (true)

    const {categoryName} = useParams();
    
  

    const URL = categoryName ? `https://dummyjson.com/products/category/${categoryName}` : 'https://dummyjson.com/products/?limit=50';

    useEffect(()=>{      
        
       

        fetch(URL)
        .then(res => res.json())
        .then(data => setProductList(data.products))
        .finally(()=>setLoading(false))

    },[categoryName])


       
    return(
    <div className="itemListContainer">
        {/* <h3>{greetings}</h3>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
        <h3 className="text-white font-arial font-bold text-5xl text-center">Productos</h3> 
        {loading ? <LinearProgress color="success" /> : <ItemList productos={productList}/>}
        
    </div>
    )
    
}

export default ItemListContainer
