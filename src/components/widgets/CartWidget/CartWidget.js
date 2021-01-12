import React, { useContext, useState, useEffect, memo } from 'react';
import { BiCart } from "react-icons/bi";
import {BsCircleFill} from 'react-icons/bs';
import "./CartWidget.scss";
import {context} from '../../context/context';

const CartWidget = memo(() => {

    const {cart} = useContext(context);

    const [cartQty, setCartQty] = useState(0);

    useEffect(() => {
        let qtyInCart = 0;

        for(let i = 0; i < cart.length; ++i) {
            qtyInCart += cart[i].quantity 
        }

        setCartQty(qtyInCart)
    }, [cart])

    return(
        <>
            {
                cartQty ?
              
                    <div className='cart-widget'>
                        <BiCart className='cart-bi-icon'/>
                        <div className="cart-widget-count">
                            <BsCircleFill className='cart-circle-icon'/>
                            <span className='cart-widget-number'>{cartQty}</span>
                        </div>
                    </div> 
                    :
                    null
            }
        </>
        
    )
});

export default CartWidget;