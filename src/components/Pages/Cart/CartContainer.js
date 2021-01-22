import React, {useEffect, useContext, useState} from 'react';
import {getFirestore} from '../../firebase/firebase';
import {context} from '../../context/context';
import Cart from './Cart'

const CartContainer = () => {

    const [cartData, setCartData] = useState([]);

    const[productsData, setProductsData] = useState(false);

    const {cart, addItem, clpCurrencyFormat, removeItem} = useContext(context);

    const[total, setTotal] = useState(0);

    const [qty, setQty] = useState(0);

    const onAdd = (itemAdded, id) => {
        setQty(itemAdded)
        addItem(id, itemAdded)
    }

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = db.collection('Items');
        const query = itemsCollection.get();

        query
        .then((response) => {
            let tempArr = [];
            response.docs.forEach(doc => {
                tempArr.push(doc.data())
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
                <Cart productsData={productsData} cart={cart} addItem={addItem} cartData={cartData} setCartData={setCartData} total={total} setTotal={setTotal} qty={qty} setQty={setQty} onAdd={onAdd} clpCurrencyFormat={clpCurrencyFormat} removeItem={removeItem} />
                :
                <p>LOADING</p>
            }
        </>
    )
}

export default CartContainer
