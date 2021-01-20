import React, {useState, useEffect} from 'react';
import ItemList from './ItemList/ItemList';
import products from '../../data/products';
import {useParams, useLocation} from 'react-router-dom';
import {getFirestore} from '../../firebase/firebase';

const ItemListContainer = () => {
    const [productsData, setProductsData] = useState(false);

    const categoryParam = useParams();

    const location = useLocation();

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
        })
        .catch((reject) => {
            console.log(reject);
        });
    }, []);

    return(
        <>
               { productsData ? 
                <ItemList productsData={productsData} categoryUrl={categoryParam} location={location}/>
                : 
                <p>Cargando productos...</p>  }         
        </>
   ) 
}

export default ItemListContainer;