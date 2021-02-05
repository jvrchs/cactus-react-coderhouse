import React, {useState, useEffect} from 'react'
import { ACTIONS } from '../../context/cartReducer';

const Counter = (props) => {

    const {stockQty, initialValue, cartData, itemId, dispatch, handleAlert} = props;

    const [currentCount, setCurrentCount] = useState(initialValue);
  
    const decrease = (itemId) => {
        if(currentCount > 0) {
            const newValue = parseInt(currentCount - 1);
            const itemObj = {itemId: itemId, quantity: newValue}
            setCurrentCount(newValue);
            dispatch({type: ACTIONS.UPDATE_CART, payload: itemObj})
        }
    }

    const increase = (itemId) => {
        if(currentCount < stockQty) {
            const newValue = parseInt(currentCount + 1);
            const itemObj = {itemId: itemId, quantity: newValue}
            setCurrentCount(newValue);
            dispatch({type: ACTIONS.UPDATE_CART, payload: itemObj})
        }
    }

    const handleValue = (e, itemId) => {
        if(e.target.value !== '' && e.target.value >= 0 && e.target.value <= stockQty){
            const quantity = parseInt(e.target.value)
            const itemObj = {itemId: itemId, quantity: quantity}
            setCurrentCount(quantity)
            dispatch({type: ACTIONS.UPDATE_CART, payload: itemObj})
        } 
        if(e.target.value > stockQty){
            setCurrentCount('')
            handleAlert();
        }else {
            setCurrentCount('')
        }   
    }
    
    useEffect(() => {
        setCurrentCount(initialValue)
    }, [cartData])

    return (
        <div className="counter-widget">
            <span>
                <button className="counter-btn" onClick={() => decrease(itemId)}>-</button>
                <input type="number" value={currentCount} onChange={e => handleValue(e, itemId)}/>
                <button className="counter-btn" onClick={() => increase(itemId)}>+</button>
            </span>
        </div>
    )
}

export default Counter
