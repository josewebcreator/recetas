/*Includes */
import { useState, useEffect } from "react";
import  FilterLetter  from "./FilterLetter";
import  FilterCategory  from "./FilterCategory";


/*Funciones */
async function getCategory(){
    try{
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
        const data = await response.json();
        if(!response.ok){
            throw new Error("Error en la respuesta de la API");
        }
        return data.meals || [];
    }catch(error){
        console.error("Error al obtener los filtros:", error);
        throw error;
    }
    
}


/*Componente */
export default function Filters(){

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCategories() {
            setLoading(true);
            setError(null);
            setCategories([]);
            try {
                const data = await getCategory();
                setCategories(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchCategories();
    }, []);


    return(
        <div className="Filters">
            <FilterLetter />

            <FilterCategory loading={loading} error={error} categories={categories} />
        </div>
    )
}