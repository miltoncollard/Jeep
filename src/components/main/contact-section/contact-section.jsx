//imports
import React, {useState, useEffect, useCallback} from "react";
import axios from "axios";
import {GoogleReCaptchaProvider, useGoogleReCaptcha} from "react-google-recaptcha-v3"
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
    const {executeRecaptcha} = useGoogleReCaptcha(); 
    const [formStatus, setFormStatus] = useState(false);

      // Create an event handler so you can call the verification on button click event or form submit
    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        return;
        }

        const key = await executeRecaptcha('yourAction');
        setToken(key)
        // Do whatever you want with the token
    }, [executeRecaptcha]);

    // You can use useEffect to trigger the verification as soon as the component being loaded
    useEffect(() => {
        handleReCaptchaVerify();
    }, [handleReCaptchaVerify]);

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

        const params = `&nombre=${values.fname}&apellido=${values.sname}&telefono=${values.telefono}&celular=${values.telefono}&email=${values.email}&comentarios=${values.message}` ;
        
        axios({
            method: "post",
            url: `https://api.laikad.com/api/pilot?action=process&recaptcha_response=${token}${params}`,
            values
          })
          .then(function (response) {
            setFormStatus(true);
            setValues({
                fname: '',
                sname:'',
                email: '',
                telefono: '',
                message: '',
            });
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          }); 

        CleanForm()
    }

    const CleanForm = () =>{
        values.fname =''
        values.sname =''
        values.email =''
        values.telefono =''
        document.getElementById("datos_form").reset();
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
                            type='submit'
                            onClick={handleReCaptchaVerify}
                        >
                            Enviar
                        </button>
                        {formStatus ? (<div className="success__message">Su mensaje fue enviado!</div>):("") }
                    </form>      
                </GoogleReCaptchaProvider>
        </div>
    );
} 
export default ContactSection;