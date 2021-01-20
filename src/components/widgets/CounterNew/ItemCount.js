import React, { useState, useContext } from 'react';
import Counter from './Counter';
import {context} from '../../context/context'
import { FaLightbulb } from 'react-icons/fa';

const ItemCount = (props) => {

    const {className, stockQty, quantity, id, tempCart, setTempCart} = props;

    const {cart} = useContext(context)
    console.log(tempCart);

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

    const handleChange = (e, id, counterValue) => {
        const {valueAsNumber} = e.target;
        
        Number.isNaN(valueAsNumber) ? setCounterValue({count: ''}) : setCounterValue({count: valueAsNumber});

        handleCart(id, counterValue.count)
    }

    const handleCart = (id, tempQty) => {
        const itemObject = {
            itemId: id,
            quantity: tempQty
        }

       let tempArr = [];

        for(let i = 0; i < cart.length; ++i) {
            if(cart[i].itemId !== id ) {
                tempArr.push(cart[i])
            } else {
                tempArr.push(itemObject)
            }
        }

        setTempCart(tempArr) 
    }


    return (
        <div className={`item-count-wrapper ${className}`}>
            <Counter decrease={decrease} increase={increase} stockQty={stockQty} counterValue={counterValue} handleChange={handleChange} counterValue={counterValue} quantity={quantity} id={id}/>
        </div>
    )
}

export default ItemCount;
