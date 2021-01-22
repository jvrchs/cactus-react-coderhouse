import React, {useState, useEffect, useContext} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import {context} from '../../context/context';
import {getFirestore} from '../../firebase/firebase';

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
        const db = getFirestore();
        const itemsCollection = db.collection('Items');
        const query = itemsCollection.get();

        query
        .then((response) => {
            let tempArr = [];
            response.docs.forEach(doc => {
                tempArr.push(doc.data())
            });
            setProductsData(tempArr)
        })
        .catch((reject) => {
            console.log(reject)
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
