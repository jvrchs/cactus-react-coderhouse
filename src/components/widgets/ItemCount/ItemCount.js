import React, { useContext } from 'react';
import './ItemCount.scss';
import Button from '../Button/Button';
import { ACTIONS } from '../../context/cartReducer';
import { contextForCart } from '../../context/contextForCart';

const ItemCount = (props) => {

    const {className, stockQty, onAdd, itemAdded, setItemAdded, itemId, dispatch, handleAlert} = props;

    const {cart} = useContext(contextForCart);

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

    const addToCart = () => {
        dispatch({type: ACTIONS.ADD_ITEM, payload:{itemId: itemId, quantity: itemAdded}});
        onAdd(itemAdded);
        const isInCart = cart.filter(item => item.itemId === itemId);
        if(isInCart.length !== 0) {
            const [itemObj] = isInCart;
            if(itemObj['quantity'] >= stockQty) {
                handleAlert();
            }  
        } 
    };

    const addToCartCard = () => {
        const isInCart = cart.filter(item => item.itemId === itemId);
        if(isInCart.length !== 0) {
            const [itemObj] = isInCart;
            if(itemObj['quantity'] >= stockQty) {
                handleAlert();
            } else {
                dispatch({type: ACTIONS.ADD_ITEM, payload:{itemId: itemId, quantity: itemAdded}});
            } 
        } else {
            dispatch({type: ACTIONS.ADD_ITEM, payload:{itemId: itemId, quantity: itemAdded}});
        }
    };

    return (
        <>
        {className === 'item-detail-counter' ?
            <div className={`item-count-wrapper ${className}`}>
                <div className="counter">
                    <table>
                        <tbody>
                            <tr>
                                <td className="minus-plus"><button className="counter-btn" onClick={decrease}>-</button></td>

                                <td className="added-items"><p>{itemAdded}</p></td>

                                <td className="minus-plus"><button className="counter-btn" onClick={increase}>+</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Button className="addToCart-btn" onClick={addToCart}>Añadir al carro</Button>   
            </div>
            :
            <div className={`item-count-wrapper ${className}`}>
                <div className="counter">
                    <button className="counter-btn" onClick={decrease}><p>-</p></button>
                    <p>{itemAdded}</p>
                    <button className="counter-btn" onClick={increase}><p>+</p></button>
                </div>
                <button className="counter-btn addToCart-btn" onClick={addToCartCard}><p>Añadir al carrito</p></button>
            </div>
        }
        </>
    )
};

export default ItemCount; 