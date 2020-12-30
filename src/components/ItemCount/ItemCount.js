import React, {useState} from 'react';
import './ItemCount.scss';
/*
class ItemCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stock: 10,
            initial: 0
            }
    }

    onAdd = () => {
        let count = this.state.initial + 1;
        this.setState({
            initial: count
        })
    };  

    onRemove = () => {
        let count = this.state.initial - 1;
        if(count < 0) {
        }else {
            this.setState({
                initial: count
            })
        }
    };

    stockUpdate = () => {
        if(this.state.initial > this.state.stock) {
            alert(`No hay stock suficiente.`)
        }else {
            let newStock = this.state.stock - this.state.initial
            this.setState({
                stock: newStock
            });
            alert(`Se han añadido ${this.state.initial} items.`);
        }
    }

    render() {
        return (
            <div className="item-count">
                <div className="counter-container">
                    <button onClick={this.onRemove}>-</button>
                    <p>{this.state.initial}</p>
                    <button onClick={this.onAdd}>+</button>
                </div>
                <button className="addToCart-btn" onClick={this.stockUpdate}>Añadir al carrito</button>
            </div>
        )
    }
}*/

const ItemCount = (props) => {
    const[initial, setInitial] = useState(props.initial);
    const[stock, setStock] = useState(props.stock);

    const decrease = () => {
        if(initial <= 0) {
        }else {
            setInitial(initial - 1);
        }  
    };

    const increase = () => {
        setInitial(initial + 1);
    };

    const addOn = () => {
        if(initial > stock) {
            alert(`No hay stock suficiente.`)
        }else {
            setStock(stock - initial);
            alert(`Se han añadido ${initial} items.`);
        }
    };

    return(
        <div className="item-count">
            <div className="counter-container">
                <button className="counter-btn " onClick={decrease}><p>-</p></button>
                <p>{initial}</p>
                <button className="counter-btn " onClick={increase}><p>+</p></button>
            </div>
            <button className="counter-btn addToCart-btn" onClick={addOn}><p>Añadir al carrito</p></button>
        </div>
    )
};

export default ItemCount; 