import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import categories from '../../data/categories';
import './Dropdown.scss'


const Dropdown = () => {
    
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

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
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {categoriesArr.map((category) => {
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
