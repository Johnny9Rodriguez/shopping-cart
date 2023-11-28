import React from 'react'
import '../styles/Cart.css'
import { Icon } from '@iconify/react';
import { useCartContext } from '../context/CartContext';

const CartEntry = ({ id, title, price }) => {
    const { dispatch } = useCartContext();

    const handleRemove = () => {
        dispatch({ type: 'REMOVE', payload: { id } });
    }

    return (
        <div key={id} className='cart-entry'>
            <p>{title}</p>
            <div className='cart-entry-price-container'>
                <button className='cart-entry-del-btn' onClick={handleRemove}>
                    <Icon icon="ph:trash" />
                </button>
                <p className='cart-entry-price'>€{price}</p>
            </div>
        </div>
    )
}

export const Cart = () => {
    const { cart, dispatch } = useCartContext();

    console.log(process.env.PUBLIC_URL);

    return (
        <div className='cart-container'>
            <div className='cart-header'>
                <img
                    src={process.env.PUBLIC_URL + '/images/ps_logo.webp'}
                    alt='ps_logo'
                />
                <h1>Shopping Cart</h1>
            </div>
            <hr />
            {cart.length !== 0 ? (
                cart.map((item) => <CartEntry key={item.id} {...item} />)
            ) : (
                <p>Empty</p>
            )}
            <hr />
            <div className='cart-total-container'>
                <h2>Total:</h2>
                <div className='cart-total'>€{sumTotal(cart)}</div>
            </div>
            <div className='cart-btns'>
                <button
                    className='clear-cart-btn'
                    onClick={() => dispatch({ type: 'CLEAR' })}
                >
                    Clear Cart
                </button>
                <button className='checkout-btn'>Checkout</button>
            </div>
        </div>
    )
}

const sumTotal = (cart) => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
}