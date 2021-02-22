
import React from "react";
import github from "../../assets/images/github.png";

const Footer = () => {
 
    return (
        <footer>
            <div className="icons">
                <a href="https://github.com/anthonykieu" target="_blank"><img alt="Github Logo" src={github} /></a>
            </div>
        </footer>
    )
}

export default Footer;