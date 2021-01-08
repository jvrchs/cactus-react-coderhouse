import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import products from '../../data/products';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const[productsData, setProductsData] = useState(false);

    const idUrlParam = useParams();

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            resolve(products);    
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
