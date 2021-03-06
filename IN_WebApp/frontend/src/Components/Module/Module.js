import React from 'react';
import './module.css';
import StarIcon from '@material-ui/icons/Star';

function Module({id, title, image, beschreibung, rating}) { //Dem Modul können die Parameter als Eigenschaften übergeben werden
    return (
        <div className="module">

            <img className="module__image" src={image} alt="" />

            <div className="module__info"></div>
                <p className="module__title">{title}</p>    
                <p className='module__beschreibung'>
                    {beschreibung}
                </p>
                <div className="module__rating">
                    {Array(rating).fill().map((_,i) => (    //Es werden so viele Sterne hinzugefügt, wie das Rating angegeben wurde
                        <p><StarIcon /></p>
                    ))}
                   
                </div>
        
        </div>
    )
}

export default Module