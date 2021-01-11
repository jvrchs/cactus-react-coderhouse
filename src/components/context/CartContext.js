import React, {useState, useContext} from 'react';
import {Provider} from './context';

const CartContext = ({children}) => {

    const [cart, setCart] = useState([]);
    console.log(cart);

    const addItem = (id, qty) => {
        let tempArr = [];
        const itemObject = {
            itemId: id,
            quantity: qty
        }

        for (let i = 0; i < cart.length; i++) {
            if (cart.length !== 0) {
                if (id !== cart[i].itemId) {
                    tempArr.push(cart[i]); 
                } else {
                    itemObject.quantity = qty + cart[i].quantity
                } 
            }
        }
        tempArr.push(itemObject);
        setCart(tempArr);    
    } 

    const removeItem = id => {
        const tempArr = cart.filter(item => item.itemId !== id);
        setCart(tempArr);
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        const tempArr = cart.filter(item => item.itemId === id);
        return(tempArr.length > 0 ? true : false);
    }

    return (
        <Provider value={{addItem, removeItem, clearCart, isInCart}}>
            {children}
        </Provider>
    )   
}

export default CartContext
