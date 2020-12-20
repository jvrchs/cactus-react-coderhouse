import React from 'react';
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.scss"

const ItemListContainer = () => {
    return(
       <div className='item-list-container'>
           <ItemList />
       </div>
   ) 
};

export default ItemListContainer;