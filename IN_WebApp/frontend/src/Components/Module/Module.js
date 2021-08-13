import React from 'react';
import './module.css';

function Module({id, title, image, price, rating}) {
    return (
        <div className="module">

            <img className="module__image" src={image} alt="" />

            <div className="module__info"></div>
                <p>{title}</p>
                <p className='module__price'>
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="module__rating">
                    {Array(rating).fill().map((_,i) => (
                        <p>⭐</p>
                    ))}
                   
                </div>
        
        </div>
    )
}

export default Module