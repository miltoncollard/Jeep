//imports
import logo from '../../assets/images/jeep-logo-blanco.png'
import "./footer.css"

const Footer = () => {
    return ( 
       <footer class="footer">         
            <div className="group1">  
                <div className="group1-logo">
                    <a href="/jeep"><img src={logo} alt="jeep"/></a>       
                </div>       
                <div className="group1-link">
                    <a href="#contact">Contactanos</a>
                    <a href="#faq">Preguntas Frecuentes</a>
                    <a href="#modelos">Modelos</a>
                </div>
            </div>
            <div className="group2">
            <small>Jeep 2021 - Todos los derechos reservados</small>
            </div>
       </footer>
    );
  }
  
  export default Footer;