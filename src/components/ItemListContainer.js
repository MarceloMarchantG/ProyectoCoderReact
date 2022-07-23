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
    
  

    //const URL = categoryName ? `https://dummyjson.com/products/category/${categoryName}` : 'https://dummyjson.com/products/?limit=50';

    useEffect(()=>{ 

     

        const productsCollection = collection(db, "productos");
      
        if (categoryName){
            
            const catName = query(productsCollection, where("element.category", "==", categoryName));            
            getDocs(catName)
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
            
        } else{
            
            const destacados = query(productsCollection, where("element.rating", ">", 4.6));
            getDocs(destacados)
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


        }
                
      
        // .catch(err=> console.log(err)) 
        // .finally(()=>setLoading(false))
       

        // fetch(URL)
        // .then(res => res.json())
        // .then(data => setProductList(data.products))
        // .finally(()=>setLoading(false))

    },[categoryName])

    
       
    return(
    <div className="itemListContainer">
        {/* <h3>{greetings}</h3>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
        <h3 className="text-white font-arial font-bold text-4xl text-center">Productos destacados</h3> 
        {loading ? <LinearProgress color="success" /> : <ItemList productos={productList}/>}
        
    </div>
    )
    
}

export default ItemListContainer
