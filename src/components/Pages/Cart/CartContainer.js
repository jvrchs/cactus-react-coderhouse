import React, {useEffect, useContext, useState} from 'react';
import {getFirestore} from '../../firebase/firebase';
import Cart from './Cart';
import { contextForCart } from '../../context/contextForCart';
import './Cart.scss';
import Loader from '../../widgets/Loader/Loader';
import AlertMessage from '../../widgets/AlertMessage/AlertMessage';

const CartContainer = () => {
    
    const {cart, cartData, setCartData, clpCurrencyFormat, total, setTotal, dispatch} = useContext(contextForCart);

    const [productsData, setProductsData] = useState(false);

    const [showAlert, setShowAlert] = useState(false);

    const [loader, setLoader] = useState(true);

    const handleAlert = () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);
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
            setLoader(false);
        })
        .catch((reject) => {
            console.log(reject)
        })
    }, []);

    return (
        <>
            {
                loader ?
                <Loader/>
                :
                <>
                    {!showAlert ? null : <AlertMessage message='No hay más stock de este item'/>}
                    <Cart productsData={productsData} cart={cart} cartData={cartData} setCartData={setCartData} total={total} setTotal={setTotal} clpCurrencyFormat={clpCurrencyFormat} dispatch={dispatch} handleAlert={handleAlert}/>
                </>
            }
        </>
    )
}

export default CartContainer
