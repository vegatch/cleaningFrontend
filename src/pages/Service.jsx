import React from "react";
import ServiceComponent from '../components/Service/Service.jsx'
// import cleaner from '../pics/barbara.png'
import Banner from '../components/Banner/Banner.jsx'
import '../CSS/service.css'

const Service = () => {
    
    return (
        <div className="page-container"> 
            <div className="service-header-container">
                <h1> Overview of our offered services</h1>
            </div>

            <ServiceComponent />
            
             <Banner /> 
            

        </div>
    )
}

export default Service;