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
                    <a href="">Contactanos</a>
                    <a href="">Preguntas Frecuentes</a>
                    <a href="">Modelos</a>
                </div>
            </div>
            <div className="group2">
            <small>Jeep 2021 - Todos los derechos reservados</small>
            </div>
       </footer>
    );
  }
  
  export default Footer;