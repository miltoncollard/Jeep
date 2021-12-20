import React, { useState } from "react";
import "./contact-test.css";
import axios from "axios";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from "react-google-recaptcha-v3";

const ContactTest = () => {

  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    fname: '',
    sname:'',
    email: '',
    telefono: '',
    message: '',
    "recaptcha": ""
  });

  const handleChange = e => {
    const {name, value} = e.target

    setQuery({
        ...query,
        [name] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const params = `&nombre=${query.fname}&apellido=${query.sname}&telefono=${query.telefono}&celular=${query.telefono}&email=${query.email}&comentarios=${query.message}` ;

    axios({
        method: "post",
        url: `https://api.laikad.com/api/pilot?action=process&recaptcha_response=${query.recaptcha}?${params}`,
        query
    })
      .then(function (response) {
        setFormStatus(true);
        setQuery({
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
  };
  return (
    <div className="contact-section" id="contact">
      <h1>Contactanos</h1>
      <GoogleReCaptchaProvider reCaptchaKey="6LegwUwdAAAAAGszA7NUGVV4c64JcvUSHOzhEDpi">
        <form className="contact__form" id="datos_form" onSubmit={handleSubmit}>
          <div className="form-fname" id="form-fname">
            <input
              type='text' 
              className="fname"
              id="fname" 
              placeholder="* Nombre"
              name='fname'
              value={query.fname}
              onChange={handleChange}
            />
          </div>
          <div className="form-sname" id="form-sname">
            <input
              name='sname' 
              type='text' 
              className="sname" 
              id="sname" 
              placeholder="* Apellido"
              value={query.sname}
              onChange={handleChange}
            />
          </div>
          <div className="form-email" id="form-email">
            <input
                name="email" 
                type="email" 
                className="email" 
                id="email" 
                placeholder="* Email"
                value={query.email}
                onChange={handleChange}
                
                />
          </div>
          <div className="form-telefono" id="form-telefono">
            <input 
                name="telefono" 
                type="number" 
                className="telefono" 
                id="telefono" 
                placeholder="* Teléfono"
                value={query.telefono}
                onChange={handleChange} 
                
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
                    
                />
            </div>
          <div className="form-group mt-3">
            {formStatus ? (
              <div className="success__message">
                Su mensaje fue enviado!
              </div>
            ) : (
              ""
            )}
            <GoogleReCaptcha
              onVerify={(token) => {
                setQuery({ ...query, "recaptcha": token });
              }}
            />
            <button type="submit" className="btn-send">
              Enviar
            </button>
          </div>
        </form>
      </GoogleReCaptchaProvider>
    </div>
  );
}
export default ContactTest;
