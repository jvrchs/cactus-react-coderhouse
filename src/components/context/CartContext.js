import React, {useEffect, useState} from 'react';
import {Provider} from './context';
import firebase from "firebase/app";
import "firebase/auth";

const CartContext = ({children}) => {

    const [cart, setCart] = useState([]);

    const [cartData, setCartData] = useState([]);

    const [order, setOrder] = useState({});

    const [total, setTotal] = useState(0);

    const [loggedIn, setLoggedIn] = useState(false);
    console.log(loggedIn);
    const [currentUserId, setCurrentUserId] = useState(null);
    console.log(currentUserId);
    const [currentUserData, setCurrentUserData] = useState({})
    console.log(currentUserData);
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

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = id => {
        const tempArr = cart.filter(item => item.itemId === id);
        return(tempArr.length > 0 ? true : false);
    }

    //Add a realtime auth listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            setLoggedIn(true);
        }
    });

    useEffect(() => {
        //Realtime database listener
        let databaseListener = firebase.database().ref(`users/${currentUserId}`);
        console.log(databaseListener);
        databaseListener.on('value', snap => {
            const data = snap.val();
            setCurrentUserData(data);
        })
    }, [loggedIn])

    return (
        <Provider value={
            {
                cart, 
                setCart, 
                cartData, 
                setCartData, 
                total, 
                setTotal, 
                order, 
                setOrder, 
                addItem, 
                removeItem, 
                clearCart, 
                isInCart, 
                clpCurrencyFormat, 
                loggedIn, 
                setLoggedIn,
                currentUserData, 
                setCurrentUserData,
                currentUserId, 
                setCurrentUserId}}>
            {children}
        </Provider>
    )   
}

export default CartContext
