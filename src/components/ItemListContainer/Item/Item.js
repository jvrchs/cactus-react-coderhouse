import React from 'react';
import "./Item.scss";
import ItemCount from '../../ItemCount/ItemCount';

const Item = (props) => {
    return (
        <div className="item-container">
            <img 
            src={"media/img/products/" + props.photo} alt={props.alt}/>
            <h5>{props.title}</h5>
            <ul>
                <li>Descripción: {props.description}</li>
                <li>Precio: {props.price}</li>
            </ul>
            <ItemCount initial={0} stock={15}/>
        </div>
    )
};

export default Item;