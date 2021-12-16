//imports
import React, {useState} from "react";
import axios from "axios";
import {GoogleReCaptchaProvider, GoogleReCaptcha} from "react-google-recaptcha-v3"
//CSS
import "./contact-section.css";

const ContactSection = () => {

    const [values, setValues] = useState({
        fname: '',
        sname:'',
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
        console.log("VALUES: ", values)
        const params = `&nombre=${values.fname}&apellido=${values.sname}&telefono=${values.telefono}&celular=${values.telefono}&email=${values.email}&comentarios=${values.message}` ;
        axios({
            method: "post",
            url: `https://api.laikad.com/api/pilot?action=process&recaptcha_response=${token}?${params}`,
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
                        <div className="form-fname" id="form-fname">
                            <input 
                                name='fname' 
                                type='text' 
                                className="fname" 
                                id="fname" 
                                placeholder="* Nombre"
                                value={values.fname}
                                onChange={handleChange} 
                                required
                            />
                        </div>
                        <div className="form-sname" id="form-sname">
                            <input 
                                name='sname' 
                                type='text' 
                                className="sname" 
                                id="sname" 
                                placeholder="* Apellido"
                                value={values.sname}
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