import React from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import './CartWidget.css'

const CartWidget = ()=>{
    return(
        <>  
        <span className='badge'>0</span>  
        <ShoppingCartRoundedIcon/>        
        </>    
    )

}






export default CartWidget