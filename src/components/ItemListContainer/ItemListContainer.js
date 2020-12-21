import React, {useState, useEffect} from 'react';
import ItemList from './ItemList/ItemList';
import products from './Item/products';
import "./ItemListContainer.scss"

const ItemListContainer = () => {
    const [itemData, setItemsContainer] = useState(false);

    useEffect(() => {
        let bringProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products); 
            }, 2000);     
        });
        bringProducts.then((itemData) => {
            setItemsContainer(itemData);
        })  
    });

    return(
        <>
            <div className='item-list-container'>
                <ul>
                    {
                    itemData ? 
                    itemData.map((product, index) => {
                        return (
                            <ItemList 
                            key={index}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            photo={product.pictureUrl}
                            alt={product.alt}/>   
                        )
                    })
                    : 
                    <p>Cargando productos...</p> 
                    }
                </ul>
            </div>  
        </>

   ) 
};

export default ItemListContainer;