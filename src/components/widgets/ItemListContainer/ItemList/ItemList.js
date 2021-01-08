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
                    productsData.map((item, index) => {
                        return (
                            <>
                                {
                                item.categoryPathName === categoryUrl.categoryId ?
                                <ItemCard 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                category={item.category}
                                description={item.description}
                                price={item.price}
                                offer={item.offer ? item.offer[1] : null}
                                image={item.images[0]}
                                alt={item.alt}
                                stock={item.stock}/>   
                                :
                                null
                                }
                            </>
                        )
                    })
                    :
                    productsData.map((item, index) => {
                        return (
                            <>
                                <ItemCard 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                category={item.category}
                                description={item.description}
                                price={item.price}
                                offer={item.offer ? item.offer[1] : null}
                                image={item.images[0]}
                                alt={item.alt}
                                stock={item.stock}/>   
                            </>
                        )
                    })
                    }
                </div>
            </div>
        </section>
    )
};

export default ItemList;