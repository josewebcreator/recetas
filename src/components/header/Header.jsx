//imports
import './header.css'
import HeaderMenu from './HeaderMenu';



export default function Header(){



    return(

        <div className="Header">
            <div className="logo-container">
                <img src="default-monochrome-black.svg" alt="Logo" />
            </div>
            <HeaderMenu/>
        </div>

    );

}