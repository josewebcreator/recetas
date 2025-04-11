import { useContext } from "react";
import { MyContext } from "../../context/context";

export default function OverLayHome() {
    const [state, dispatch] = useContext(MyContext);
    const { loadedRecipe } = state;

    if (loadedRecipe.length === 0) {
        return null;
    }

    function handleOverlayClick(){
        dispatch({ type: "CLOSE_RECIPE" });
    }

    return (
        <div className="OverLayHome" onClick={handleOverlayClick}></div>
    );
}