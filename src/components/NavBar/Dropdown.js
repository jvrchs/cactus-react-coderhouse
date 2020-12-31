import React, {useState} from 'react';
import './NavBar.scss';
import {Link} from 'react-router-dom';
import categories from './categories';
import './Dropdown.scss'


const Dropdown = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)

    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {categories.map((category) => {
                    return(
                        <li key={category.title}>
                            <Link className={category.cName} to={`/category${category.path}`}>
                                {category.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Dropdown;
