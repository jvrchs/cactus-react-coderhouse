import React, {useState} from 'react';
import './ItemCount.scss';

const ItemCount = ({stockQty, onAdd, itemAdded, setItemAdded}) => {

    const decrease = () => {
        if(itemAdded <= 0) {
        }else {
            setItemAdded(itemAdded - 1);
        }  
    };

    const increase = () => {
        if(itemAdded >= stockQty) {
        } else {
            setItemAdded(itemAdded + 1);
        }
    };

    return(
        <div className="item-count">
            <div className="counter-container">
                <button className="counter-btn " onClick={decrease}><p>-</p></button>
                <p>{itemAdded}</p>
                <button className="counter-btn " onClick={increase}><p>+</p></button>
            </div>
            <button className="counter-btn addToCart-btn" onClick={onAdd}><p>Añadir al carrito</p></button>
        </div>
    )
};

export default ItemCount; 