import React, {useState, useEffect} from 'react';
import Loader from '../Loader/Loader';
import WishlistItem from './WishlistItem';

const Wishlist = ({wishlistData, deleteItem}) => {

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(false)
    }, [])

    return (
       
        <div className="wishlist-content">
            {loader ?
            <Loader/>
            :
            <>
            {wishlistData.length !== 0 ?
            <>
            {wishlistData.map(item => {
                return(
                    <WishlistItem item={item} key={item.itemId} deleteItem={deleteItem}/>
                )
            })}
            </>
            :
            <div className="empty-order-wishlist">
                <p>No tienes items agregados en tu wishlist</p>
            </div>
            }
            </>
            }  
        </div>
    )
}

export default Wishlist
