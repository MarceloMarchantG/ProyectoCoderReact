import React from "react";
import { useContext } from "react";
import { cartContext } from "./CartContext";
import "./Cart.css"
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase"
import { add, addDoc, collection } from "firebase/firestore";





const Cart = ()=>{

    const {products, removeItem, clearCart, total} = useContext(cartContext);


//     let total = 0
//     products.forEach(element => {
//      total = total + element.element.price*element.quantity
//    });

   
    return( 
        <div className="cart min-h-screen py-4">
            <h3 className="text-white font-arial font-bold md:text-5xl text-xl text-center pb-3">Carro de compras</h3>
            <div className='w-full max-w-5xl  h-full min-h-full mx-auto bg-white rounded-md shadow-xl flex flex-col py-4 overflow-hidden'>

                { products.length !== 0 ?
                products.map(p => 
                <div key={p.id} className=" flex flex-col items-center justify-between p-4 duration-300 md:flex-row md:py-4 md:px-8 ">
                <div className="flex items-center text-center flex-col md:flex-row md:text-left">
                    <div className=" mb-2.5 md:mb-0 md:mr-2.5 ">
                        <img className=" w-28 h-28 rounded-md" alt="" src={p.element.thumbnail}/>
                    </div>
                    <div className="w-60 flex flex-col mb-4 mr-1 md:mb-0 md:mr-0">
                        <p className="text-gray-500 font-light text-xs">{p.element.brand}</p>
                        <div className="flex flex-col">
                            <h4 className="text-gray-800 ">{p.element.title}</h4>
                        </div>
                    </div>
                </div>
                <div className="p-3 flex flex-col md:flex-row items-center justify-between text-center md:text-left ">
                    
                    <span className="w-28">$ {p.element.price}</span>            
                   
                    <div className="flex flex-row">
                    {/* <button className="py-0.5 px-3 bg-blue-500 rounded-tl-md rounded-bl-md text-white font-bold" name="aumenta">+</button> */}
                        <input className="w-12 md:w-20 text-gray-600" type="number" readOnly size="1" placeholder={p.quantity} aria-label="Cantidad" />
                    {/* <button className="py-0.5 px-3 bg-blue-500 rounded-tr-md rounded-br-md text-white font-bold" name="disminuye">-</button>                    */}
                    </div>  
                </div>
                <div className="p-3 flex flex-col sm:flex-row items-center justify-between text-center md:text-right">
                
                    <span className="w-28 font-bold">$ {p.element.price * p.quantity}</span>            
                   
                </div>

                <div className="mx-auto md:ml-auto md:mr-0">
                    <button type="button" className="flex bg-blue-500 py-0.5 px-3 text-white font-bold rounded-md" onClick={()=>{removeItem(p.id)}} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
                      
                </div> 
                        
                    
                )
                
                    :

                <div className="p-3 flex flex-col  items-center justify-center text-center sm:text-left">
                    <h2 className="flex flex-row items-center text-gray-500 md:py-32 py-8 md:text-6xl font-light text-xl"><svg xmlns="http://www.w3.org/2000/svg" className=" h-10 w-10  md:h-20 md:w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>Tu carro está vacío</h2>


                    <div className="flex flex-col mx-auto md:ml-0  items-center">
                        <Link to="/">
                            <button type="button" className="flex bg-blue-500 py-0.5 px-3 text-white font-bold rounded-md"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                            </svg>Volver</button>
                        </Link>
                    </div>

                </div>
  
            
            
            
                }

                {   products.length !== 0 &&
                    
                 <>   
                    <div className=" flex flex-col-reverse items-center w-full bg-zinc-100 justify-between p-4 duration-300 md:flex-row md:py-4 md:px-8 ">
                    <div className="flex items-center text-center flex-row md:text-left justify-between">

                        <div className="mx-auto sm:ml-auto sm:mr-0 px-10 md:px-10">
                            <Link to="/">
                                <button type="button" className="flex bg-blue-500 py-0.5 px-3 text-white font-bold rounded-md"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                                </svg>Seguir comprando</button>
                            </Link>
                        </div>
                    </div>
     
                    <div className="flex items-center text-center flex-col md:flex-row md:text-left">
                        <div className="flex flex-row">
                            <div className="flex flex-col w-32">
                                <h3  className="py-4 text-lg">Total compra</h3>
                            </div>
                            <div className="flex flex-col w-24">  
                                <span className="py-4 font-bold">$ {total}</span>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex flex-col mx-auto sm:ml-auto sm:mr-0">
                                <button type="button" className="flex bg-blue-500 py-0.5 px-3 text-white font-bold rounded-md">Finalizar compra</button>
                            </div>
                        </div>

                    </div>  

             
                </div>
                <div className=" flex flex-col items-center w-fulljustify-between p-4 duration-300 md:flex-row md:py-4 md:px-8 ">
                    <div className="mx-auto sm:ml-auto ">
                    <button type="button" className=" bg-blue-500 py-0.5 px-3 text-white font-bold rounded-md" onClick={()=>{clearCart()}}>Vaciar carro</button>
                    </div>
                </div>
                </>
                }

            </div>
        </div>
    )
}


export default Cart;
