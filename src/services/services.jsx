import axios from 'axios';

const baseUrl = 'hgola'

export async function saveInfo(datos){

    const params = `&nombre=${datos.nomape}&apellido=${datos.nomape}&telefono=${datos.telefono}&celular=${datos.telefono}&email=${datos.email}&comentarios=${datos.message}` ;

    try{
        console.log(datos)
        console.log(params)

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