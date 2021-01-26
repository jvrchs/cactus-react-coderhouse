import React, {useEffect, useState} from 'react';
import ShopSection from './ShopSection';
import {getFirestore} from '../../firebase/firebase';

const ShopSectionContainer = () => {

    const[productsData, setProductsData] = useState(false);

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
                setProductsData(randomProductsArr)
                }
       })

       return () => {mounted = false}

    }, [])

    return (
        <>
            {
                productsData ?
                <ShopSection productsData={productsData}/>
                :
                <p>Cargando productos...</p>
            }
        </>
    )
}

export default ShopSectionContainer;
