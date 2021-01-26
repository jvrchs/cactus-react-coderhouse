import React, {useEffect, useContext, useState} from 'react';
import {getFirestore} from '../../firebase/firebase';
import {context} from '../../context/context';
import Cart from './Cart'

const CartContainer = () => {
    
    const {cart, setCart, cartData, setCartData, addItem, clpCurrencyFormat, removeItem, total, setTotal} = useContext(context);

    const [newCart, setNewCart] = useState([]);
    
    const [productsData, setProductsData] = useState(false);

    const [qty, setQty] = useState(0);

    const onAdd = (itemAdded, id) => {
        setQty(itemAdded)
        addItem(id, itemAdded)
    }

    const cartUpdate = () => {
        setCart(newCart)
    }

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = db.collection('Items');
        const query = itemsCollection.get();

        query
        .then((response) => {
            let tempArr = [];
            response.docs.forEach(doc => {
                tempArr.push({
                    docId: doc.id,
                    itemData: doc.data()
                })
            });
            setProductsData(tempArr)
        })
        .catch((reject) => {
            console.log(reject)
        })
    }, []);

    return (
        <>
            {
                productsData ?
                <Cart productsData={productsData} cart={cart} newCart={newCart} setNewCart={setNewCart} addItem={addItem} cartData={cartData} setCartData={setCartData} total={total} setTotal={setTotal} qty={qty} setQty={setQty} onAdd={onAdd} clpCurrencyFormat={clpCurrencyFormat} removeItem={removeItem} cartUpdate={cartUpdate}/>
                :
                <p>LOADING</p>
            }
        </>
    )
}

export default CartContainer
