import React, {useState} from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { RiCactusLine } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa"
import './NavBar.scss'
import {Link} from 'react-router-dom';
import Dropdown from './Dropdown';

const NavBar = () => {
    const[click, setClick] = useState(false);
    const[navbar, setNavbar] = useState(false);
    const[dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    const changeBackground = () => {
        window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
    }

    window.addEventListener('scroll', changeBackground);

    return(
        <>
            <nav className={navbar ? 'navbar-items isScrolled' : 'navbar-items'}>
                <div className='cart-icon-mobile-container'>
                    <CartWidget/>
                </div>
                <div className='logo-container'>
                    <Link to ="/" className="logo-link">
                        <div className="logo-wrapper">
                            <h2 className='logo-name'>Cactus</h2>
                            <RiCactusLine className='cactus-icon'/>
                        </div>
                    </Link>
                </div>
                <div className='links-container'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Inicio
                            </Link>
                        </li>
                        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='nav-item'>
                            <Link to='/tienda' className='nav-links shop-nav-link' onClick={closeMobileMenu}>
                                Tienda <FaCaretDown/>
                            </Link>
                            {dropdown ? <Dropdown/> : null}
                        </li>
                        <li className='nav-item'>
                            <Link to='/nosotros' className='nav-links' onClick={closeMobileMenu}>
                                Nosotros
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contacto' className='nav-links' onClick={closeMobileMenu}>
                                Contacto
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/mi-cuenta' className='nav-links' onClick={closeMobileMenu}>
                                Mi cuenta
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="cart-icon-container">
                    <Link to="/carro">
                        <CartWidget/>
                    </Link>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>   
            </nav>
            <div className="nav-wrap"></div>
        </>
    )
}

export default NavBar;