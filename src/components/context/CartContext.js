import React, {useState} from 'react';
import {Provider} from './context';

const CartContext = ({children}) => {

    const [cart, setCart] = useState([]);

    const [tempCart, setTempCart] = useState(cart);

    const clpCurrencyFormat = (price) => {
        return new Intl.NumberFormat("es-CL", {style: "currency", currency: "CLP"}).format(price)
    } 

    const cartSortedByName = cart => {
        const orderedCart = cart.sort((a, b) => {
            const itemA = a.itemId.toLowerCase();
            const itemB = b.itemId.toLowerCase();  
            if (itemA < itemB) {
                return -1
            }
            if (itemA > itemB) {
                return 1
            }
            return 0
        })
     
        setCart(orderedCart)
    }

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

        cartSortedByName(tempArr);    
    } 

    const removeItem = id => {
        const tempArr = cart.filter(item => item.itemId !== id);
        cartSortedByName(tempArr); 
    }

    const updateCart = (id, newQty) => {

        let tempArr = cart.filter(item => item.itemId !== id);

        const itemObject = {
            itemId: id,
            quantity: newQty.count
        };
        
        tempArr.push(itemObject);
        
        cartSortedByName(tempArr); 
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = id => {
        const tempArr = cart.filter(item => item.itemId === id);
        return(tempArr.length > 0 ? true : false);
    }

    return (
        <Provider value={{cart, setCart, addItem, removeItem, clearCart, isInCart, clpCurrencyFormat, updateCart, tempCart}}>
            {children}
        </Provider>
    )   
}

export default CartContext
