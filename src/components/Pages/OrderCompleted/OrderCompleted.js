import React, {useState, useEffect, useContext} from 'react';
import {getFirestore} from '../../firebase/firebase';
import firebase from "firebase/app";
import "firebase/database";
import { ACTIONS } from '../../context/cartReducer';
import { contextForCart } from '../../context/contextForCart';
import { contextForFirebase } from '../../context/contextForFirebase';
import Loader from '../../widgets/Loader/Loader';
import CartTotal from '../../widgets/CartTotal/CartTotal';
import './OrderCompleted.scss';
import ScrollToTop from '../../widgets/ScrollToTop/ScrollToTop';

const OrderCompleted = ({order}) => {

    const {dispatch, cartData, total, clpCurrencyFormat} = useContext(contextForCart);

    const {currentUserData, loggedIn} = useContext(contextForFirebase);
  
    const [orderId, setOrderId] = useState('');

    const [loader, setLoader] = useState(true);

    const [orderData, setOrderData] = useState([]);

    const localUserId = localStorage.getItem('currentUserId');

    useEffect(() => {
         //Setting order in firestore and updating stock
        (() => {
            const db = getFirestore();
            const orders = db.collection("Orders");
            orders.add(order)
            .then(({ id }) => {
                let orderRef = db.collection("Orders").doc(id);
                orderRef.update({oid: id});
                setOrderId(id);
                setOrderData(cartData)
                setLoader(false);
                //Setting order id in user database
                if(loggedIn) {
                    let update = {};
                    if(currentUserData['orders']){
                        let userOrders = currentUserData['orders'];
                        update[`/users/${localUserId}/orders`] = [id, ...userOrders];
                        return firebase.database().ref().update(update);
                    } else{
                        update[`/users/${localUserId}/orders`] = [id];
                        return firebase.database().ref().update(update);
                    }
                }
            })
            .catch(err => {alert(err);})
            .finally (() => {dispatch({type: ACTIONS.CLEAR_CART})})

            for (let i = 0; i < order.items.length; ++i) {
                let docRef = db.collection("Items").doc(order.items[i].docId);
                docRef.update({stock: order.items[i].stock - order.items[i].quantity})
            }
        })();
    },[]);
 
    return (
        loader ?
        <Loader/>
        :
        <>
        <ScrollToTop/>
        <section className="order-section section-box">
            <div className="order-container section-container-box">
                <div className="section-title">
                    <h1>ORDEN COMPLETADA</h1>
                </div>
                <div className="order-id-wrapper">
                    <p>Código de orden</p>
                    <p>{orderId}</p>
                </div>
                <div className="cart-summary-wrapper">
                    <CartTotal cartData={orderData} total={total} clpCurrencyFormat={clpCurrencyFormat}/>
                </div>
            </div>
        </section>
        </>
    )
}

export default OrderCompleted