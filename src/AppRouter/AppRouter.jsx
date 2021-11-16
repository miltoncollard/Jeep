import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//components
import NavBar from '../components/header/navbar/navbar';
import DemoCarousel from '../components/header/carousel/carousel';
import ModelSection from '../components/main/model-section/model-section';
import PlanSection from '../components/main/plan-section/plan-section';
import FaqSection from '../components/main/faq-section/faq-section';
import ContactSection from '../components/main/contact-section/contact-section';
import ErrorPage from '../components/errorpage/errorpage';
import Footer from  '../components/footer/footer';


export default function AppRouter(){
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route exact path="/Jeep">
                    <DemoCarousel/>
                    <ModelSection/>
                    <PlanSection/>
                    <FaqSection/>
                    <ContactSection/>
                </Route>
                <Route path="*" component={ErrorPage}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}