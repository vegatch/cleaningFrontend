import React, {useEffect} from "react";
import Banner from '../components/Banner/Banner.jsx'
import Hero from '../components/HeroBanner/Hero.jsx'
import Ads from '../components/Ads/Ads.jsx'
import Work from '../components/WorkWithUs/WorkWithUs.jsx'
import Faq from '../components/FAQ/Faq.jsx'
import ContactUS from '../components/Contact/ContactUs.jsx'
import HeroImg from '../pics/caddy.png'
import '../CSS/home.css'
// import { useEffect } from 'react';

const Home = () => {

    
    const messageImporant = `
     Enjoy a cleaner, tidier and healthier home or office without doing it.
    `
    const intro = `
    Cleaning is a time consuming task and can be very challenging for many because of the constant kneeling 
    and bending. Cleaning can also put a massive pressure on your joints and your back. Get your life and 
    freedom back. Let's Benskya do this strenuous job for you.
    `
    
    const imgdesc = 'cleaning picture'

    const workBenefit =[
        {
            id:1,
            title:'Save you time',
            titleDesc:`
            Cleaning is a time-consuming task that requires significant effort and time
            which you don't have. Stop stressing yourself out, leave the cleaning to us 
            and enjoy a healthier environment. 
            `,

        },
        {
            id:2,
            title:'Save you money',
            titleDesc:`
            Having a clean and tidy space can prevent dirt and rodents from housing your
            place and improve the longevity of your items, saving you money on repairs 
            and replacements in the long run.
            `,

        },
        {
            id:3,
            title:'Always available for you',
            titleDesc:`
            Conscious that the need for a clean can arise at anytime,
            Benskya will make sure to always have  staff available to help
            you with your cleaning need.
            `,

        },
    ]

    useEffect((e) => {    
    //  setCategory('')
        
      }, []);
    
    return (
        <div className="page-container">   
            <div className="content-container">
                <div className="hero-section">
                        <Hero mainMessage= {messageImporant} message={intro} picture={HeroImg} picturedesc={imgdesc} lblbtn='Get a quote'/>
                </div>
            </div>         
            
            {/* People I work with */}
            <div className="content-container">
                <div className="benefit-section">
                    <h2>Why work with us?</h2>
                    {
                        workBenefit.map((benefit) =>{
                            return <Work 
                            key={benefit.id}
                            {...benefit}
                            title={benefit.title}
                            titleDesc={benefit.titleDesc}
                            />
                        })
                    }
                </div>
            </div>
            {/* Ads banner */}
            <div>
                <Banner /> 
            </div>
            {/* FAQ section */}
            <div className="content-container">
                <div className="faq-section">
                    <h2>Frequently asked questions</h2>
                    <Faq />             
                </div>
            </div>
            {/* Serives and Products */}
            <div className="content-container">
                <div className="section-ads">
                    <h2>Cleaning checklist</h2>
                    <Ads />
                </div>
            </div>
             {/* Contact us Section */}
             <div className="content-container">
                <div className="contact-section">                
                    <div>
                        <ContactUS />
                    </div>
                </div>
             </div>
            <div>
                <Banner /> 
            </div>
            
        </div>
        
        
        )
}

export default Home;