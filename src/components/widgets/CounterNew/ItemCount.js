import React, { useState, useEffect, useContext } from 'react';
import Counter from './Counter';
import {context} from '../../context/context'

const ItemCount = (props) => {

    const {cart, removeItem} = useContext(context);

    const {className, stockQty, quantity, itemId, setNewCart} = props;

    const counterObj = {count: quantity}

    const [counterValue, setCounterValue] = useState(counterObj)
   
    const decrease = () => {
        if(counterValue.count <= 1) {
        } else {
            setCounterValue({count: counterValue.count - 1});
        }  
    };

    const increase = () => {
        if(counterValue.count >= stockQty) {
        } else {
            setCounterValue({count: counterValue.count + 1});
        }
    };

    const handleChange = e => {
        const {valueAsNumber} = e.target;
        Number.isNaN(valueAsNumber) ? setCounterValue({count: ''}) : setCounterValue({count: valueAsNumber});
    }

    useEffect(() => {
       let tempArr = []
       let itemObj = {itemId: itemId, quantity: counterValue.count}
       for(let i = 0; i < cart.length; ++i) {
           if(cart[i].itemId === itemId) {
               tempArr.push(itemObj)
           } else {
               tempArr.push(cart[i])
           }
       }
       setNewCart(tempArr)
    }, [counterValue, removeItem])

    return (
        <div className={`item-count-wrapper ${className}`}>
            <Counter decrease={decrease} increase={increase} stockQty={stockQty} counterValue={counterValue} handleChange={handleChange} quantity={quantity} itemId={itemId}/>
        </div>
    )
}

export default ItemCount;
