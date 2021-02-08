import React, {useContext, useState, useEffect} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import DashboardAddressForm from '../../widgets/Form/DashboardAddressForm';
import DashboardPhoneForm from '../../widgets/Form/DashboardPhoneForm';
import ContactDetails from '../../widgets/CustomerDetails/ContactDetails';
import AddressDetails from '../../widgets/CustomerDetails/AddressDetails';
import OrdersWishlistContent from '../../widgets/OrdersWishlistContent/OrdersWishlistContent';
import { contextForFirebase } from '../../context/contextForFirebase';
import {getFirestore} from '../../firebase/firebase';
import './Dashboard.scss';
import '../../widgets/Form/Form.scss';
import Loader from '../../widgets/Loader/Loader';

const Dashboard = () => {

    const {currentUserData, loggedIn} = useContext(contextForFirebase);

    const [clicked, setClicked] = useState(false);

    const [clickedAttribute, setClickedAttribute] = useState('');

    const [wishlistData, setWishlistData] = useState([]);

    const [ordersData, setOrdersData] = useState([]);

    const [loader, setLoader] = useState(true);

    const localUserId = localStorage.getItem('currentUserId');

    const handleClick = attribute => {
        setClicked(!clicked);
        setClickedAttribute(attribute);
    }

    const writePhone = phone => {
        let update = {};
        update[`/users/${localUserId}/phone`] = phone;
        return firebase.database().ref().update(update);
    }

    const writeAddress = address => {
        let update = {};
        update[`/users/${localUserId}/address`] = address;
        return firebase.database().ref().update(update);
    }

    const settingWishlistData = () => {
        if(currentUserData['wishlist'] && currentUserData['wishlist'].length !== 0) {
            const db = getFirestore();
            const itemsCollection = db.collection('Items');
            const query = itemsCollection.get();
            query.then(response => {
                let tempArr= [];
                response.docs.forEach(doc => {
                    if(currentUserData['wishlist'].includes(doc.data().itemId)) {
                        tempArr.push(doc.data())
                    }
                });
                setWishlistData(tempArr)
            });
        } else {
            setWishlistData([])
        }
    }

    const settingOrdersData = () => {
        if(currentUserData['orders'] && currentUserData['orders'].length !== 0) {
            const db = getFirestore();
            const ordersCollection = db.collection('Orders');
            const query = ordersCollection.get();
            query.then(response => {
                let tempArr= [];
                response.docs.forEach(doc => {
                    if(currentUserData['orders'].includes(doc.data().oid)) {
                        tempArr.push(doc.data())
                    }  
                });
                setOrdersData(tempArr.reverse())              
            });
        } else {
            setOrdersData([])
        }
    }

    if(!loggedIn){
        window.location.hash = '/mi-cuenta'
    }

    useEffect(() => {
            settingWishlistData();
            settingOrdersData();
            setTimeout(() => setLoader(false), 2000)
            
    }, [currentUserData]) 
  
    return (
        loader ?
            <Loader/>
            :
            <>
            <section className="dashboard-section section-box">
                <div className="dashboard-container section-container-box">
                    <div className="section-title">
                        <h1>MI CUENTA</h1>
                    </div>
                    <div className="dashboard-details-container">
                        <div className="customer-information">
                            <ContactDetails currentUserData={currentUserData} handleClick={handleClick} clicked={clicked}/>
                            <AddressDetails currentUserData={currentUserData} clicked={clicked} handleClick={handleClick}/>
                        </div>
                        <div className='customer-orders-details'>
                            {!clicked ? 
                            <OrdersWishlistContent ordersData={ordersData} wishlistData={wishlistData}/>
                            :
                            <>
                            {clickedAttribute === 'address' ?
                            <DashboardAddressForm clicked={clicked} handleClick={handleClick} writeAddress={writeAddress} />
                            :
                            <DashboardPhoneForm clicked={clicked} setClicked={setClicked} handleClick={handleClick} writePhone={writePhone} />
                            }
                            </>
                            } 
                        </div>
                    </div>
                </div>    
            </section>
            </>
    )
}

export default Dashboard
