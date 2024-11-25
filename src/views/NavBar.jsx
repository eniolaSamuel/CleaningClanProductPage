import React from "react";
import "../styles/NavBar.css";
import TCCLOGO from "../assets/svg/tccLogo.svg";

const NavBar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
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
            <div className="tcc-nav-link-frame">
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
            <div className="tcc-contact-button-frame">
                <button
                    className="tcc-contact-button"
                    onClick={() => scrollToSection("contact-us")}
                >
                    CONTACT US
                </button>
            </div>
        </div>
    );
};

export default NavBar;
