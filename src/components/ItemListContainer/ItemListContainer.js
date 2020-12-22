import React, {useState, useEffect} from 'react';
import ItemList from './ItemList/ItemList';
import products from './Item/products';
import "./ItemListContainer.scss"

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products); 
    }, 2000);     
});

const ItemListContainer = () => {
    const [itemData, setItemData] = useState(false);

    useEffect(() => {
        getProducts.then((itemData) => {
            setItemData(itemData);
        })  
    }, []);

    return(
        <>
            {
                itemData ? 
                <div className='item-list-container'>
                    <ul>
                        {itemData.map((product, index) => {
                        return (
                            <ItemList 
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            photo={product.pictureUrl}
                            alt={product.alt}/>   
                        )
                        })}
                    </ul>
                </div>
                : 
                <p>Cargando productos...</p> 
            }  
        </>
   ) 
};

export default ItemListContainer;