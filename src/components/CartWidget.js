import React, { useContext} from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import './CartWidget.css'
import { cartContext } from './CartContext';

const CartWidget = ()=>{

    const { qtyItem } = useContext(cartContext);

    return(
        <div className='flex space-x-2 justify-center'>
        <button className='flex px-3 py-0.5'>  
        <svg xmlns="http://www.w3.org/2000/svg" className="transform translate-x-1 h-6 w-6 align-baseline text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg> 
        {qtyItem !== 0 && <span className='z-50 inline py-1 px-2  text-center  align-baseline text-xs font-bold bg-blue-100 text-blue-600 rounded-full'>{qtyItem}</span> }
     

        {/* <ShoppingCartRoundedIcon/>         */}
        </button>   
        </div> 
    )

}






export default CartWidget