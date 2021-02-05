import React, { useContext, useState, useEffect, memo } from 'react';
import { BiCart } from "react-icons/bi";
import {BsCircleFill} from 'react-icons/bs';
import { contextForCart } from '../../context/contextForCart';
import "./CartWidget.scss";

const CartWidget = memo(() => {

    const {cartQty} = useContext(contextForCart);

    return(
 
        <div className={cartQty ? 'cart-widget' : 'visibility'}>
            <BiCart className='cart-bi-icon'/>
            <div className="cart-widget-count">
                <BsCircleFill className='cart-circle-icon'/>
                <span className='cart-widget-number'>{cartQty}</span>
            </div>
        </div>    
    )
});

export default CartWidget;