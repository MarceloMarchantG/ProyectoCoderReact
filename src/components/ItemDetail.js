import React from "react";
import ItemCount from "./ItemCount";
import './ItemDetail.css'


const onAdd = (counter, stock) => {
    if (stock === 0 ) { 
        return
    }
    alert(`Se agregaron ${counter} productos al carro`); 
}




const ItemDetail =({product})=>{
               
    return(
        // <div className="itemDetail">
        //     <img className="imgDetail" src={product.imagen} alt=""/>
        //     <h3 className="nameDetail">{product.name}</h3>
        //     <p className="desDetail">{product.description}</p>
        //     <h5 className="priceDetail">$ {product.price}</h5>
        //     <button className="btnDetail ">Agregar al carro</button>
        // </div>

        <section className="text-gray-600 body-font overflow-hidden min-h-screen py-6">
            <div className="container px-5 py-24 mx-auto bg-white rounded-md">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" className="lg:w-1/2 w-full object-contain lg:h-auto h-64  object-center rounded-lg" src={product.thumbnail} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.brand}</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
                <div className="flex mb-4">
                    <span className="flex items-center">
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>

                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s"/></span>
                </div>
                <p className="leading-relaxed">{product.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                    {/* <div className="flex ml-6 items-center">

                    <div className="relative">


                    </div>
                    </div> */}
                </div>
                <div className="block">
                    <span className="flex flex-col items-center title-font font-medium text-2xl text-gray-900">$ {product.price}</span>
                        {/* <button className="flex ml-auto text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg> Agregar al carro
                        </button> */}
                        <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>

                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default ItemDetail;