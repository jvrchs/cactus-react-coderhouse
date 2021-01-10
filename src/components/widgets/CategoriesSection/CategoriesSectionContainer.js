import React, {useState, useEffect} from 'react';
import categories from '../../data/categories';
import CategoriesSection from './CategoriesSection';

const CategoriesSectionContainer = () => {

    const [categoriesData, setCategoriesData] = useState(false);

    useEffect(() => {
        const getCategories = new Promise((resolve, reject) => {
            resolve(categories);
        });
        getCategories.then((categoriesArr) => {
            setCategoriesData(
                categoriesArr.sort((a, b) => {
                    const categoryA = a.title.toLowerCase();
                    const categoryB= b.title.toLowerCase();
                    if (categoryA < categoryB) {
                        return -1;
                    }
                    if (categoryA > categoryB) {
                        return 1;
                    }
                    return 0;
                })
            )
        })
    }, []);

    return (
        <>
            {
                categoriesData ?
                <CategoriesSection categoriesData={categoriesData} />
                :
                null
            }   
        </>
    )
}

export default CategoriesSectionContainer;
