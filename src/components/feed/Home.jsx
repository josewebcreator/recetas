import './Home.css'
import Filters from './filters/Filters'
import Recipes from './recipes/Recipes'
import OpenRecipe from './recipes/OpenRecipe'
import OverLayHome from './OverLayHome'


export default function Home(){
    return (
        <div className="Home">
            <Filters/>
            <Recipes/>
            <OpenRecipe/>
            <OverLayHome/>
        </div>
    )
}