/*Includes*/
import {getRandomColor} from "./functions";
import { useEffect, useState } from "react";

/*Componente*/
export default function FilterCategory({loading, error, setSelectedCategory, categories}) {

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

    return (
        <div className="Filter FilterCategory">
            <h3>Filter by category</h3>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {categoriesWithColors.map((category) => (
                <button
                    key={category.strCategory}
                    className={`color-${category.color}`}
                    onClick={() => setSelectedCategory(category.strCategory)}
                >
                    {category.strCategory}
                </button>
            ))}
        </div>
    );
}