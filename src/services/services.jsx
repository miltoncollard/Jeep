import axios from 'axios';

export async function saveInfo(datos){

    console.log("DATOS: ", datos)
    const params = `&nombre=${datos.username}&apellido=${datos.username}&telefono=${datos.telefono}&celular=${datos.telefono}&email=${datos.email}&comentarios=${datos.message}` ;
    try{

       const response = await axios({
           url: `https://api.laikad.com/api/pilot?action=process&recaptcha_response=?${params}`,
           method: 'POST',
           data: datos
        })

        return response

    } catch(e){
        console.log(e)
    }
}