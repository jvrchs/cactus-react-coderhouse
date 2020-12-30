import React, {useState} from 'react';
import MenuItems from "./MenuItems";
import CartWidget from '../CartWidget/CartWidget';
import { RiCactusLine } from "react-icons/ri";
import './NavBar.scss'
import {Link} from 'react-router-dom';

const NavBar = () => {
    const[click, setClick] = useState(false);
    const[navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);

    const changeBackground = () => {
        window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
    }

    window.addEventListener('scroll', changeBackground);

    return(
        <>
            <nav className={navbar ? 'navbar-items isScrolled' : 'navbar-items'}>
                <div className="cart-icon-mobile-container">
                    <CartWidget/>
                </div>
                <div className="logo-container">
                    <Link to="/" className="logo-link">
                        <div className="logo-wrapper">
                            <h2 className='logo-name'>Cactus</h2>
                            <RiCactusLine className="cactus-icon"/>
                        </div>
                    </Link>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                    {MenuItems.map((item) => {
                        return (                 
                            <li key={item.key}>
                                <Link to={item.path} className={item.cName}>    
                                {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="cart-icon">
                    <Link to="/carro">
                        <CartWidget/>
                    </Link>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>   
            </nav>
            <div className="nav-child"></div>
        </>
    )
}

export default NavBar;