import React from "react";
import './ServOffered.css'


const ServOffered = ({serviceTitle, serviceDesc}) =>{
    return(
        <div className="service-main-container">
            <div className="service-wrapper">
                <h2>{serviceTitle}</h2>
                <p>{serviceDesc}</p>
            </div>
        </div>
    )        
    
}

export default ServOffered;