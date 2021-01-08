import React, {useState} from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { RiCactusLine } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa"
import './NavBar.scss'
import {Link, useLocation} from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import {FaHeart} from 'react-icons/fa';

const NavBar = () => {
    const url = useLocation();

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
        window.scrollY >= 80 ? setNavbar(false) : setNavbar(true);
    }

    window.addEventListener('scroll', changeBackground);

    return(
        <>
            <nav className=
                {
                url.pathname === '/' ? 
                    (navbar ? 'navbar-items notScrolled':'navbar-items')
                    :
                    'navbar-items'
                }
            >
                <div className='logo-container'>
                    <Link to ="/" className="logo-link">
                        <div className="logo-wrapper">
                            {url.pathname === '/' ?
                            <h1 className='logo-name'>Cactus</h1>
                            :
                            <h2 className='logo-name'>Cactus</h2>
                            }
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
                <div className='cart-wishlist-container'>
                    <Link to="/carro">
                        <CartWidget/>
                    </Link>
                    <Link to="/mi-cuenta/wishlist">
                        <FaHeart/>
                    </Link>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>   
            </nav>
        </>
    )
}

export default NavBar;