import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import products from '../ItemListContainer/Item/products';

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});

const ItemDetailContainer = (props) => {
    const[itemDetail, setItemDetail] = useState(false);

    useEffect(() => {
        getProducts.then((itemDetail) => {
            console.log(itemDetail)
            setItemDetail(itemDetail);
        })
    }, []);

    return(
        <div className="item-detail-container"> 
            {
                itemDetail?
                <>
                    {
                        itemDetail.filter(items => items.id === props.id)
                        .map(product => {
                            return(
                                <ItemDetail 
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                photo={product.pictureUrl}
                                alt={product.alt}/>
                            ) 
                        })
                    }
                </>
                :
                <p>Cargando producto...</p>
            }
        </div>
    )
}

export default ItemDetailContainer;
