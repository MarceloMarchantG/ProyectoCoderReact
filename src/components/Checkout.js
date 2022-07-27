import { React, useState } from "react";
import "./Cart.css"
import { useContext } from "react";
import { cartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase"
import {  addDoc, collection, serverTimestamp } from "firebase/firestore";








const Checkout = ()=>{


    

    const {products, total, qtyItem, clearCart} = useContext(cartContext);
    const [ idVenta, setIdVenta ] = useState("") 

    const[ nombre, setNombre ] = useState("")
    const[ apellido, setApellido ] = useState("")
    const[ email, setEmail ] = useState("")
    const[ direccion, setDireccion ] = useState("")
    const[ fpago, setFpago ] = useState("tc")

  



    const datosCliente = {
        nombre: nombre,
        apellido: apellido,
        mail: email,
        direccion: direccion,
        fpago: fpago
    }

   


    // const finalizarVenta = ()=>{
        
    //     const ventasCollection = collection(db, "ventas");
        
    //     addDoc(ventasCollection,{
    //         datosCliente,
    //         items: products,
    //         date: serverTimestamp(),
    //         total: total,
    //     })            
    //     .then((res) =>{
    //         setIdVenta(res.id)
    //         console.log(idVenta)
    //     })
      
    // }

    // const finalizarVenta = ()=>{
     
    
 
    
    const finalizarVenta = async ()=>{
        
        const ventasCollection = collection(db, "ventas");

        
        
        const venta = await addDoc(ventasCollection,{
            datosCliente,
            items: products,
            date: serverTimestamp(),
            total: total,
        }) 
                  
        console.log(venta.id)
        setIdVenta(venta.id)
        clearCart()
    }
       

 
 

 
 
    const mensajeError = "* Campo requerido"
    const mensajeErrorEmail = "* Email no valido"





    return(

        <div className="checkout min-h-screen py-4">
            { idVenta ?
            <div className='w-full max-w-5xl  h-full min-h-full mx-auto bg-white rounded-md shadow-xl flex md:flex-col items-center py-4 overflow-hidden'>
                

                <div className="w-2/3 bg-white rounded p-8 m-4 items-center">
                <h1 className="w-full text-center text-gray-800 text-2xl font-bold mb-8">Compra finalizada</h1>
                    <div className="flex flex-col items-center ">
                    <p className="md:mb-1  md:py-4 md:px-6 flex-auto text-lg text-gray-600">Estimad@ {nombre} {apellido}, tu compra ha resultado exitosa</p> 
                    <p className="md:mb-2  md:py-1 md:px-6 flex-auto text-lg text-gray-600 text-justify">Agradecemos tu preferencia y te invitamos a guardar tu número de compra, con el que podrás hacer el seguimiento de tu despacho.</p>        
                </div>

                <div className="flex mt-1 items-center pb-1 border-b-2 border-gray-100 mb-5"></div>
                <div className="flex flex-row items-center mb-4">
                    <p className="md:mb-2  md:py-4 md:px-6 flex-auto font-bold text-lg text-gray-600">Código de venta: </p> 
                    <p className="md:mb-2  md:py-4 md:px-6 flex-auto font-bold text-lg text-gray-600 text-end">{idVenta}</p>        
                </div> 
                <Link to="/"><button class="block bg-blue-600 hover:bg-blue-700 text-white text-lg mx-auto p-3 py-3 rounded-md disabled:bg-blue-300" type="submit">Volver a la tienda</button></Link>           
                </div>
            </div>
                :

                
            <div className='w-full max-w-5xl  h-full min-h-full mx-auto bg-white rounded-md shadow-xl flex md:flex-row flex-col-reverse py-4 overflow-hidden'>    
                <div className="md:w-1/2 bg-white rounded p-8 m-4">
                    <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Datos para la compra</h1>
                    
                    <form onSubmit={ev => {ev.preventDefault()}}>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" >Nombre</label>
                            <input className="border py-2 px-3 text-grey-800 text-left" type="text" name="nombre" value={nombre} required onChange={ev => setNombre(ev.target.value)}/>
                            { nombre === "" && <p className="text-xs text-red-600 ">{mensajeError}</p>}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" >Apellido</label>
                            <input className="border py-2 px-3 text-grey-800 text-left" type="text" name="apellido" value={apellido} required onChange={ev => setApellido(ev.target.value)}/>
                            { apellido === "" && <p className="text-xs text-red-600 ">{mensajeError}</p>}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" >Email</label>
                            <input className="border py-2 px-3 text-grey-800 text-left" type="email" name="email" value={email} required onChange={ev => setEmail(ev.target.value)}/>
                            { (email === "" || !email.includes("@")) && <p className="text-xs text-red-600 ">{mensajeErrorEmail}</p>}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" >Dirección</label>
                            <input className="border py-2 px-3 text-grey-800 text-left" type="text" name="direccion" value={direccion} required onChange={ev => setDireccion(ev.target.value)}/>
                            { direccion === "" && <p className="text-xs text-red-600 ">{mensajeError}</p>}
                        </div>            
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" >Forma de pago</label>
                            <select className="border py-2 px-3 text-grey-800"  value={fpago} onChange={ev => setFpago(ev.target.value)}>
                                <option name="fpago"value="tc" >Tarjeta Crédito</option>
                                <option name="fpago"value="td" >Tarjeta Débito</option>
                                <option name="fpago"value="mp" >Mercado Pago</option>                   
                            </select>
                        </div>

                    </form>
                    <button className="block bg-blue-500 hover:bg-blue-600 text-white text-lg mx-auto px-3 py-0.5 rounded-md disabled:bg-blue-200"  onClick={finalizarVenta} >Finalizar compra</button>           
                </div>

                <div className="md:w-1/2 bg-white rounded p-8 m-4">
                    <h1 className="w-full text-center text-gray-800 text-2xl font-bold mb-8">Resumen de compra</h1>
                        <div className="flex flex-row items-center ">
                        <p className="md:mb-2  md:py-4 md:px-6 flex-auto text-lg text-gray-600">Productos({qtyItem})</p> 
                        <p className="md:mb-2  md:py-4 md:px-6 flex-auto text-lg text-gray-600 text-end">$ {total}</p>        
                    </div>
                        <div className="flex flex-row items-center mb-1">
                        <p className="md:mb-2  md:py-4 md:px-6 flex-auto text-lg text-gray-600">Envío</p> 
                        <p className="md:mb-2  md:py-4 md:px-6 flex-auto text-lg text-green-600 text-end">Gratis</p>        
                    </div>
                    <div className="flex mt-1 items-center pb-1 border-b-2 border-gray-100 mb-5"></div>
                    <div className="flex flex-row items-center mb-4">
                        <p className="md:mb-2  md:py-4 md:px-6 flex-auto font-bold text-lg text-gray-600">Total a pagar</p> 
                        <p className="md:mb-2  md:py-4 md:px-6 flex-auto font-bold text-lg text-gray-600 text-end">$ {total}</p>      
                    </div>      
                </div>
                
            </div>    

                



            }
            
        </div>

    )

    
}


export default Checkout;