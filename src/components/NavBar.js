import React from 'react';
import logo from '../img/Logo.png';
import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";


const categories = [
    {id: 1, name:"Celulares", category: "smartphones", route:"/category/smartphones"},
    {id: 2, name:"Notebooks", category: "laptops", route:"/category/laptops"},
    {id: 3, name:"Perfumes", category: "fragrances", route:"/category/fragrances"},
    {id: 4, name:"Skincare", category: "skincare", route:"/category/skincare"},
    {id: 5, name:"Comestibles", category: "groceries", route:"/category/groceries"},
    {id: 6, name:"Decoración", category: "home-decoration", route:"/category/home-decoration"},
    {id: 7, name:"Muebles", category: "furniture", route:"/category/furniture"},
    {id: 8, name:"Tops", category: "tops", route:"/category/tops"},
    {id: 9, name:"Ropa Mujer", category: "womens-dresses", route:"/category/womens-dresses"},
    {id: 10, name:"Calzado Mujer", category: "womens-shoes", route:"/category/womens-shoes"},

]


const NavBar = () => {


    return(
        <>
        <nav className=" flex bg-blue-600">
       
            <div className='leftNavBar'>
         
                <Link className='text-white text-sm' to="/" >Inicio</Link> 
                {categories.map((category)=><Link className='font-arial text-white text-sm' key={category.id} to={category.route}>{category.name}</Link>)}
       
            </div>
            <div className='rightNavBar'>
                <Link to={'/cart'}> <CartWidget /></Link>
            </div>
        </nav>    
            <div className='flex flex-row bg-blue-500'>                           
                <Link to="/"><img src={logo} className="h-24 mx-2 border-white " alt="logo" /></Link>
                <h1 className='flex text-5xl font-title italic items-center text-white mx-2'>The All Market</h1>
            </div>
                    
        
        </>
        )
}

export default NavBar



