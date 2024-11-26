import React from "react";
import "../styles/Footer.css"; // Assuming you'll use a separate CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <div className="logo-space">
                        {/* Replace this with your logo */}
                    </div>
                    <p className="footer-phrase">
                        "A clean space is a happy place."
                    </p>
                </div>
                <div className="footer-right">
                    <h4>Contact</h4>
                    <ul>
                        <li>
                            <a href="tel:+2348023142786">Phone: +234 802 314 2786</a>
                        </li>
                        <li>
                            <a
                                href="https://maps.google.com/?q=12-24,+LSDPC,+Adeola+Odeku,+Victoria+Island,+Lagos"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Address: 12-24, LSDPC, Adeola Odeku, Victoria Island, Lagos
                            </a>
                        </li>
                        <li>
                            <a href="mailto:thecleaningclanngr@gmail.com">
                                Email: thecleaningclanngr@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
