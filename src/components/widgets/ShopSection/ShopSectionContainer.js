import React, {useEffect, useState} from 'react';
import ShopSection from './ShopSection';
import {getFirestore} from '../../firebase/firebase';

const ShopSectionContainer = () => {

    const[productsData, setProductsData] = useState(false);

    useEffect(() => {
       const db = getFirestore();
       console.log(db);
       const itemsCollection = db.collection('Items');
       console.log(itemsCollection);
       const query = itemsCollection.get();
       console.log(query);

       query.then(response => {
           let tempArr = [];
           let randomProductsArr = [];

           console.log(response);
           response.docs.forEach(doc => {
               console.log(doc);
               tempArr.push(doc.data())
           });

           for (let i = 0; i < 8; i++) {
               let index = Math.floor(Math.random() * tempArr.length);
               randomProductsArr.push(tempArr[index]);
               tempArr.splice(index,1);
           }
           setProductsData(randomProductsArr)
       })
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
