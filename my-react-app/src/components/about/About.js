import React from "react";
import { Element } from 'react-scroll';

function About() {

    return (
        <>
        <Element name="about">
            <section className="page-section" id="about">
                <div id="about-me-text">
                    <h2>About me.</h2>
                    <p>I am a keen frontend web development bootcamp alumni seeking a junior position. I completed my bootcamp during my evening alongside a full-time job. I hope this demonstrates to you my drive and commitment to learnin. I aspire to develop my skills further in HTML, CSS, Bootstraps, JavaScript, JQuery, Node.js, React.js and more. </p>
                </div>
                <div id="about-me-profile-pic">
                    {/* <img src="./assets/images/profile_img.jpg" alt="Profile picture of Rania Benameur"/> */}
                </div>
            </section>
        </Element>
        </>
    );
}

export default About;