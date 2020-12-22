import React from 'react';
import ItemCount from '../../ItemCount/ItemCount';

const ItemDetail = (props) => {
    console.log(props);
    return(
        <>
            <img src={"media/img/products/" + props.photo} alt={props.alt}/>
            <h1>{props.title}</h1>
            <ul>
                <li>Precio: {props.price}</li>
                <li>Descripción: {props.description}</li>
            </ul>
            <ItemCount initial={0} stock={15}/>
        </>
    )
}

export default ItemDetail;