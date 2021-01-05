import React, {useEffect, useState} from 'react';
import products from '../../ItemListContainer/Item/products';
import {useParams} from 'react-router-dom';
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
            }
            console.log(productsArr);
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