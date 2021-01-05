import React from 'react';
import './ItemCount.scss';
import Button from '../Button/Button';

const ItemCount = ({
    className,
    stockQty, 
    onAdd, 
    itemAdded, 
    setItemAdded}) => {

    const decrease = () => {
        if(itemAdded <= 1) {
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

    return (
        <>
        {className === 'item-detail-counter' ?
        <div className={`item-count-wrapper ${className}`}>
            <div className="counter">
                <table>
                    <tr>
                        <td className="minus-plus"><button className="counter-btn" onClick={decrease}>-</button></td>

                        <td className="added-items"><p>{itemAdded}</p></td>

                        <td className="minus-plus"><button className="counter-btn" onClick={increase}>+</button></td>
                    </tr>
                </table>
            </div>
            <Button className="addToCart-btn" onClick={onAdd}>Añadir al carro</Button>   
        </div>
        :
        <div className={`item-count-wrapper ${className}`}>
            <div className="counter">
                <button className="counter-btn" onClick={decrease}><p>-</p></button>
                <p>{itemAdded}</p>
                <button className="counter-btn" onClick={increase}><p>+</p></button>
            </div>
            <button className="counter-btn addToCart-btn" onClick={onAdd}><p>Añadir al carrito</p></button>
        </div>
        }
        </>
    )
};

export default ItemCount; 