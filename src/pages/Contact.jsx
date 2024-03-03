import React from "react";
import ContactUs from '../components/Contact/ContactUs';
import Banner from '../components/Banner/Banner.jsx';
import '../CSS/contact.css'
const Contact = () => {
    
    return(
        <div className="page-container">
            <div className="contact-header-container">
                <h1> Contact us today</h1>
            </div>
            <ContactUs />
            <Banner />
        </div>
    )
}

export default Contact;