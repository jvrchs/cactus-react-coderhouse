import React from 'react';

const Counter = (props) => {

    const {increase, decrease, stockQty, counterValue, handleChange, id} = props

    return(
        <div className="counter">
            <span>
                <button onClick={decrease}>-</button>
                <input type="number" min='0' max={stockQty} value={counterValue.count} onChange={e => handleChange(e, id, counterValue)}/>
                <button onClick={increase}>+</button>
            </span>
        </div>  
    )
}

export default Counter;