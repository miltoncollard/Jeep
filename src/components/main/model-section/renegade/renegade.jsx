//CSS
import "./renegade.css"
//assets
import renegade from "../../../../assets/images/renegade.png"
import img1 from "../../../../assets/images/r_img1.jpg"
import img2 from "../../../../assets/images/r_img2.jpg"
import img3 from "../../../../assets/images/r_img3.jpg"
import img4 from "../../../../assets/images/r_img4.jpg"


const ModelSection = () => {
    return ( 
        <div className="models section" id="renegade">
            <img src={renegade} alt=""/>
            <div className="models__content">
                <div className="content__text"> 
                    <h2>RENEGADE</h2>
                    <p>El Jeep® Renegade se encuentra disponible con motor nafta de 1.8 litros
                        o diésel 2.0. Con caja manual de 5 velocidades como automática de 6 o 9 
                        velocidades. Además, la versión Trailhawk® incorpora un sistema de 
                        desconexión del eje trasero para realizar cambios de tracción de dos a 
                        cuatro ruedas y el sistema Active Drive Low de Jeep® con el cual obtiene
                        el emblema Trail Rated®, legendario por su capacidad para obtener el mejor
                        desempeño en diversas condiciones.
                    </p>
                </div>
                <div className="content__images">
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
                <img src={img4} alt=""/>
                </div>
            </div>
        </div>
    );
  }
  
  export default ModelSection;