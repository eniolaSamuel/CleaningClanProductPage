import React from 'react';
import "../styles/NavBar.css"
import TCCLOGO from "../assets/svg/tccLogo.svg"

const NavBar =() =>{

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    let links = [
        { name: "Home", link: "/" },
        { name: "Services", link: "/" },
        { name: "About Us", link: "/" },
        { name: "Testimonials", link: "/" },
        { name: "Contact Us", link: "/" },
        { name: "FAQs", link: "/" },
    ];
    return(
        <div className="navigation-main-frame">
            <div className="tcc-logo-frame">
                <img src={TCCLOGO} alt={TCCLOGO}/>
            </div>
            <div>
                <ul className="tcc-nav-link">
                    {links.map((link) => (
                        <li key={link.name} className="tcc-nav-link-detail">
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NavBar;