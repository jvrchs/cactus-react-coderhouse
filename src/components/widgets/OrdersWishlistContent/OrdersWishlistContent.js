import React, { useEffect, useState, useContext } from 'react'
import MyOrders from './MyOrders';
import Wishlist from './Wishlist';
import firebase from 'firebase/app'

import { contextForFirebase } from '../../context/contextForFirebase';

const OrdersWishlistContent = ({wishlistData, ordersData}) => {

    const [dashboardNavSelection, setDashboardNavSelection] = useState('orders');

    const {currentUserData, wishlistClicked} = useContext(contextForFirebase);

    const handleDashNavSelection = section => {
        setDashboardNavSelection(section)
    }

    const deleteItem = itemId => {
        let newWishlist = currentUserData.wishlist.filter(item => item !== itemId)
        let update = {};
        update[`/users/${currentUserData.uid}/wishlist`] = newWishlist;
        return firebase.database().ref().update(update);
    }

    useEffect(() => {
        wishlistClicked ? setDashboardNavSelection('wishlist') : setDashboardNavSelection('orders')
    }, []);

    return (
        <div className="orders-wishlist-container">
            <div className="orders-wishlist-row">
                <div className="orders-wishlist-wrapper">
                    <header>
                        <nav>
                            <ul>
                                <li className={dashboardNavSelection === 'orders' ? 'selected-section' : null} onClick={() => handleDashNavSelection('orders')}><p><strong>Mis órdenes</strong></p></li>
                                <li className={dashboardNavSelection === 'wishlist' ? 'selected-section' : null}  onClick={() => handleDashNavSelection('wishlist')}><p><strong>Wishlist</strong></p></li>
                            </ul>
                        </nav>
                    </header>
                    <div className="orders-wishlist-content">
                        {dashboardNavSelection === 'orders' ?
                        <MyOrders ordersData={ordersData}/>
                        :
                        <Wishlist wishlistData={wishlistData} deleteItem={deleteItem}/>
                        }
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default OrdersWishlistContent
