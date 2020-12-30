import React, { useState, useEffect } from 'react';
import './ShopSection.scss';
import products from '../../ItemListContainer/Item/products';
import Item from '../../ItemListContainer/Item/Item';
import Button from '../../../Button/Button';

const getProducts = new Promise((resolve,reject) => {
    resolve(products);
});

const ShopSection = () => {
    const[itemsData, setItemsData] = useState(false);

    useEffect(() => {
        getProducts.then((productsArr) => {
            setItemsData(productsArr)
        })
    }, []);

    return (
        <>
            {
             itemsData ? 
            <section className="shop-section-container">
                <h2 className="section-title">TIENDA</h2>
                <div className="item-card-container">
                    {itemsData.map((item, index) => {
                        return(
                            <Item
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            category={item.category}
                            price={item.price}
                            image={item.images[0]}
                            alt={item.alt}/>
                        )
                    })}
                </div>
                <div className="shop-section-button">
                    <Button buttonSize="btn--large" buttonStyle="btn--primary">Ver todo</Button>
                </div>
            </section> 
            :
            <section>
                <p>Cargando...</p>
            </section>   
            }

        </>
    )
}

export default ShopSection;
