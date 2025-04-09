/*Includes */
import { useState, useEffect } from "react";
import Meal from "./Meal";
import { useContext } from "react";
import { MyContext } from "../../../context/context";

/*Funciones*/

/*Consulta por letra*/
async function getFoodByLetter(Letter){

    try{
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${Letter}`
        );
        if(!response.ok){
            const message = `Error Http: status: ${response.status}`;
            throw new Error(message);
        }
        const data = await response.json();
        return data.meals || [];
    }catch(error){
        console.error("Error al hacer consulta por letra: ", error);
        throw error;
    }

}

/*Consulta por categoria*/
async function getFoodByCategory(category){

    try{
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        if(!response.ok){
            const message = `Error Http: status: ${response.status}`;
            throw new Error(message);
        }
        const data = await response.json();
        return data.meals || [];
    }catch(error){
        console.error("Error al hacer consulta por categoria: ", error);
        throw error;
    }
}

export default function Recipes() {
    const [state, dispatch]   = useContext(MyContext);
    const { filterType, filter } = state || {}; // Desestructuración segura

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            setError(null);
            try {
                if (filterType === 'letter') {
                    setMeals(await getFoodByLetter(filter));
                } else if (filterType === 'category') {
                    setMeals(await getFoodByCategory(filter));
                }
            } catch (err) {
                setError(err.message || 'Error al hacer consulta');
                setMeals([]);
            } finally {
                setLoading(false);
            }
        };
        fetchRecipes();
    }, [filterType, filter]);

    return (
        <div className="Recipes">
            {loading ? (
                <p>Cargando recetas...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : meals.length > 0 ? (
                meals.map((meal) => (
                    <Meal key={meal.idMeal} recipe={meal} />
                ))
            ) : (
                <p>No se encontraron las recetas</p>
            )}
        </div>
    );
}