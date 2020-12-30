import React, {useState, useEffect, useParams} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import products from '../ItemListContainer/Item/products';

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});

const ItemDetailContainer = () => {
    const[productsData, setProductsData] = useState(false);

    useEffect(() => {
        getProducts.then((productsArr) => {
            setProductsData(productsArr);
        })
    }, []);

    return(
        <>
            {
                productsData ?
                <ItemDetail productsData={productsData}/>
                :
                <p>Cargando producto...</p>
            }
        </>
    )
}

export default ItemDetailContainer;
