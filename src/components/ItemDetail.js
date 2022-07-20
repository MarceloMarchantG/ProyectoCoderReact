import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import './ItemDetail.css'
import { Link } from "react-router-dom";
import { cartContext } from './CartContext'


const BtnFinish = ()=>(
    <div className="p-4 flex flex-col items-center">
        <Link to="/cart"><button className="bg-blue-500 py-2 px-6 flex items-center place-self-center rounded-md text-white font-bold"  >Finalizar compra</button></Link>
    </div>

)



const ItemDetail =({product})=>{

    const [finish, setFinish] = useState(true)
    const { addItem } = useContext(cartContext)


    const onAdd = (counter, stock) => {

        addItem({...product, quantity: counter})
            

        if (stock === 0 ) { 
            return
        }
        setFinish(false)
    
    
    }


    return(


        <section className="text-gray-600 body-font overflow-hidden min-h-screen py-6">
            <div className="container px-5 py-24 mx-auto bg-white rounded-md">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" className="lg:w-1/2 w-full object-contain lg:h-auto h-64  object-center rounded-lg" src={product.thumbnail} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.brand}</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
                <div className="flex mb-4">

                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <p className="ml-2 text-sm font-bold text-gray-500 ">{product.rating}</p>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s"/>
       
                </div>
                <p className="leading-relaxed">{product.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                </div>
                <div className="block">
                    <span className="flex flex-col items-center title-font font-medium text-2xl text-gray-900">$ {product.price}</span>

                       { finish ? <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/> :
                        <BtnFinish/>}

                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default ItemDetail;