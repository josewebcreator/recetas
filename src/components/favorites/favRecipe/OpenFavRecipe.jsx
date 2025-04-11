/*Includes*/
import { useContext } from 'react';
import { MyContext } from '../../../context/context';
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

/*Component */
export default function OpenFavRecipe() {
    const [state, dispatch]   = useContext(MyContext);
    const { loadedRecipe, favoritesRecipes } = state;

    if(loadedRecipe.length === 0) {
        return null
    }

    function closeRecipe() {
        dispatch({type: 'CLOSE_RECIPE'})
    }

    function addToFav() {
        if (loadedRecipe[0]) {
            dispatch({type: 'ADD_TO_FAV', payload: loadedRecipe[0]});
        }
    }
    function removeFromFav() {
        if (loadedRecipe[0]) {
            dispatch({type: 'REMOVE_FROM_FAV', payload: loadedRecipe[0]});
        }
    }
    function isFav() {
        return loadedRecipe[0] && favoritesRecipes.some(recipe => recipe.idMeal === loadedRecipe[0].idMeal);
    }



    return (
        <div className="OpenFavRecipe">
            <div className="recipe-container">
                {isFav() ?
                    <MdFavorite className='addToFav' onClick={removeFromFav} /> : 
                    <MdFavoriteBorder className='addToFav' onClick={addToFav} />
                }
                <IoCloseCircleOutline className='close-recipe' onClick={closeRecipe}/>
                <h2>{loadedRecipe[0].strMeal}</h2>
                <img src={loadedRecipe[0].strMealThumb} alt={loadedRecipe[0].strMeal} />
                <h3>Category: {loadedRecipe[0].strCategory}</h3>
                
                <h3>Instructions</h3>
                <p>{loadedRecipe[0].strInstructions}</p>
            </div>
        </div>
    )

}