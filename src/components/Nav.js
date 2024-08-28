import React from 'react';
import {Link, useLocation} from "react-router-dom";
import "../styles/nav.css";
import spy from "../assets/spy.png";
import histogram from "../assets/histogram.png";
import stack from "../assets/stack.png";
import files from "../assets/files.png";
import envelope from "../assets/envelope.png";

export default function Nav() {
    const location = useLocation();  // gets the current URL location to keep track of which page we're on

    const getNavPositionClass = () => {
        switch (location.pathname) {
            case "/": 
                return "nav-about";
            case "/skills": 
                return "nav-skills";
            case "/classes": 
                return "nav-classes";
            case "/resume": 
                return "nav-resume";
            case "/contact": 
                return "nav-contact";
            default:
                return "";
        }
    };

    const getPageTitle = () => {
        switch (location.pathname) {
            case "/": 
                return "ABOUT";
            case "/skills": 
                return "SKILLS";
            case "/classes": 
                return "CLASSES";
            case "/resume": 
                return "RESUME";
            case "/contact": 
                return "CONTACT";
            default:
                return "";
        }
    };

    const navPositionClass = getNavPositionClass();
    const pageTitle = getPageTitle();

    const isCurrentPage = (navClass) => {
        return navClass === navPositionClass;
    };

    const renderNavLink = (to, imgSrc, altText, navClass) => {
        const isCurrent = isCurrentPage(navClass);
        const linkClass = isCurrent ? "nav-link current" : "nav-link";

        return (
            <Link to={to} className={linkClass}>
                <img src={imgSrc} alt={altText} />
                {isCurrent && <h1 className="page-title"> {pageTitle} </h1>}
            </Link>
        );
    };

    return (
        <nav className={'nav ${navPositionClass}'}>
            {renderNavLink( "/", spy, "spy icon", "nav-about" )}
            {renderNavLink( "/skills", histogram, "histogram icon", "nav-skills" )}
            {renderNavLink( "/classes", stack, "stack icon", "nav-classes" )}
            {renderNavLink( "/resume", files, "files icon", "nav-resume" )}
            {renderNavLink( "/contact", envelope, "envelope icon", "nav-contact" )}
        </nav>
    );
};
