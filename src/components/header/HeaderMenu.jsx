/*Imports*/
import menuItems from './menuItems.json';
import { Link } from 'react-router-dom';
import { FaListUl, FaStar } from 'react-icons/fa'; 
import { ImFinder } from "react-icons/im";
import { LuChefHat } from "react-icons/lu";

//mapa de iconos
    
const iconMap = {
    "recetas": LuChefHat,
    "favoritos": FaStar,
    "Sobre Mi": ImFinder ,
};

export default function HeaderMenu() {
    return (
      <nav className="HeaderMenu">
        <ul>
          {Object.values(menuItems).map((item, index) => {
            const IconComponent = iconMap[item.item]; // Obtiene el componente del icono del mapeo
            return (
              <li key={index}>
                <Link className='menuEnlace' to={item.url}>
                  {IconComponent && <IconComponent className="menuIcon" />} {/* Renderiza el icono si existe en el mapeo */}
                  <span>{item.item}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
}