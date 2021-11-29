//imports
import React, {useState} from "react";
import { saveInfo } from "../../../services/services";
//CSS
import "./contact-section.css"
const ContactSection = () => {

    const [datos, setDatos] = useState({
        nomape: '',
        email:'',
        telefono: '',
        message: ''
    })

    const handleInputChange = (event) =>{
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(datos)
        saveInfo(datos)
        document.getElementById("datos_form").reset();
    }
  


    return ( 
        <div className="contact-section" id="contact">
                <h1>Contactanos</h1>
                <form className="contact__form" id="datos_form">
                    <input 
                        name="nomape" 
                        type="text" 
                        className="name" 
                        id="name" 
                        placeholder="* Nombre y Apellido"
                        onChange={handleInputChange} 
                        />
                    <input 
                        name="email" 
                        type="email" 
                        className="email" 
                        id="email" 
                        placeholder="* Email"
                        onChange={handleInputChange}  
                        />
                    <input 
                        name="telefono" 
                        type="number" 
                        className="phone" 
                        id="phone" 
                        placeholder="* Teléfono"
                        onChange={handleInputChange} 
                        />
                    <textarea 
                        name="message" 
                        type="text" 
                        className="message" 
                        id="msg" 
                        placeholder="* Mensaje" 
                        onChange={handleInputChange} 
                        />
                    <button 
                        className="btn-send" 
                        type="submit"  
                        onClick ={handleSubmit}  
                    >Enviar</button>   
                </form>
        </div>
    );
  }
  
  export default ContactSection;