import React, {useState, useEffect} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { Provider } from './contextForFirebase';
const FirebaseContext = ({children}) => {

    const localUserData = JSON.parse(localStorage.getItem('currentUserData'));
    
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true' ? true : false);

    const [currentUserId, setCurrentUserId] = useState('');

    const [currentUserData, setCurrentUserData] = useState(localUserData === null || localUserData === {} ? {} : localUserData);

    const [wishlistClicked, setWishlistClicked] = useState(false);

    const [itemAddedWishlist, setItemAddedWishlist] = useState(false);

    const [popUpHandler, setPopUpHandler] = useState(false);
 
    const addWishlist = itemId => {
        setPopUpHandler(true);
        setTimeout(() => setPopUpHandler(false), 5000);
        let update = {};
        if(currentUserData['wishlist']){
            let userWishlist = currentUserData['wishlist'];
            if(userWishlist.includes(itemId)){
                setItemAddedWishlist({value: false, message: 'El item ya se encuentra en el wishlist'});
            } else {
                setItemAddedWishlist({value: true, message: 'Item añadido a wishlist'});
                update[`/users/${currentUserId}/wishlist`] = [itemId, ...userWishlist];
                return firebase.database().ref().update(update);
            }
        } else{
            setItemAddedWishlist({value: true, message: 'Item añadido a wishlist'});
            update[`/users/${currentUserId}/wishlist`] = [itemId];
            return firebase.database().ref().update(update)
        }
    };

    useEffect(() => {
        //Realtime database users listener
        const localUserId = localStorage.getItem('currentUserId')
        let databaseListener = firebase.database().ref(`users/${localUserId}`);
        databaseListener.on('value', snap => {
            const data = snap.val();
            if(!data['wishlist']) {
                data['wishlist'] = [];
            };
            if(!data['orders']) {
                data['orders'] = []
            }
            localStorage.setItem('currentUserData', JSON.stringify(data));
            const localData = JSON.parse(localStorage.getItem('currentUserData'))
            setCurrentUserData(localData);
        });
    }, [loggedIn])

    return (
        <Provider value={{
            loggedIn,
            setLoggedIn,
            currentUserId,
            setCurrentUserId,
            currentUserData,
            setCurrentUserData,
            addWishlist,
            wishlistClicked,
            setWishlistClicked,
            itemAddedWishlist,
            setItemAddedWishlist,
            popUpHandler
        }}>
            {children}
        </Provider>
    )
}

export default FirebaseContext
