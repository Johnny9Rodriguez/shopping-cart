import React from 'react'
import '../styles/GameCard.css'
import { useCartContext } from '../context/CartContext'

export const GameCard = ({ props }) => {
    const { cart, dispatch } = useCartContext();

    const parsePrice = (price) => {
        const [euros, cents] = price.toString().split('.');

        return (
            <div className='game-card-price'>
                €{euros}
                <span className='game-card-price-cents'>{cents}</span>
            </div>
        )
    }

    return (
        <div className='game-card-container'>
            <img
                src={`/images/covers/${props.coverId}.webp`}
                alt='abesexoddus'
            />
            <div className='game-card-info'>
                <h1>{props.title}</h1>
                <p>{props.genre}</p>
                <p>{props.developer}</p>
                <p>{props.publisher} &#x2022; {props.year}</p>
                <div className='game-card-purchase-section'>
                    {parsePrice(props.price)}
                    {cart.some((item) => item.id === props.id) ?
                        (<button
                            className='game-card-cart-btn'
                            onClick={() => dispatch({ type: 'REMOVE', payload: { id: props.id } })}
                        >
                            Remove from Cart
                        </button>) : (<button
                            className='game-card-cart-btn'
                            onClick={() => dispatch({ type: 'ADD', payload: { id: props.id, title: props.title, price: props.price } })}
                        >
                            Add to Cart
                        </button>)
                    }
                </div>
            </div>
        </div>
    )
}
