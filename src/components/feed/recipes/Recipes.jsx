/*Includes */
import { useState, useEffect } from "react";
import Meal from "./Meal";

/*Funciones*/

/*Consulta por letra: Consulta standar cuando no hay filtros*/
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

/*Componente */
export default function Recipes(){

    const [letter, setLetter] = useState('a');
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchRecipes = async () => {
            setLoading(true);
            setError(null);
            try{
                const data = await getFoodByLetter(letter);
                setMeals(data);
            }catch(err){
                setError(err.message||'Error al hacer consulta' );
                setMeals([]);
            }finally{
                setLoading(false);
            }
        }
        fetchRecipes();
    },[letter]);

    return(
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
    )
}