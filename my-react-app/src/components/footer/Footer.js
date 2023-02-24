import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

function Footer(){

    return (
        <>
          <footer>
                <div id="social-media">
                    <a href="https://www.linkedin.com/in/rania-b-7992a419b/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
                    <a href="https://github.com/RBenameur" target="_blank"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
                </div>
                <p id="copyright"> &copy; Rania Benameur 2023</p>
            </footer> 
        </>
    );
}

export default Footer; 