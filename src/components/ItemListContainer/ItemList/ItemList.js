import React from 'react';
import Item from '../Item/Item';

const ItemList = (props) => {
    return(
    <li>
        <Item 
        title={props.title}
        description={props.description}
        price={props.price}
        photo={props.photo}
        alt={props.alt}
        />
    </li>
    )  
};

export default ItemList;