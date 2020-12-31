import React from 'react';
import Item from '../Item/Item';
import "./ItemList.scss";

const ItemList = ({productsData, categoryUrl}) => {

    return(
        <section className='item-list'>
            {categoryUrl.categoryId ? 
            productsData.map((item, index) => {
                return (
                    <>
                        {
                        item.pathName === categoryUrl.categoryId ?
                        <Item 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        category={item.category}
                        description={item.description}
                        price={item.price}
                        image={item.images[0]}
                        alt={item.alt}/>   
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
                        <Item 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        category={item.category}
                        description={item.description}
                        price={item.price}
                        image={item.images[0]}
                        alt={item.alt}/>   
                    </>
                )
            })
            }
        </section>
    )
};

export default ItemList;