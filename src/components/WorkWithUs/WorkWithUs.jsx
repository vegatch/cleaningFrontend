import React from "react";
import './work.css'

const Work = ({title, titleDesc}) =>{
    return(
        <div className="work-container">
            <div className="residential">
                    <div className="why-desc-container"> 
                        <h4>
                            {title}
                        </h4>
                        <p>
                            {titleDesc}
                        </p>
                    </div>
            </div>
            <div className="commercial">
            {/* <div>
                        <h3>
                            {title}
                        </h3>
                        <p>
                            {titleDesc}
                        </p>
            </div> */}
            </div>
        </div>
        
    )
}

export default Work;