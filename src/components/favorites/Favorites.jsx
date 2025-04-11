/*Includes */
import {useContext} from 'react';
import { MyContext } from '../../context/context';
import FavRecipe from './favRecipe/FavRecipe';
import OpenFavRecipe from './favRecipe/OpenFavRecipe';
import OverLayHome from '../feed/OverLayHome';
import './Favorites.css';

/*Component*/
export default function Favorites() {

    const [state] = useContext(MyContext);
    const { favoritesRecipes } = state;

    if (favoritesRecipes.length === 0) {
        return (
            <div className="Favorites">
                <h2>Favorites</h2>
                <p>You don't have any favorite recipes yet.</p>
            </div>
        )
    }

    return (
        <div className="Favorites">
            <div className="favorites-container">
                <h2>Favorites</h2>
                <div className="favorites-recipes">
                    {favoritesRecipes.map((recipe) => (
                        <FavRecipe key={recipe.idMeal} recipe={recipe} />
                    ))}
                </div>
            </div>
            <OpenFavRecipe/>
            <OverLayHome/>
        </div>
    )
}