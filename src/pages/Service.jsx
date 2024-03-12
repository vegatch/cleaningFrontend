import React from "react";
import ServiceComponent from '../components/Service/Service.jsx'
// import Form from '../components/Forms/FormEx.jsx'
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

             {/* <Form /> */}
            

        </div>
    )
}

export default Service;