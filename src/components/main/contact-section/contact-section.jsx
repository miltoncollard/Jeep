//imports
import "./contact-section.css"
const ContactSection = () => {
    return ( 
        <div className="contact-section" id="contact">
            <h1>Contactanos</h1>
            <form className="contact__form" action="" method="post">
                <input type="text" className="name" id="name" placeholder="* Nombre y Apellido" />
                <input type="email" className="email" id="email" placeholder="* Email" />
                <input type="number" className="phone" id="phone" placeholder="* Teléfono"/>
                <textarea type="text" className="message" id="msg" placeholder="* Mensaje" />
                <button className="btn-send" type="submit" onClick='send()'>Enviar</button>
            </form>
        </div>
    );
  }
  
  export default ContactSection;