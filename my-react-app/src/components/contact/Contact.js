import React from "react";
import { Element } from 'react-scroll';
import "./contact.css";

function Contact(){

    return (
        <>
        <Element name="contact">
            <section className="page-section contact" id="contact">
                <h2>contact me.</h2>
                <div className="contact-container">
                    <p>+44 (0) 79 44 47 20 68</p>
                    <p>raniabenameur97@gmail.com</p>
                </div>
            </section>
        </Element>
        </>
    );
}

export default Contact; 