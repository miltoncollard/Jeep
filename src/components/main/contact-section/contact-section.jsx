//imports
import React, {useState} from "react";
import axios from "axios";
import {GoogleReCaptchaProvider, GoogleReCaptcha} from "react-google-recaptcha-v3"
//CSS
import "./contact-section.css";

const ContactSection = () => {

    const [values, setValues] = useState({
        username: '',
        email: '',
        telefono: '',
        message: '',
    });

    const [token, setToken] = useState()
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    })

    const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        })
        if (ok) {
          form.reset()
        }
    }

    //useState para manejo de errores
    const handleChange = e => {
        const {name, value} = e.target

        setValues({
            ...values,
            [name] : value
        });
    };
   
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target
        setServerState({ submitting: true })
        const data = new FormData(form)
        data.append("g-recaptcha-response", token)
        console.log("VALUES: ", values)
        console.log("DATA: ", data)
        const params = `&nombre=${values.username}&apellido=${values.username}&telefono=${values.telefono}&celular=${values.telefono}&email=${values.email}&comentarios=${values.message}` ;
        axios({
            method: "post",
            url: `https://api.laikad.com/api/pilot?action=process&recaptcha_response=${token}${params}`,
            values
          })
            .then(r => {
              handleServerResponse(true, "Thanks!", form)
            })
            .catch(r => {
                console.log("error: ", r)
              handleServerResponse(false, r.response.data.error, form)
            })
            //saveInfo(values)
    }

    return ( 
        <div className="contact-section" id="contact">
                <h1>Contactanos</h1>
                <GoogleReCaptchaProvider reCaptchaKey="6LegwUwdAAAAAGszA7NUGVV4c64JcvUSHOzhEDpi">
                    <form className="contact__form" id="datos_form" onSubmit={handleSubmit}>
                        <div className="form-username" id="form-username">
                            <input 
                                name='username' 
                                type='text' 
                                className="username" 
                                id="username" 
                                placeholder="* Nombre y Apellido"
                                value={values.username}
                                onChange={handleChange} 
                                required
                            />
                        </div>
                        <div className="form-email" id="form-email">
                            <input 
                                name="email" 
                                type="email" 
                                className="email" 
                                id="email" 
                                placeholder="* Email"
                                value={values.email}
                                onChange={handleChange} 
                                required
                            />
                        </div>
                        <div className="form-telefono" id="form-telefono">
                            <input 
                                name="telefono" 
                                type="number" 
                                className="telefono" 
                                id="telefono" 
                                placeholder="* Teléfono"
                                value={values.telefono}
                                onChange={handleChange} 
                                required
                            />
                        </div>
                        <div className="form-message">
                            <textarea 
                                name="message" 
                                type="text" 
                                className="message" 
                                id="message" 
                                placeholder="* Mensaje" 
                                onChange={handleChange} 
                                required
                            />
                        </div>
                        <button 
                            className="btn-send" 
                            type='submit'>
                            Enviar
                        </button>
                        <GoogleReCaptcha
                            onVerify={token => {
                                setToken(token)
                            }}
                        />
                    </form>      
                </GoogleReCaptchaProvider>
        </div>
    );
} 
export default ContactSection;