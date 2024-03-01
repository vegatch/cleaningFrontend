import React from "react";
import Qanswer from '../components/FAQ/Faq.jsx'
import Banner from '../components/Banner/Banner.jsx';
import '../CSS/faq.css'

const Faq = () =>{
    return (
        <div className="page-container">
            <div className="faq-page-container">
                <h2>Frequently asked questions</h2>
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