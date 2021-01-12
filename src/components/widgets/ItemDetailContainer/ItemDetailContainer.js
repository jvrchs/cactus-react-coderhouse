import React, {useState, useEffect, useContext} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import products from '../../data/products';
import {useParams} from 'react-router-dom';
import {context} from '../../context/context';

const ItemDetailContainer = () => {

    const[productsData, setProductsData] = useState(false);

    const [itemAdded, setItemAdded] = useState(1);
        
    const [qty, setQty] = useState(0);

    const idUrlParam = useParams();

    const {clpCurrencyFormat, cart, addItem} = useContext(context);

    const onAdd = (itemAdded, id) => {
        setQty(itemAdded)
        addItem(id, itemAdded)
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
                itemAdded={itemAdded}
                setItemAdded={setItemAdded}
                onAdd={onAdd}
                clpCurrencyFormat={clpCurrencyFormat}
                cart={cart}
                qty={qty}
                />
                :
                <p>Cargando producto...</p>
            }
        </>
    )
}

export default ItemDetailContainer;
