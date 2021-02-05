import React, {useEffect, useState} from 'react';
import ItemList from './ItemList/ItemList';
import {useParams, useLocation} from 'react-router-dom';
import Loader from '../Loader/Loader';
import {getFirestore} from '../../firebase/firebase'
import AlertMessage from '../AlertMessage/AlertMessage';

const ItemListContainer = () => {

    const [productsData, setProductsData] = useState([])

    const [loader, setLoader] = useState(true)

    const [showAlert, setShowAlert] = useState(false);

    const categoryParam = useParams();

    const location = useLocation();

    const sortProductsByName = productsData => {
        const orderedProducts = productsData.sort((a, b) => {
            const itemA = a.itemName.toLowerCase();
            const itemB = b.itemName.toLowerCase();  
            if (itemA < itemB) {
                return -1
            }
            if (itemA > itemB) {
                return 1
            }
            return 0
        })
        return orderedProducts
    };

    const handleAlert = () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);
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
            setProductsData(sortProductsByName(tempArr))
            setLoader(false)
        })
        .catch((reject) => {
            console.log(reject);
        });
    }, []);

    return(
        <>
            { 
            loader ? 
            <Loader/>
            :
            <>
            {!showAlert ? null : <AlertMessage message={'No hay más stock de este item'}/>}
            <ItemList productsData={productsData} categoryUrl={categoryParam} location={location} handleAlert={handleAlert}/>
            </>
            }         
        </>
   ) 
}

export default ItemListContainer;