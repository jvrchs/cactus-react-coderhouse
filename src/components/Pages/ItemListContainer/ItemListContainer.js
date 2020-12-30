import React, {useState, useEffect} from 'react';
import ItemList from './ItemList/ItemList';
import products from './Item/products';

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products); 
    }, 2000);     
});

const ItemListContainer = () => {
    const [productsData, setProductsData] = useState(false);

    useEffect(() => {
        getProducts.then((productsArr) => {
            setProductsData(productsArr);
        })  
    }, []);

    return(
        <>
            {
                productsData ? 
                <ItemList productsData={productsData}/>
                : 
                <p>Cargando productos...</p> 
            }  
        </>
   ) 
};

export default ItemListContainer;