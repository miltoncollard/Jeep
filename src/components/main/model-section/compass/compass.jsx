//CSS
import "./compass.css"
//assets
import compass from "../../../../assets/images/compass.png"
import img1 from "../../../../assets/images/img1.png"
import img2 from "../../../../assets/images/img2.png"
import img3 from "../../../../assets/images/img3.png"
import img4 from "../../../../assets/images/img4.png"

const ModelSection = () => {
    return ( 
        <div className="models section" id="compass">
            <img src={compass} alt=""/>
            <div className="models__content">
                <div className="content__text"> 
                    <h2>COMPASS AT Sport</h2>
                    <p>Una nueva interpretación del autentico diseño Jeep. Incorpora motor Tigershark MultiAri,
                         transmisión manual de 6 velocidades, llantas de aleación de 17'', 
                         sistemas Uconnect de 7'', táctil con cámara de retroceso, 
                         Climatizador automático Bi-zona, control de velocidad crucero, 
                         sensores de estacionamiento trasero y mucho más
                    </p>
                </div>
                <div className="content__images">
                    <img className="images-1" src={img1} alt=""/>
                    <img className="images-2" src={img2} alt=""/>
                    <img className="images-3" src={img3} alt=""/>
                    <img className="images-4" src={img4} alt=""/>
                </div>
            </div>
        </div>
    );
  }
  
  export default ModelSection;