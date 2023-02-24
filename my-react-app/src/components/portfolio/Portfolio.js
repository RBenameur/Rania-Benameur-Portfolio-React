import React from "react";
import "./portfolio.css";
// import { Element } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import portfolioData from "../../data/projectData.json";

function Portfolio(props){
        
    const dataObj = portfolioData.data;

    const index = props.injectData;

    // console.log(dataObj)

    return (
        <>
        <div className={"card card" + index}>
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
            <div className="card-text">
                <h3>{dataObj[index].name}</h3>
                <h5>{dataObj[index].description}</h5>
                <a href={dataObj[index].github} target="_blank" rel="noopener noreferrer"><p>visit github repo</p></a>
                <a href={dataObj[index].deployed} target="_blank" rel="noopener noreferrer"><p>visit deployed site</p></a>
            </div>
        </div>
            {/* <div className=" card card1">
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
                <div className="card-text">
                    <h3>Recipedia</h3>
                    <h5>HTML CSS JavaScript JQuery Bootstraps</h5>
                    <a href="https://github.com/o1ujok3/Recipedia" target="_blank" rel="noopener noreferrer"><p>visit github repo</p></a>
                </div>
            </div>

            <div className="card card2">
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
                <div className="card-text">
                    <h3>Weather Dashboard</h3>
                    <h5> HTML CSS JavaScript JQuery Moment.js Bootstraps</h5>
                    <a href="https://github.com/RBenameur/Weather-Dashboard" target="_blank" rel="noopener noreferrer"><p>visit github repo</p></a>
                </div>
            </div>

            <div className=" card card3">
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
                <div className="card-text">
                    <h3>Daily Planner</h3>
                    <h5> HTML CSS JavaScript Moment.js JQuery Bootstraps</h5>
                    <a href="https://github.com/RBenameur/Daily-Planner-App" target="_blank" rel="noopener noreferrer"><p>visit github repo</p></a>
                </div>
            </div>

            <div className=" card card4">
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
                <div className="card-text">
                    <h3>Javascript Quiz</h3>
                    <h5>HTML CSS Javascript</h5>
                    <a href="https://github.com/RBenameur/javascript-quiz" target="_blank" rel="noopener noreferrer"><p>visit github repo</p></a>
                </div>
            </div> */}
        </>
    );
}

export default Portfolio; 