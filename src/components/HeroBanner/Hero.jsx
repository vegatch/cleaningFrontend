import React from "react";
import Path from '../Path/Path.jsx'

import './hero.css'


const Hero = ({message, mainMessage, picture, picturedesc, lblbtn}) => {
    
    return(
        <div className="main-component-container">
            <div className='heroContainer' >
                <div className="hero-top">
                    <div className="hero-left">
                        <div className="main-message">
                            <h1>
                                {mainMessage}
                            </h1>
                        </div>
                        <div className="secondary-message">
                            <p>
                                {message}
                            </p>
                        </div>                        
                    </div>
                    <div className="hero-right">
                        <img src={picture} alt={picturedesc}/>
                    </div>                    
                </div>  
                <div className="hero-bottom">
                    {/* < Button label={lblbtn} className='small-btn'/> */}
                    <Path labelForLink = {lblbtn} goToPage='/BookNow'/>
                </div>

            </div>
        </div>
    )
}


export default Hero;