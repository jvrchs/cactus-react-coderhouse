import React, {useState, useEffect} from 'react';
import {getFirestore} from '../../firebase/firebase';

const OrderCompleted = ({order, setCart}) => {
  
    const [orderId, setOrderId] = useState('');

    const [error, setError] = useState('');

    useEffect(() => {
        const db = getFirestore();
        const orders = db.collection("Orders");
        orders.add(order).then(({ id }) => {
            setOrderId(id);
        }).catch(err => {
            setError(err);
        }).finally (() => {
            setCart([])    
        })
       
        for (let i = 0; i < order.items.length; ++i) {
            let docRef = db.collection("Items").doc(order.items[i].docId);
            let updateStock = docRef.update({
                stock: order.items[i].stock - order.items[i].quantity
            })
        }
    }, [])

    return (
       <section className="order-section section-box">
           <div className="order-container section-container-box">
                <p>{`Su código de orden es ${orderId}`}</p>
           </div>
       </section>
    )
}

export default OrderCompleted
