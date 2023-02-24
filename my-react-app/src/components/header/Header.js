import React from "react";
import "./header.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { animateScroll, scrollTo } from 'react-scroll';
import { Link } from 'react-scroll';

library.add(faChevronDown);
console.log(library);

function Header(){

    return (
        <>
        <header>
            <nav>
                <div id="logo">
                    <h1>_Rania_Benameur_</h1>
                </div>
                <div id="navigation"> 
                    <Link to="about" className="link-class">about me.</Link>
                    <Link to="work" className="link-class">work.</Link>
                    <Link to="contact" className="link-class">contact.</Link>
                </div>
            </nav>
            <div className="hero-container">
                <Link to="about">
                    <FontAwesomeIcon icon={faChevronDown} className="icon" />
                </Link>
            </div>
        </header>
        </>
    );
}

export default Header; 