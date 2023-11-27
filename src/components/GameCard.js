import React from 'react'
import '../styles/GameCard.css'

export const GameCard = ({ props }) => {
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
                    <div className='game-card-price'>€{props.price}</div>
                    <button className='game-card-cart-btn'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
