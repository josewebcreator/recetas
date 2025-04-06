/*Imports*/
import menuItems from './menuItems.json';
import { Link } from 'react-router-dom';

export default function HeaderMenu(){



    return (
        <nav className="HeaderMenu">
            <ul>
                {Object.values(menuItems).map((item, index) =>
                    <li key={index}>
                        <Link className='menuEnlace' to={item.url}>
                            <img src={item.icon} alt={item.item} />
                            <span>{item.item}</span>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}