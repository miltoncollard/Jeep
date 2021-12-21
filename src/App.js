import React from 'react';
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import './App.css';
//components
import NavBar from './components/header/navbar/navbar';
import BannerCarousel from './components/header/carousel/carousel';
import ModelSection from './components/main/model-section/model-section';
import PlanSection from './components/main/plan-section/plan-section';
import FaqSection from './components/main/faq-section/faq-section';
import ContactSection from './components/main/contact-section/contact-section';
import Footer from  './components/footer/footer';

function App() {
  return (
    <div className="App">
      <GoogleReCaptchaProvider reCaptchaKey="6LegwUwdAAAAAGszA7NUGVV4c64JcvUSHOzhEDpi">
        <NavBar/>
        <BannerCarousel/> 
        <ModelSection/>
        <PlanSection/>
        <FaqSection/>
        <ContactSection/> 
        <Footer/>  
      </GoogleReCaptchaProvider>
    </div>
  );
}

export default App;
