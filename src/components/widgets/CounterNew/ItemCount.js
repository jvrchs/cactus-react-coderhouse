import React, { useState, useContext } from 'react';
import Counter from './Counter';
import {context} from '../../context/context'

const ItemCount = (props) => {

    const {className, stockQty, quantity, itemId} = props;

    const {cart} = useContext(context)

    const counterObj = {count: quantity}

    const [counterValue, setCounterValue] = useState(counterObj)

    const decrease = () => {
        if(counterValue.count <= 1) {
        }else {
            setCounterValue({count: counterValue.count - 1});
        }  
    };

    const increase = () => {
        if(counterValue.count >= stockQty) {
        } else {
            setCounterValue({count: counterValue.count + 1});
        }
    };

    const handleChange = (e, itemId, counterValue) => {
        const {valueAsNumber} = e.target;
        
        Number.isNaN(valueAsNumber) ? setCounterValue({count: ''}) : setCounterValue({count: valueAsNumber});
    }

    return (
        <div className={`item-count-wrapper ${className}`}>
            <Counter decrease={decrease} increase={increase} stockQty={stockQty} counterValue={counterValue} handleChange={handleChange} quantity={quantity} itemId={itemId}/>
        </div>
    )
}

export default ItemCount;
