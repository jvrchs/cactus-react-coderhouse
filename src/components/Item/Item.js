import React from 'react';

const Item = (props) => {
    return (
        <>
            <img 
            src={"media/img/products/" + props.photo} alt={props.alt}/>
            <h5>{props.title}</h5>
            <ul>
                <li>Descripción: {props.description}</li>
                <li>Precio: {props.price}</li>
            </ul>
        </>
    )
};

export default Item;