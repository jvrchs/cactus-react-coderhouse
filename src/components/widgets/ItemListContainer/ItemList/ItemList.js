import React from 'react';
import ItemCard from '../../ItemCard/ItemCard';
import "./ItemList.scss";

const ItemList = ({productsData, categoryUrl, location}) => {

    return(
        <section className='item-list-section section-box'>
            <div className="item-list-container item-list-container-box">
                <div className="section-title">
                    <span></span>
                    <h1>{location.pathname === '/tienda' ? 'TIENDA' : categoryUrl.categoryId.split('-').join(' ').toUpperCase()}</h1>
                    <span></span>
                </div>
                <div className="item-list-cards-container">
                    {categoryUrl.categoryId ? 
                    productsData.filter(item => item.categoryId === categoryUrl.categoryId).map((item) => {
                        return(
                            <ItemCard 
                            key={item.itemId}
                            id={item.itemId}
                            title={item.itemName}
                            category={item.categoryName}
                            description={item.description}
                            price={item.price}
                            offer={item.offer ? item.offer[1] : null}
                            image={item.images[0]}
                            alt={item.alt}
                            stock={item.stock}
                            />   
                        )
                    })
                    :
                    productsData.map((item) => {
                        return (
                                <ItemCard 
                                key={item.itemId}
                                id={item.itemId}
                                title={item.itemName}
                                category={item.categoryName}
                                description={item.description}
                                price={item.price}
                                offer={item.offer ? item.offer[1] : null}
                                image={item.images[0]}
                                alt={item.alt}
                                stock={item.stock}/>   
                        )
                    })
                    }
                </div>
            </div>
        </section>
    )
};

export default ItemList;