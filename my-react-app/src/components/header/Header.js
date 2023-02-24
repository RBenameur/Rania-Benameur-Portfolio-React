import React from "react";
import "./header.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-scroll';
import { NavLink } from "react-router-dom";

library.add(faChevronDown);

function Header(){

    return (
        <>
        <header>
            <nav>
                <div id="logo">
                    <h1>Rania Benameur</h1>
                </div>
                <div id="navigation">
                    <NavLink to="/home" className="link-class">home.</NavLink> 
                    <Link to="about" className="link-class">about me.</Link>
                    <NavLink to="/portfolio" className="link-class">work.</NavLink>
                    <NavLink to="/contact" className="link-class">contact.</NavLink>
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