import React from "react";
import "../styles/ContactUs.css"
import Mail from "../assets/svg/icons8-send-mail.svg"
import CellPhone from "../assets/svg/icons8-cell-phone.svg"
import Location from "../assets/image/svg/icons8-location.svg"

export const ContactUs = () => {
    return(
        <div className="contact-main-frame">
            <div className="contact-sub-frame">
                <div className="contact-frame">
                    <div> <img src={Mail} alt={Mail}/></div>
                    <div>
                        <h1>Email</h1>
                        <p>dblsamuel@yahoo.com</p>
                    </div>
                </div>
                <div className="contact-frame">
                    <div> <img src={CellPhone} alt={CellPhone}/></div>
                    <div>
                        <h1>Phone Number</h1>
                        <p>+234 708 077 2782</p>
                    </div>
                </div>
                <div className="contact-frame">
                    <div> <img src={Location} alt={Location}/></div>
                    <div>
                        <h1>Location</h1>
                        <p>VI, Lagos, Nigeria</p>
                    </div>
                </div>
            </div>
            <div className="faq-frame">
                <div className="faq-subframe">

                </div>
            </div>
        </div>
    )
}
