import React from 'react';
import Item from '../Item/Item';
import "./ItemList.scss";

const ItemList = ({productsData}) => {
    console.log(productsData)
    return(
        <section className='item-list'>
            {productsData.map((item, index) => {
            return (
                <Item 
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.images[0]}
                alt={item.alt}/>   
            )
            })}
        </section>
    )
};

export default ItemList;