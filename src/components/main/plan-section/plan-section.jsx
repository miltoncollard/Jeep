//imports

import "./plan-section.css"

const PlanSection = () => {
    return ( 
        <div className="planSection" id="planSection">
            <h1>JEEP PLAN</h1>
            <div className= "plan-content">            
                <div className="text-plan">
                    <h2>¿Por qué un plan de ahorro?</h2>
                    <p>Es un sistema mediante el cuál, un grupo limitado de personas realiza un aporte mensual, 
                        destinado a la adquisición de una unidad y que será entregada en un período determinado a cada uno de los integrantes. 
                        Para mayor información sobre la denominación y duración de los planes, ver el Artículo 4 de la <b>Solicitud de Adhesión</b></p>
                </div>
                <div className="advantage">
                    <h2>Ventajas</h2>
                    <ul>
                        <li>Financiación del 100% del valor.</li>
                        <li>Totalmente en pesos.</li>
                        <li>Te suscribís sólo con tu DNI.</li>
                        <li>Sin anticipos ni requisitos de ingreso.</li>
                        <li>La gama de modelos más amplia del mercado.</li>
                        <li>Posibilidad de financiar el cambio de Modelo en cuotas.</li>
                        <li>La más amplia red de cobro para el pago de tus cuotas.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
  
  export default PlanSection;