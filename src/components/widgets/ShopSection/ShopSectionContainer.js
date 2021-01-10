import React, {useEffect, useState} from 'react';
import products from '../../data/products';
import ShopSection from './ShopSection';

const ShopSectionContainer = () => {
    const[productsData, setProductsData] = useState(false);

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            resolve(products);
        });
        getProducts.then((productsArr) => {

            let randomProductsArr = [];

            for (let i = 0; i < 8; i++) {
                let index = Math.floor(Math.random() * productsArr.length);
                randomProductsArr.push(productsArr[index]);
                productsArr.splice(index,1);
            }

            setProductsData(randomProductsArr);

            for (let j = 0; j < randomProductsArr.length; j++) {
                productsArr.push(randomProductsArr[j]);
            };
        })
    }, []);

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
