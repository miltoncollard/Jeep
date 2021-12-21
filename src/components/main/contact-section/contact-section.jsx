//imports
import React, {useState, useEffect, useCallback} from "react";
import axios from "axios";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
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
        const key = await executeRecaptcha();
        setToken(key);
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

    const handleClose = (event, reason) =>{
        if(reason === 'clickaway'){
            return
        }

        setFormStatus(false)
    }

    return ( 
        <div className="contact-section" id="contact">
            <h1>Contactanos</h1>
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
                    
                    <Snackbar
                    open={formStatus} 
                    autoHideDuration={4000} 
                    onClose={handleClose} 
                    message='Se mensaje ha sido enviado!'
                    action={
                        <React.Fragment>
                            <IconButton onClick={handleClose}></IconButton>
                        </React.Fragment>
                     }
                    >

                    </Snackbar>
                </form>      
        </div>
    );
} 
export default ContactSection;