import React from "react";
import "./portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import portfolioData from "../../data/projectData.json";

function Portfolio(props){
        
    const dataObj = portfolioData.data;

    const index = props.injectData;

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
        </>
    );
}

export default Portfolio; 