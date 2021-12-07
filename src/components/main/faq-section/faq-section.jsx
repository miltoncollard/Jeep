//imports
import "./faq-section.css"
const FaqSection = () => {
    return ( 
        <div className="faq-section" id="faq">
            <h1>Preguntas frecuentes</h1>
            <h2>Por las siguientes consultas u otras, no dudes en contactarnos</h2>
            <div className="faq-content">
                <ul>
                    <li>¿Qué es y qué trámite debo realizar para licitar?</li>
                    <li>¿Cómo puedo abonar el Derecho de Adjudicación?</li>
                    <li>¿Cómo puedo conocer los resultados del Acto de Adjudicación?</li>
                    <li>¿Cómo quedan compuestas las cuotas con el diferimiento?</li>
                    <li>¿Puedo transferir mi PLAN?</li>
                    <li>En caso de haber un cambio de bien tipo, ¿qué ocurre con las cuotas?</li>
                </ul>
            </div>
        </div>
    );
  }
  
  export default FaqSection;