import React from 'react';
import "./ItemListContainer.scss"

const ItemListContainer = ({greeting}) => {
    return(
       <div>
           <p className="greeting">{greeting}</p>
       </div>
   ) 
};

export default ItemListContainer;