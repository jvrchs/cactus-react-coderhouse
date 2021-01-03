import React, {useState, useEffect} from 'react';
import ItemList from './ItemList/ItemList';
import products from './Item/products';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {
    const [productsData, setProductsData] = useState(false);

    const categoryParam = useParams();

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products); 
            }, 1000);     
        });
        getProducts.then((productsArr) => {
            setProductsData(
                productsArr.sort((a, b) => {
                    const itemA = a.title.toLowerCase();
                    const itemB = b.title.toLowerCase();
                    if (itemA < itemB) {
                        return -1;
                    }
                    if (itemA > itemB) {
                        return 1;
                    }
                    return 0;
                })
            );
        }) 
    }, []);

    return(
        <>
            {
                productsData ? 
                <ItemList productsData={productsData} categoryUrl={categoryParam}/>
                : 
                <p>Cargando productos...</p> 
            }  
        </>
   ) 
};

export default ItemListContainer;