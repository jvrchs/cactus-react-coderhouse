import React, {useContext, useState} from 'react'
import OrderCompleted from '../OrderCompleted/OrderCompleted';
import "firebase/firestore";
import CheckoutForm from '../../widgets/Form/CheckoutForm';
import { contextForCart } from '../../context/contextForCart';
import { contextForFirebase } from '../../context/contextForFirebase';
import './Checkout.scss';
import { Link } from 'react-router-dom';

const Checkout = () => {

    const { cartData, total, setCart, order, setOrder} = useContext(contextForCart);

    const {loggedIn, currentUserData, currentUserId} = useContext(contextForFirebase);

    const [isSubmited, setIsSubmited] = useState(false);

    const orderDetail = () => {
        let itemsInfo = cartData.map(item => {
            return {
                docId: item.docId,
                itemId: item.itemData.itemId,
                itemName: item.itemData.itemName,
                category: item.itemData.categoryName,
                price: item.itemData.price,
                offer: item.itemData.offer,
                quantity: item.itemData.quantity,
                stock: item.itemData.stock
            }
        })
        return itemsInfo
    }
  
    return (
        !isSubmited ?
        <section className="checkout-section section-box">
            <div className="checkout-container section-container-box">
                <div className="section-title">
                    <span></span>
                    <h1>CHECKOUT</h1>
                    <span></span>
                </div>
                {!loggedIn ?    
                <div className="pay-with-account">
                    <div>
                        <p><b>¿Desea comprar con su cuenta?</b></p>
                        <Link to='/mi-cuenta'><p>Iniciar sesión</p></Link>
                    </div>
                </div>
                :
                null    
                }
                <div className='checkout-form-container'>
                    <CheckoutForm currentUserData={currentUserData} currentUserId={currentUserId} loggedIn={loggedIn} setIsSubmited={setIsSubmited} setOrder={setOrder} total={total} orderDetail={orderDetail}/>
                </div>
            </div>
        </section> 
        :
        <>
        <OrderCompleted order={order} setCart={setCart}/>        
        </>
    )
}

export default Checkout
