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
                    <p>El nuevo Compass es aún más elegante y está diseñado para causar una gran impresión. 
                       Estrena renovados diseños de paragolpes y parrilla delantera, el badge T270 y llantas 
                       exteriores. La gran novedad son los nuevos faros delanteros y traseros con tecnología LED
                       presentes en todas las versiones, que hacen que el nuevo Compass se destaque por fuera
                       de lo común.
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