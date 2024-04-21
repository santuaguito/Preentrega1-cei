import React from 'react';
import '../components/CartWidget.css'

const CartWidget = () => {
    return(
        <div className='carrito'>
        <img src='https://cdn.icon-icons.com/icons2/1473/PNG/512/035shoppingcart_101498.png' className='cart'></img>
        <p className='valor'>2</p>
        </div>
    )
}


export default CartWidget;