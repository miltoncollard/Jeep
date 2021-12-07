export default function validateInfo(values){

    let errors = {};

    console.log("VALUES: ",values)

    if(!values.username.trim()){
        errors.username = 'Nombre y Apellido vacios';
    }else if(!/^[a-zA-Z_ ]+$/i.test(values.username)){
        errors.username = 'Solo letras';
    }

    if(!values.email){
        errors.email = 'Email vacio'
    }else if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(values.email)){
        errors.email = 'Email erroneo'
    }

    if(!values.telefono){
        errors.telefono = 'Telefono vacio'
    }else if(!/^[0-9]+$/i.test(values.telefono)){
        errors.telefono = "Campo unicamente numerico"
    }

    if(!values.message){
        errors.message = 'Mensaje vacio'
    }

    return errors;
}