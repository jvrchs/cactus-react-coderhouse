import React, {useState, useEffect, useContext} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import products from '../../data/products';
import {useParams} from 'react-router-dom';
import {context} from '../../context/context';

const ItemDetailContainer = () => {
    const[productsData, setProductsData] = useState(false);

    const idUrlParam = useParams();

    const {addItem, removeItem, clearCart, isInCart} = useContext(context);

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
                <ItemDetail 
                productsData={productsData} 
                id={idUrlParam} 
                addItem={addItem}
                removeItem={removeItem}
                clearCart={clearCart}
                isInCart={isInCart}
                />
                :
                <p>Cargando producto...</p>
            }
        </>
    )
}

export default ItemDetailContainer;
