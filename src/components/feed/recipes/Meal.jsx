/*includes */


/*Functions */
function shortStr(str){

    if(str.length>200){
        let shortString = str.substr(0,200);
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
