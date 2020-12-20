import React from 'react';
import MenuItems from "./MenuItems";
import CartWidget from '../CartWidget/CartWidget'
import { RiCactusLine } from "react-icons/ri";
import './NavBar.scss'

class NavBar extends React.Component {
state = { clicked: false};

handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
}

    render() {
        return(
            <nav className='navbar-items'>
                <div className="cart-icon-mobile">
                    <CartWidget/>
                </div>
                <div className="logo-container">
                    <h1 className='logo-name'>Cactus</h1>
                    <RiCactusLine className="cactus-icon"/>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}> 
                    {MenuItems.map((item) => {
                        return (
                            <li key={item.key}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className="cart-icon">
                    <CartWidget/>
                </div>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>   
            </nav>
        )
    }
}

export default NavBar;