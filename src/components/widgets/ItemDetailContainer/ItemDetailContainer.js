import React, {useState, useEffect, useContext} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import { contextForCart } from '../../context/contextForCart';
import { contextForFirebase } from '../../context/contextForFirebase';
import Loader from '../Loader/Loader';
import {getFirestore} from '../../firebase/firebase';

const ItemDetailContainer = () => {

    const {clpCurrencyFormat, cart, dispatch} = useContext(contextForCart);

    const {addWishlist} = useContext(contextForFirebase);

    const [productsData, setProductsData] = useState([]);

    const [loader, setLoader] = useState(true);

    const [itemAdded, setItemAdded] = useState(1);
        
    const [qty, setQty] = useState(0);

    const idUrlParam = useParams();

    const onAdd = itemAdded => {
        setQty(itemAdded)
    }

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = db.collection('Items');
        const query = itemsCollection.get();

        query
        .then((response) => {
            let tempArr = [];
            response.docs.forEach(doc => {
                tempArr.push(doc.data())
            });
            setProductsData(tempArr)
            setLoader(false)
        })
        .catch((reject) => {
            console.log(reject)
        })
    }, []);

    return(
        <>
            {
            loader ?
            <Loader/> 
            :
            <ItemDetail 
            productsData={productsData} 
            id={idUrlParam.itemId} 
            itemAdded={itemAdded}
            setItemAdded={setItemAdded}
            onAdd={onAdd}
            clpCurrencyFormat={clpCurrencyFormat}
            cart={cart}
            qty={qty}
            dispatch={dispatch}
            addWishlist={addWishlist}
            />
            }
        </>
    )
}

export default ItemDetailContainer;
