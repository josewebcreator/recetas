

/*Componente */
export default function Meal({recipe}){

    return(
        <div className="Meal">
            
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>{recipe.strMeal}</h3>
            
        </div>
    )
}
