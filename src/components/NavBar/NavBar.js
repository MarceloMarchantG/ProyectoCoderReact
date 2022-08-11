import React from 'react';
import logo from '../../img/Logo.png';
import CartWidget from '../CartWidget/CartWidget';
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
    {id: 11, name:"Relojes Mujer", category: "Relojes Mujer", route:"/category/Relojes Mujer"},
    {id: 12, name:"Ropa Hombre", category: "Vestuario Hombre", route:"/category/Vestuario Hombre"},
    {id: 13, name:"Calzado Hombre", category: "Calzado Hombre", route:"/category/Calzado Hombre"},
    {id: 14, name:"Relojes Hombre", category: "Relojes Hombre", route:"/category/Relojes Hombre"}
]


const NavBar = () => {

    return(
        <>
            <nav className=" flex fixed  top-0  left-0 right-0 bg-blue-600">       
                <div className=' flex flex-row w-4/5'>         
                    <Link className='text-white text-sm my-2 mx-2.5' to="/" >Inicio</Link> 
                    <div>
                        <button className="peer px-2 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm ">Categorias</button>               
                        <div className="absolute hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg rounded-b-sm">
                        {categories.map((category)=><Link className="px-5 py-3 text-sm  text-blue-600 hover:text-blue-800 hover:bg-blue-100" key={category.id} to={category.route}>{category.name}</Link>)}                  
                        </div>
                    </div>
                </div>
                <div className=' flex flex-row-reverse w-1/5'>
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



