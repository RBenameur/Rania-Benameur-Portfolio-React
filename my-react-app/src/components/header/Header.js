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
        <nav>
            <div id="logo">
                <h1>Rania Benameur</h1>
            </div>
            <div id="navigation">
                <NavLink to="/home" className="link-class">home.</NavLink> 
                <NavLink to="/portfolio" className="link-class">work.</NavLink>
                <NavLink to="/contact" className="link-class">contact.</NavLink>
            </div>
        </nav>
        </>
    );
}

export default Header; 