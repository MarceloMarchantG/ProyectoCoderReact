import { React } from "react";
import { Link } from "react-router-dom";


const EndSale =({idVenta, nombre, apellido})=>{

    return(
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
                <Link to="/"><button className="block bg-blue-600 hover:bg-blue-700 text-white text-lg mx-auto p-3 py-3 rounded-md disabled:bg-blue-300" type="submit">Volver a la tienda</button></Link>           
            </div>
        </div>
    )
}

export default EndSale;