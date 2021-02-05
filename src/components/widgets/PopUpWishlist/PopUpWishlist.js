import React, { useContext} from 'react';
import { contextForFirebase } from '../../context/contextForFirebase';
import './PopUpWishlist.scss';
import {FaHeart} from 'react-icons/fa';

const PopUpWishlist = () => {

    const {itemAddedWishlist, popUpHandler} = useContext(contextForFirebase);
    

    return (
        popUpHandler ?
        <div className="pop-up-container">
            <div className="pop-up-wrapper">
                <div className="pop-up-heart">
                    <FaHeart/>
                </div>
                <p>{itemAddedWishlist ? itemAddedWishlist.message : itemAddedWishlist.message}</p>
            </div>
        </div>
        : 
        null
    )
}

export default PopUpWishlist;
