import React from "react";
import "./portfolio.css";
import { Element } from 'react-scroll';

function Portfolio(){

    return (
        <>
        <Element name="work">
            <section className="page-section" id="work">
                <h2>work.</h2>
                <div className="card-container">
                    <div className=" card card1">
                        <i className="fas fa-chevron-down fa-3x"></i>
                        <div className="card-text">
                            <h3>Recipedia</h3>
                            <h5>HTML CSS JavaScript JQuery Bootstraps</h5>
                            <a href="https://github.com/o1ujok3/Recipedia" target="_blank"><p>visit github repo</p></a>
                        </div>
                    </div>

                    <div className="card card2">
                        <i className="fas fa-chevron-down fa-3x"></i>
                        <div className="card-text">
                            <h3>Weather Dashboard</h3>
                            <h5> HTML CSS JavaScript JQuery Moment.js Bootstraps</h5>
                            <a href="https://github.com/RBenameur/Weather-Dashboard" target="_blank"><p>visit github repo</p></a>
                        </div>
                    </div>

                    <div className=" card card3">
                        <i className="fas fa-chevron-down fa-3x"></i>
                        <div className="card-text">
                            <h3>Daily Planner</h3>
                            <h5> HTML CSS JavaScript Moment.js JQuery Bootstraps</h5>
                            <a href="https://github.com/RBenameur/Daily-Planner-App" target="_blank"><p>visit github repo</p></a>
                        </div>
                    </div>

                    <div className=" card card4">
                        <i className="fas fa-chevron-down fa-3x"></i>
                        <div className="card-text">
                            <h3>Javascript Quiz</h3>
                            <h5>HTML CSS Javascript</h5>
                            <a href="https://github.com/RBenameur/javascript-quiz" target="_blank"><p>visit github repo</p></a>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
        </>
    );
}

export default Portfolio; 