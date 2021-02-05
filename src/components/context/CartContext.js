import React, {useReducer, useState, useEffect} from 'react';
import { cartReducer } from './cartReducer';
import { Provider } from './contextForCart';

const CartContext = ({children}) => {

    const localCart = JSON.parse(localStorage.getItem('cart'));

    const [cart, dispatch] = useReducer(cartReducer, localCart === null || localCart === [] ? [] : localCart)

    const [cartData, setCartData] = useState([]);

    const [cartQty, setCartQty] = useState(0);

    const [order, setOrder] = useState({});

    const [total, setTotal] = useState(0);

    const clpCurrencyFormat = price => {
        return new Intl.NumberFormat("es-CL", {style: "currency", currency: "CLP"}).format(price);
    } 

    const cartWidgetCounter = () => {
        let qtyInCart = 0;
        for(let i = 0; i < cart.length; ++i) {
            qtyInCart += cart[i].quantity 
        }
        setCartQty(qtyInCart)
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        cartWidgetCounter()
    }, [cart]);
    
    return (
        <Provider value={
            {
                cart, 
                cartData, 
                setCartData, 
                total, 
                setTotal, 
                order, 
                setOrder, 
                clpCurrencyFormat,
                dispatch,
                cartQty
            }}>
            {children}
        </Provider>
    )   
}

export default CartContext
