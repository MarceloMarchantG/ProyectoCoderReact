import React from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import '../../style/style.css';
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { collection, doc, getDoc } from "firebase/firestore";


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

    },[productId])

    return(
        <div className="background">
        {loading ? <LinearProgress color="inherit" /> : <ItemDetail product= {product}/>}      
        </div>
    )
}

export default ItemDetailContainer;