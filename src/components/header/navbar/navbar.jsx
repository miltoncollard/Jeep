//CSS
import './navbar.css';
//assets
import logo from '../../../assets/images/jeep-logo.png';
import whatsapp from '../../../assets/images/whatsapp_icon.png';

const NavBar = () => {
  return ( 
    <nav className="nav container">
        <div className="nav__logo">
            <a href="/Jeep"> <img src={logo} alt=""/> </a>
        </div>
        <div className="nav__menu">
            <ul className="nav__list">
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
    </nav>
  );
}

export default NavBar;