import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ACTIONS } from '../../context/cartReducer';
import { contextForCart } from '../../context/contextForCart';
import Button from '../Button/Button';

const WishlistItem = ({item, deleteItem}) => {

    const {clpCurrencyFormat, dispatch} = useContext(contextForCart);

    return (
        <>
        <div className="wishlist-wrapper">
            <div className="wishlist-item">
                <div className="wishlist-item-info">
                    <div className="wishlist-item-img">
                        <Link to={`/item/${item.itemId}`}>
                            <img src={`media/img/products/${item.images[0]}`} width="100" alt={item.alt}/>
                        </Link>
                    </div>
                    <div className="wishlist-item-details">
                        <p>
                            <Link to={`/item/${item.itemId}`}>
                                {item.itemName}
                                <br/>
                                <span>
                                    {item.categoryName}
                                    <br/>
                                    {clpCurrencyFormat(item.price)}
                                    <br/>
                                    {item.offer[0] ?
                                    `Oferta: ${clpCurrencyFormat(item.offer[1])}`
                                    :
                                    null
                                    }
                                </span>
                            </Link> 
                        </p> 
                    </div>
                    <div className="wishlist-item-buttons">
                        <div>
                            <Button onClick={() => dispatch({type: ACTIONS.ADD_ITEM, payload: {itemId: item.itemId, quantity: 1}})}>Agregar al carro</Button>
                        </div>
                        <div>
                            <Button className="btn--outline" onClick={() => deleteItem(item.itemId)}>Eliminar item</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        </>
    )
}

export default WishlistItem
