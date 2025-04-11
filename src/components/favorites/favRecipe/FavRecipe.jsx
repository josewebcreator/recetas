/*Includes */
import {useContext} from 'react';
import { MyContext } from '../../../context/context';

async function fetchRecipeById(id) {
    try{
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if(!response.ok){
            const message = `Error Http: status: ${response.status}`;
            throw new Error(message);
        }
        const data = await response.json();
        return data.meals || [];
    }catch(error){
        console.error("Error al hacer consulta por ID: ", error);
        throw error;
    }
}

/*Component */
export default function FavRecipe({ recipe }) {
    const { strMeal, strMealThumb } = recipe;
    const  [ state, dispatch ] = useContext(MyContext);

    async function handleRecipeClick(id){
        try{
            const response = await fetchRecipeById(id);
            dispatch({type: 'OPEN_RECIPE', payload: response});

        }catch(error){
            console.error("Error al cargar la receta: ", error);
        }
    }

    return (
        <div className="recipe-card" onClick={() => handleRecipeClick(recipe.idMeal)}>
            <img src={strMealThumb} alt={strMeal} />
            <h3>{strMeal}</h3>
        </div>
    );
}