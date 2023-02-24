import React from "react";
import "./hero.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-scroll';

library.add(faChevronDown);

function Hero() {

    return (
        <>
        <div className="hero-container">
            <Link to="about">
                <FontAwesomeIcon icon={faChevronDown} className="icon" />
            </Link>
        </div>
        </>
    );
}

export default Hero; 