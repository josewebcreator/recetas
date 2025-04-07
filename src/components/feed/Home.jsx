import './Home.css'
import Filters from './filters/Filters'
import Recipes from './recipes/Recipes'

export default function Home(){
    return (
        <div className="Home">
            <Filters/>
            <Recipes/>
        </div>
    )
}