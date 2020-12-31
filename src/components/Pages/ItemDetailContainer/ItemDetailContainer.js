import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import products from '../ItemListContainer/Item/products';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const[productsData, setProductsData] = useState(false);

    const idUrlParam = useParams();

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        getProducts.then((productsArr) => {
            setProductsData(productsArr);
        })
    }, []);

    return(
        <>
            {
                productsData ?
                <ItemDetail productsData={productsData} id={idUrlParam}/>
                :
                <p>Cargando producto...</p>
            }
        </>
    )
}

export default ItemDetailContainer;
