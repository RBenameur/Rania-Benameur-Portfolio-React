import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header(){

    return (
        <>
        <nav>
            <div id="logo">
                <h1>Rania Benameur</h1>
            </div>
            <div id="navigation">
                <NavLink to="/" className="link-class">home.</NavLink> 
                <NavLink to="/portfolio" className="link-class">work.</NavLink>
                <NavLink to="/contact" className="link-class">contact.</NavLink>
            </div>
        </nav>
        </>
    );
}

export default Header; 