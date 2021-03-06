import React, {useContext, useState, useEffect} from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { RiCactusLine, RiLogoutBoxRLine } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import './NavBar.scss'
import {Link, useLocation} from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import {FaHeart} from 'react-icons/fa';
import firebase from "firebase/app";
import "firebase/auth";
import { contextForFirebase } from '../../context/contextForFirebase';

const NavBar = () => {

    const url = useLocation();

    const {loggedIn, setCurrentUserData, setCurrentUserId, currentUserId, setLoggedIn, setWishlistClicked} = useContext(contextForFirebase);

    const [click, setClick] = useState(false);

    const [dropdown, setDropdown] = useState(false);

    const [size, setSize] = useState(window.innerWidth);

    const [navbar, setNavbar] = useState(size > 600 ? true : false);

    const handleClick = () => {
        setClick(!click);
    };

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
        if(size > 600){
            window.scrollY >= 80 ? setNavbar(false) : setNavbar(true);
        }
    }
    window.addEventListener('scroll', changeBackground);

    const windowWidthChange = () => {
        setSize(window.innerWidth)
     }
    window.addEventListener('resize', windowWidthChange)

    const logOut = e => {
        if(url.pathname === `/mi-cuenta/${currentUserId}`) {
            firebase.auth().signOut();
            window.location.hash = '/'
        } else {
            firebase.auth().signOut();
        }

        setCurrentUserData({});
        localStorage.removeItem('currentUserData');

        localStorage.setItem('loggedIn', false);
        setLoggedIn(false);

        localStorage.removeItem('currentUserId');
        setCurrentUserId(null);

        if(size <= 960) {
            closeMobileMenu();
        }
    };

    const myAccountNav = () => {
        closeMobileMenu();
        setWishlistClicked(false);
    }

    useEffect(() => {
        if (size > 600 && size <= 960 && click) {
            setNavbar(false)
        } else {
            setNavbar(true);
        }
    }, [click]);

    return(
        <>
            <nav className=
                {
                url.pathname === '/' ? 
                    (navbar && size > 600 ? 'navbar-items notScrolled':'navbar-items')
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
                                Tienda {size >= 960 ? <FaCaretDown/> : null}
                            </Link>
                            {dropdown ? <Dropdown/> : null}
                        </li>
                        <li className='nav-item'>
                            <Link to='/contacto' className='nav-links' onClick={closeMobileMenu}>
                                Contacto
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={loggedIn ? `/mi-cuenta/${currentUserId}` : '/mi-cuenta'} className='nav-links' onClick={myAccountNav}>
                                Mi cuenta
                            </Link>
                        </li>
                        {loggedIn && size <= 960 ?
                         <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={logOut}>
                                Cerrar Sesión
                            </Link>
                        </li>
                        :
                        null
                        }
                    </ul>
                </div>
                <div className='cart-wishlist-container'>
                        <Link to="/carro">
                            <CartWidget/>
                        </Link>
                        {loggedIn ? <Link to='/mi-cuenta'><FaHeart onClick={() => setWishlistClicked(true)}/></Link> : <Link to='/mi-cuenta'><FaHeart/></Link>}   
                        {size > 960 ? <Link className={loggedIn ? 'log-out-icon' : 'visibility'} to='/'><RiLogoutBoxRLine onClick={logOut}/></Link> : null}   
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