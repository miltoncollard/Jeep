/* //*import { useState } from "react";
import { saveInfo } from "../services/services";
const useForm = validate =>{


    const [values, setValues] = useState({
        username: '',
        email: '',
        telefono: '',
        message: '',
        "g-recaptcha-response": ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const {name, value} = e.target

        setValues({
            ...values,
            [name] : value
        });

        setErrors(validate(values));
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        if(Object.keys(errors).length === 0){
            //saveInfo(values)
        }
    }
    
    return{handleChange, values, handleSubmit, errors,succes}
}

export default useForm; */