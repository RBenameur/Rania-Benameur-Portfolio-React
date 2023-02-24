import React from "react";
import { Element } from 'react-scroll';
import "./contact.css";
import {Link} from 'react-router-dom';

function Contact(){

    return (
        <>
        <Element name="contact">
            <section className="page-section contact" id="contact">
                <h2>contact me.</h2>
                <div className="contact-container">
                    <p>+44 (0) 79 44 47 20 68</p>
                    <p>raniabenameur97@gmail.com</p>
                    <Link to="../../CV/Rania_BENAMEUR_CV.pdf" target="_blank" download rel="noopener noreferrer"><p>Download CV</p></Link>
                </div>
            </section>
        </Element>
        </>
    );
}

export default Contact; 