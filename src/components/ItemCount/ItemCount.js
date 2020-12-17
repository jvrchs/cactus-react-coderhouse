import React from 'react';
import './ItemCount.scss';

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
}

export default ItemCount; 