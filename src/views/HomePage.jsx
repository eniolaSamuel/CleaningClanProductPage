import "../styles/HomePage.css"
import CLEANINGPERSONS from "../assets/svg/cleaning-personel.svg"
import React from "react";

const HomePage = () =>{
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return(
        <div className="home-page-main-frame">
            <div className="text-frame">
                <h1>Welcome to The Cleaning Clan!</h1>
                <p>We're your clan for clean spaces. From homes to offices,
                    we've got your cleaning needs covered.
                    Let us bring the sparkle back to your space. Book now and join the clan</p>
                <button className="home-page-contact-button"
                        onClick={() => scrollToSection("contact-us")}>
                    CONTACT US
                </button>
            </div>
            <div className="side-image">
                <img src={CLEANINGPERSONS} alt={CLEANINGPERSONS}/>
            </div>
        </div>
    )
}

export default HomePage;