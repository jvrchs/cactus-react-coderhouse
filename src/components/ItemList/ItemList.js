import React, {useState, useEffect} from 'react';
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount';
import Products from '../Item/Products';
import "./ItemList.scss"

const ItemList = () => {
    const [items, setItems] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            let bringProducts = new Promise((resolve, reject) => {
                resolve(Products);
            });
            bringProducts.then((data) => {
                setItems(data);
            })
        }, 2000);
    });

    return(
        <>
            {
            items ? items.map((product, index) => {
                return(
                <div className="item-container">
                    <Item 
                    key={product.id} 
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    photo={product.pictureUrl}
                    alt={product.alt}
                    />
                    <ItemCount initial={0} stock={15}/>
                </div>
                )
                
            })
            : 
            <p>Cargando productos...</p>
            }
        </>
    )
};

export default ItemList;