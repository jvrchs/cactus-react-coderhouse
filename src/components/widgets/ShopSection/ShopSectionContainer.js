import React, {useEffect, useState} from 'react';
import ShopSection from './ShopSection';
import {getFirestore} from '../../firebase/firebase';
import Loader from '../Loader/Loader';

const ShopSectionContainer = ({handleAlert}) => {

    const[productsData, setProductsData] = useState(false);

    const [loader, setLoader] = useState(true);

    const productsSortedByName = products => {
        const orderedProducts = products.sort((a,b) => {
            const itemA = a.itemName.toLowerCase();
            const itemB = b.itemName.toLowerCase();
            if (itemA < itemB) {
                return -1;
            }
            if (itemA > itemB) {
                return 1;
            }
            return 0;
        })
        return orderedProducts;
    }

    useEffect(() => {
        
        let mounted = true;

        const db = getFirestore();
        const itemsCollection = db.collection('Items');
        const query = itemsCollection.get();
        query.then(response => {
            let tempArr = [];
            let randomProductsArr = [];
            response.docs.forEach(doc => {
                tempArr.push(doc.data())
            });

            for (let i = 0; i < 8; i++) {
                let index = Math.floor(Math.random() * tempArr.length);
                randomProductsArr.push(tempArr[index]);
                tempArr.splice(index,1);
            }

            if(mounted) {
                setProductsData(productsSortedByName(randomProductsArr))
                setLoader(false)
            }
       })

       return () => {mounted = false}
    }, [])

    return (
        <>
            {
                loader ?
                <Loader/>
                :
                <ShopSection productsData={productsData} handleAlert={handleAlert}/>
            }
        </>
    )
}

export default ShopSectionContainer;
