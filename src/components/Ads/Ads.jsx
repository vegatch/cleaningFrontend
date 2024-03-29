import React from 'react';
// import Path from '../Path/Path.jsx'
import  './ads.css';

const Ads = () =>{

    const [isStandard, setIsStandard] = React.useState(false);
    const [isDeep, setIsDeep] = React.useState(false);
    const [isMove, setIsMove] = React.useState(false);
    
    const toggleStandard =() =>{
        setIsStandard(!isStandard)
        setIsDeep(false)
        setIsMove(false)
    }

    const toggleDeep =() =>{
        setIsDeep(!isDeep)
        setIsStandard(false)
        setIsMove(false)
    }

    const toggleMove =() =>{
        setIsMove(!isMove)
        setIsDeep(false)
        setIsStandard(false)
    }

    const standardCleaningList = [
        {
            id:1,
            desc:'Sweep and mop all floors'
        },
        {
            id:2,
            desc:'Dusting'
        },
        {
            id:3,
            desc:'Vacuum carpets'
        },
        {
            id:4,
            desc:'Empty bins'
        },
        {
            id:5,
            desc:'Clean Mirrors'
        },
        {
            id:6,
            desc:'Window sills'
        },
        {
            id:7,
            desc:'Outside kitchen cabinets'
        },
        {
            id:8,
            desc:'Outside fridge'
        },
        {
            id:9,
            desc:'Countertops'
        },
        {
            id:10,
            desc:'Appliances'
        },
        {
            id:11,
            desc:'Sinks'
        },
        {
            id:12,
            desc:'Stove'
        },
        {
            id:13,
            desc:'Dishes'
        },
        {
            id:14,
            desc:'Microwave'
        },
        {
            id:15,
            desc:'Outside Dishwasher'
        },
        {
            id:16,
            desc:'Outside oven'
        },
        {
            id:17,
            desc:'Toilets'
        },
        {
            id:18,
            desc:'Outside of bath cabinets'
        },
        {
            id:19,
            desc:'Showers'
        },
        {
            id:20,
            desc:'Bath tubs'
        },
        {
            id:21,
            desc:'Make beds'
        },
        {
            id:22,
            desc:'Table tops'
        },
        {
            id:23,
            desc:'Hallways'
        },
        {
            id:24,
            desc:'Staircases'
        },
        
        
        
        
    ]

    const deepCleaningList = [
        {
            id:1,
            desc:'Baseboard'
        },
        {
            id:2,
            desc:'Light switches and door knobs'
        },
        {
            id:3,
            desc:'Dust furniture'
        },
        {
            id:4,
            desc:'Walls\' spot clean'
        },
        {
            id:5,
            desc:'Doors'
        },
        {
            id:6,
            desc:'Sanitize all surfaces'
        },
        {
            id:7,
            desc:'Underneath furniture if accessible'
        },
        {
            id:8,
            desc:'Stainless'
        },
        {
            id:9,
            desc:'Chrome'
        },
               
        
        
    ]

    const MoveInOutCleaningList = [
        {
            id:1,
            desc:'Clean inside kitchen cabinets'
        },
        {
            id:2,
            desc:'Clean inside bath cabinets'
        },
        {
            id:3,
            desc:'Clean inside bedroom cabinets'
        },
        
    ]
    
    
    return(
        <div className='cleaning-option-container'>
            <div className='ads-btn-link'>
                <button onClick={toggleStandard } className={`btn ${isStandard ? 'btn-blue' : 'btn-page'}`}>Standard</button>
                <button onClick={toggleDeep} className={`btn ${isDeep ? ' btn-blue' : 'btn-page'}`} >Deep </button>
                <button onClick={toggleMove} className={`btn ${isMove ? ' btn-blue' : 'btn-page'}`} >Move In/Move out</button>
            </div>

            <div className='ads-content'>  
                    {
                    isStandard &&
                    <div className='clean-list'>
                        
                        {
                            standardCleaningList.map((list) =>{
                                return <li key={list.id}>{list.desc}</li>
                            })
                        }
                        
                    </div>
                    
                    }
                
            </div>
            <div className='ads-content'>
               {
                    isDeep &&               
                    <div className='clean-list'>
                       
                        {
                            deepCleaningList.map((list) =>{
                                return <li key={list.id}>{list.desc}</li>
                            })
                        }
                        <h2> Plus all services in standard </h2>
                    </div>
               }
            </div>
            <div className='ads-content'>
               
               {
                    isMove &&               
                    <div className='clean-list'>
                        
                        {
                            MoveInOutCleaningList.map((list) =>{
                                return <li key={list.id}>{list.desc}</li>
                            })
                        }
                        <h2> Plus all services in Deep </h2>
                    </div>
                }
            </div>
            
             
        </div>
    )
}

export default Ads;