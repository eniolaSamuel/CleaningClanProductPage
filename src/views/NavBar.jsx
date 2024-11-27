import React, { useState } from "react";
import "../styles/NavBar.css";
import TCCLOGO from "../assets/svg/tccLogo.svg";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger and close menu

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false); // Close menu after clicking a link
    };

    let links = [
        { name: "Home", id: "home" },
        { name: "Services", id: "service-section" },
        { name: "About Us", id: "about-us" },
        { name: "Contact Us", id: "contact-us" },
        { name: "Projects", id: "projects-section" },
    ];

    return (
        <div className="navigation-main-frame">
            <div className="tcc-logo-frame">
                <img src={TCCLOGO} alt="TCC Logo" />
            </div>
            <div className={`tcc-nav-link-frame ${isMenuOpen ? "open" : ""}`}>
                <ul className="tcc-nav-link">
                    {links.map((link) => (
                        <li
                            key={link.name}
                            className="tcc-nav-link-detail"
                            onClick={() => scrollToSection(link.id)}
                        >
                            <a href="#">{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="hamburger-menu">
                {isMenuOpen ? (
                    <FaTimes onClick={() => setIsMenuOpen(false)} />
                ) : (
                    <FaBars onClick={() => setIsMenuOpen(true)} />
                )}
            </div>
        </div>
    );
};

export default NavBar;
