//imports
import CompassModel from "./compass/compass";
import RenegadeModel from "./renegade/renegade";
import "./model-section.css"

const ModelSection = () => {
    return ( 
        <div className="models section">
            <h1>MODELOS</h1>
            <CompassModel />
            <RenegadeModel />
        </div>
    );
  }
  
  export default ModelSection;