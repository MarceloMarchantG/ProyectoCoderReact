import React from "react";
import ItemList from "../ItemList/ItemList"
import '../../style/style.css';
import { useEffect, useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";


const ItemListContainer = ({title}) =>{

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState (true)
    const {categoryName} = useParams();
    
    useEffect(()=>{ 

        const q = categoryName ? query(collection(db, "productos"), where("element.category", "==", categoryName)) : query(collection(db, "productos"), where("element.rating", ">", 4.6))
        getDocs(q)
        .then(rest =>{
            const list = rest.docs.map(doc =>{
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setProductList(list)              
        })
        .catch(err=> console.log(err)) 
        .finally(()=>setLoading(false))

    },[categoryName])

    return(
        <div className="background">
            <h3 className="text-white font-arial font-bold text-4xl text-center">{categoryName ? categoryName : title}
            </h3> 
            {loading ? <LinearProgress color="inherit" /> : <ItemList productos={productList}/>}           
        </div>
    )
    
}

export default ItemListContainer;
