import React from "react";
import Qanswer from '../components/FAQ/Faq.jsx'
import Banner from '../components/Banner/Banner.jsx';
import '../CSS/faq.css'

const Faq = () =>{
    return (
        <div className="page-container">
            <div className="faq-page-container">
                <div className="faq-header-container">
                    <h1>Frequently asked questions</h1>
                </div>
                <div>
                    <Qanswer />
                </div>
                
                <div>
                    <Banner />
                </div>
            </div>
        </div>
    )
}

export default Faq;