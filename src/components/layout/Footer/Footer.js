import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import categories from '../../data/categories';
import {GrFacebookOption, GrInstagram} from 'react-icons/gr';

const Footer = () => {

    const categoriesArr = categories.sort((a, b) => {
        const itemA = a.title.toLowerCase();
        const itemB = b.title.toLowerCase();
        if (itemA < itemB) {
            return -1;
        }
        if (itemA > itemB) {
            return 1;
        }
        return 0;
    });

    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-pages-wrapper">
                    <div className="footer-title">
                        <h3>ENLACES</h3>
                    </div>
                    <br/>
                    <div className="footer-pages-links">
                        <ul>
                            <li>
                                <Link to="/">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/tienda">Tienda</Link>
                            </li>
                            <li>
                                <Link to="/nosotros">Nosotros</Link>
                            </li>
                            <li>
                                <Link to="/contacto">Contacto</Link>
                            </li>
                            <li>
                                <Link to="/mi-cuenta">Mi cuenta</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-categories-wrapper">
                    <div className="footer-title">
                        <h3>CATEGORÍAS</h3>                       
                    </div>
                    <br/>
                    <div className="footer-categories-links">
                        <ul>
                            {categoriesArr.map((category) => {
                                return(
                                    <li key={category.title}>
                                        <Link to={`/category${category.path}`}>
                                            {category.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="footer-social-wrapper">
                    <div className="footer-title">
                        <h3>SÍGUENOS</h3>                        
                    </div>
                    <br/>
                    <div className="footer-social-links">
                        <a href="https://www.instagram.com/"  rel="noreferrer" target="_blank"><GrInstagram/></a>
                        <a href="https://www.facebook.com/"  rel="noreferrer"  target="_blank"><GrFacebookOption/></a>
                    </div>
                </div>
                <div className="footer-contact-wrapper">
                    <div className="footer-title">
                        <h3>CONTACTO</h3>                        
                    </div>
                    <br/>
                    <div className="footer-contact-links">

                    </div>
                </div>
            </div> 
        </footer>
    )
}

export default Footer
