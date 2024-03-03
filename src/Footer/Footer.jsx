import React from "react";
import Button from '../components/Button/Button.jsx'
import logo from '../pics/logo-white.png'
import './footer.css'
import { NavLink } from "react-router-dom";

const Footer = () => {
    const [category, setCategory] = React.useState(false)

    
    const toggleNav = () =>{    
        if(category==='Navigation'){
            setCategory('')
        }else{
            setCategory('Navigation')
        }
    
    }

    const toggleSupport = () =>{    
        if(category==='Support'){
            setCategory('')
        }else{
            setCategory('Support')
        }
    
    }
    
    const togglePrivacy = () =>{    
        if(category==='Privacy'){
            setCategory('')
        }else{
            setCategory('Privacy')
        }
    
    }

    const footerContent = `Tell us a bit about your cleaning needs so can we tailor 
    the cleaning type that would be the perfect match.
    `

    const navFooter = {
        
        "Navigation":[
            {
                id: 1,
                path: '/About',
                myUrl:'About us',
                className:'nav-footer'
            },
            {
                id: 2,
                path: '/',
                myUrl:'Blog',
                className:'nav-footer'
            },
            {
                id: 3,
                path: '/',
                myUrl:'Contact us',
                className:'nav-footer'
            },
            {
                id: 4,
                path: '/Referral',
                myUrl:'Refer a friend',
                className:'nav-footer'
            },
        ],
        "Support":[
            {
                id: 1,
                path: 'Phone number: ',
                myUrl:'786-247-2127',
                className:'nav-footer'
            },
            {
                id: 2,
                path: 'Email: ',
                myUrl:'benskyallc@gmail.com',
                className:'nav-footer'
            },
            {
                id: 3,
                path: 'Headquater',
                myUrl:'Indianapolis, IN',
                className:'nav-footer'
            },
            
        ],
        "Privacy":[
            {
                id: 1,
                path: '',
                myUrl:'Termes and conditions',
                className:'nav-footer'
            },
            {
                id: 2,
                path: '',
                myUrl:'Privacy notice',
                className:'nav-footer'
            },
            {
                id: 3,
                path: '',
                myUrl:'Copyright',
                className:'nav-footer'
            },
        ]

    }

    
    return(
        
        <footer>
            <div className="footer-top">
                <div className="left-top">
                    <div className="logo-container_footer">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="bottom-left-container">
                        <p>Let's connect</p>
                        <div>{footerContent}</div>
                        <Button className='.main-btn' label='Schedule your clean today'/>
                    </div>
                </div>
                <div className="navAndSerive right-top">
                    <ul>
                        <p className="btn-toggle" onClick={toggleNav} >Navigation</p>
                    
                        {
                            category ==='Navigation' &&
                            navFooter.Navigation.map((footerList) =>{
                                return(
                                    <li key={footerList.id} ><NavLink
                                        end to={footerList.path} 
                                        // onClick={toggleNav}
                                        className={footerList.className} 
                                    >
                                        {footerList.myUrl}
                                    </NavLink></li>
                                )
                            })
                        }
                    </ul>
                    <ul> <p className="btn-toggle" onClick={toggleSupport} >Talk to us</p>
                        {
                            category ==='Support' &&
                            navFooter.Support.map((footerList) =>{
                                return(
                                    <li key={footerList.id} ><NavLink
                                        end to={footerList.path} 
                                        onClick={toggleNav}
                                        className={footerList.className} 
                                    >
                                        <div className="support-flex">
                                            <p> {footerList.path}</p>  
                                            <p>{footerList.myUrl}</p>  
                                        </div>
                                    </NavLink></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
            <ul> <p className="btn-toggle" onClick={togglePrivacy} >Terms</p>
                        {
                            category ==='Privacy' &&
                            navFooter.Privacy.map((footerList) =>{
                                return(
                                    <li key={footerList.id} ><NavLink
                                        end to={footerList.path} 
                                        onClick={toggleNav}
                                        className={footerList.className} 
                                    >
                                     {footerList.myUrl} 
                                    </NavLink></li>
                                )
                            })
                        }
            </ul>
            </div>            
        </footer>
        
        
    )
}

export default Footer;