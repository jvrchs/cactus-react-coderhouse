import React, {useState, useEffect, useContext} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import products from '../../data/products';
import {useParams} from 'react-router-dom';
import {context} from '../../context/context';

const ItemDetailContainer = () => {

    const[productsData, setProductsData] = useState(false);

    const [qty, setQty] = useState(0);

    const [itemAdded, setItemAdded] = useState(1);

    const idUrlParam = useParams();

    const {addItem} = useContext(context);

    const onAdd = () => {
        setQty(itemAdded);
    };

    const setItemsToCart = () => {
        addItem(idUrlParam.itemId, qty)
    }

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
                id={idUrlParam.itemId} 
                qty={qty}
                setQty={setQty}
                itemAdded={itemAdded}
                setItemAdded={setItemAdded}
                onAdd={onAdd}
                setItemsToCart={setItemsToCart}
                addItem={addItem}
                />
                :
                <p>Cargando producto...</p>
            }
        </>
    )
}

export default ItemDetailContainer;
