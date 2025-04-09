/*Includes*/
import {getRandomColor} from "./functions";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { MyContext } from "../../../context/context";

/*Componente*/
export default function FilterCategory({loading, error, categories}) {

    const [state, dispatch]   = useContext(MyContext);
    const { filterType, filter } = state || {};

    const [categoriesWithColors, setCategoriesWithColors] = useState([]);
    

    useEffect(() => {
        if (categories && categories.length > 0) {
            const categoriesWithColor = categories.map(category => ({
                ...category,
                color: getRandomColor(),
            }));
            setCategoriesWithColors(categoriesWithColor);
        }
    }, [categories]); // Dependencia de 'categories' para que se ejecute cuando cambien las categorías

    function handleCategoryClick(category) {
        console.log(category);
        dispatch({
            type: 'SET_FILTER',
            payload: {
                filterType: 'category',
                filter: category,
            },
        });
    }

    return (
        <div className="Filter FilterCategory">
            <h3>Filter by category</h3>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {categoriesWithColors.map((category, index) => (
                <button
                    key={category.strCategory || index}
                    className={`color-${category.color}`}
                    onClick={() => handleCategoryClick(category.strCategory)}
                >
                    {category.strCategory || "Unknown"}
                </button>
            ))}
        </div>
    );
}