import React from 'react';
import logo from '../img/Logo.png';
import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";


const categories = [
    {id: 1, name:"Celulares", category: "Celulares", route:"/category/Celulares"},
    {id: 2, name:"Notebooks", category: "Notebooks", route:"/category/Notebooks"},
    {id: 3, name:"Perfumes", category: "Perfumes", route:"/category/Perfumes"},
    {id: 4, name:"Skincare", category: "Skincare", route:"/category/Skincare"},
    {id: 5, name:"Comestibles", category: "Comestibles", route:"/category/Comestibles"},
    {id: 6, name:"Decoración", category: "Decoracion", route:"/category/Decoracion"},
    {id: 7, name:"Muebles", category: "Muebles", route:"/category/Muebles"},
    {id: 8, name:"Tops", category: "Tops", route:"/category/Tops"},
    {id: 9, name:"Ropa Mujer", category: "Vestuario Mujer", route:"/category/Vestuario Mujer"},
    {id: 10, name:"Calzado Mujer", category: "Calzado Mujer", route:"/category/Calzado Mujer"},

]


const NavBar = () => {

    return(
        <>
        <nav className=" flex fixed top-0  left-0 right-0 bg-blue-600">
       
            <div className='leftNavBar'>
         
                <Link className='text-white text-sm' to="/" >Inicio</Link> 
                {categories.map((category)=><Link className='font-arial text-white text-sm' key={category.id} to={category.route}>{category.name}</Link>)}
       
            </div>
            <div className='rightNavBar'>
                <Link to={'/cart'}> <CartWidget /></Link>
            </div>
        </nav>    
            <div className='flex mt-9 flex-row bg-blue-500'>                           
                <Link to="/"><img src={logo} className="h-24 mx-2 border-white " alt="logo" /></Link>
                <h1 className='flex text-5xl font-title italic items-center text-white mx-2'>The All Market</h1>
            </div>
                            
        </>
        )
}

export default NavBar



