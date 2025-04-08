/*includes */


/*Functions */
function shortStr(str){

    const strLimit = 150;

    if(str.length>strLimit){
        let shortString = str.substr(0,strLimit);
        return `${shortString}...`;
    }

    return str;

}

/*Componente */
export default function Meal({recipe}){

    return(
        <div className="Meal">
            
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>{recipe.strMeal}</h3>
            <h4>Category: {recipe.strCategory}</h4>
            <p>
                {shortStr(recipe.strInstructions)}
            </p>
        </div>
    )
}
