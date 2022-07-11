import React from "react";
//import ItemCount from "./ItemCount";
import ItemList from "./ItemList"
import './ItemListContainer.css';
import { useEffect, useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from "react-router-dom";



// const productStock = [{"type":"H","id":"11","name":"Rod Big Boss","price":6500,"quantity":1,"estate":"activo","description":"Jugosa hamburguesa doble con cheddar, tocino, aros de cebolla y un huevo frito.","imagen":"./img/h-rod-big-boss.jpeg","stock":10},
// {"type":"H","id":"12","name":"Rod Dills","price":5500,"quantity":1,"estate":"activo","description":"Jugosa hamburguesa sobre cama de lechuga, con cheddar pepinillos y mayonesa casera, simplemente deliciosa.","imagen":"img/h-rod-dills.jpeg","stock":10},
// {"type":"H","id":"13","name":"Rod Spicy","price":6600,"quantity":1,"estate":"activo","description":"Para los amantes del picante, deliciosa hamburguesa con cheddar, jalapeño, cebolla morada en cuadritos, papas hilo y la salsa secreta de la casa.","imagen":"img//h-rod-spicy.jpeg","stock":10},
// {"type":"H","id":"14","name":"Rod Champi","price":6900,"quantity":1,"estate":"activo","description":"Deliciosa hamburguesa sobre una cama de lechuga y tomate, cubierta con champiñones salteados, cebolla caramelizada y palta.","imagen":"img/h-rod-champi.jpeg","stock":10},
// {"type":"H","id":"15","name":"Rod Guaca Guaca","price":6900,"quantity":1,"estate":"activo","description":"Jugosa hamburguesa con cheddar sobre una cama de lechuga, cubierta con pepinillos y el delicioso guacamole de la casa.","imagen":"img//h-rod-guacamole.jpeg","stock":10},
// {"type":"H","id":"16","name":"Rod Big Boss Special","price":7500,"quantity":1,"estate":"activo","description":"Jugosa hamburguesa doble con cheddar, tocino, aros de cebolla y un huevo frito más tomate lechuga y cebolla morada.","imagen":"img//h-rod-big-boss-special.jpeg","stock":10},
// {"type":"H","id":"17","name":"Rod Champi-oink Triple","price":8500,"quantity":1,"estate":"activo","description":"Tres hamburguesas (si, 3) con cheddar, champiñones salteados, cebolla caramelizada y palta. Solo para valientes.","imagen":"img/h-rod-champi-oink-triple.jpeg","stock":10},
// {"type":"H","id":"18","name":"Rod La Fresquita","price":4990,"quantity":1,"estate":"activo","description":"Deliciosas croqueta de \"poroto negro-quinoa-mani\" sobre cama de lechuga y tomate, con pepinillos y cebolla morada.","imagen":"img/h-rod-la-fresquita-veggie.jpeg","stock":10}]


// const promesa = new Promise((res, rej) => {
//     setInterval(() => {    
//     res(productStock)
//     }, 1000);
// });



const ItemListContainer = ({greetings}) =>{

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState (true)

    const {categoryName} = useParams();
    
    
    // ItemCount logic
    // const onAdd = (counter, stock) => {
    //     if (stock === 0 ) { 
    //         return
    //     }
    //     alert(`Se agregaron ${counter} productos al carro`); 
    // }

    const URL = categoryName ? `https://dummyjson.com/products/category/${categoryName}` : 'https://dummyjson.com/products/?limit=50';

    useEffect(()=>{      
        
        console.log(categoryName)

        fetch(URL)
        .then(res => res.json())
        .then(data => setProductList(data.products))
        .finally(()=>setLoading(false))
        // promesa.then((data)=>{
        //     setProductList(data);
        //     setLoading(false)
        // })

       //productList.map((pro)=> console.log(pro.category))
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
