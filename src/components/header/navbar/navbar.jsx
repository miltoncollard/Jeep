//CSS
import './navbar.css';
//assets
import logo from '../../../assets/images/jeep-logo.png';
import whatsapp from '../../../assets/images/whatsapp_icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const NavBar = () => {

    const [isMobile, setIsMobile] = useState(false);
    return ( 
        <nav className="nav container">
            <div className="nav__logo">
                <a href="/Jeep"> <img src={logo} alt=""/> </a>
            </div>
            <div className="nav__menu">
                <ul 
                    className={isMobile? "nav__list__mobile" : "nav__list" }
                    onClick={() => setIsMobile(false)}
                >
                    <li className="nav__item">
                    <a href="#planSection" className="nav__link">¿POR QUÉ JEEP PLAN?</a>
                    </li>
                    <li className="nav__item">
                        <a href="#compass" className="nav__link">JEEP COMPASS</a>
                    </li>
                    <li className="nav__item">
                        <a href="#renegade" className="nav__link">RENEGADE SPORT</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">CONTACTO</a>
                    </li>
                    <a href="#contact" className="nav__link"><img src={whatsapp} alt="" /></a>
                </ul>
            </div>
            <button className="mobile-menu"
                onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ?(
                    <i className="fas fa-times"><FontAwesomeIcon icon={faTimes}/></i>
                    ) : (
                    <i className="fas fa-bars"><FontAwesomeIcon icon={faBars}/></i>
                    )}
            </button>
        </nav>
    );
}

export default NavBar;