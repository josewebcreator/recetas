/*Includes*/
import { useContext } from 'react';
import { MyContext } from '../../../context/context';

/*Component */
export default function OpenRecipe() {
    const [state, dispatch]   = useContext(MyContext);
    const { loadedRecipe } = state;

    if(loadedRecipe.length === 0) {
        return null
    }

    return (
        <div className="OpenRecipe">
            <div className="recipe-container">
                <h2>{loadedRecipe[0].strMeal}</h2>
                <img src={loadedRecipe[0].strMealThumb} alt={loadedRecipe[0].strMeal} />
                <p>{loadedRecipe[0].strMeal}</p>
                <h3>Category</h3>
                <p>{loadedRecipe[0].strCategory}</p>
                <h3>Instructions</h3>
                <p>{loadedRecipe[0].strInstructions}</p>
            </div>
        </div>
    )

}