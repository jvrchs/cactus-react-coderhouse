import React from 'react';

const Counter = (props) => {

    const {increase, decrease, stockQty, counterValue, handleChange} = props

    return(
        <div className="counter">
            <span>
                <button onClick={decrease}>-</button>
                <input type="number" min='0' max={stockQty} value={counterValue.count} onChange={handleChange}/>
                <button onClick={increase}>+</button>
            </span>
        </div>  
    )
}

export default Counter;