import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";
import Mail from "../assets/svg/icons8-send-mail.svg";
import CellPhone from "../assets/svg/icons8-cell-phone.svg";
import Location from "../assets/svg/icons8-location.svg";

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_2kvfw6b",
                "template_zl3djr3",
                form.current,
                "W6IqnvBD7h6TUXe3b"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.error(error.text);
                    alert("Failed to send message, please try again.");
                }
            );
        e.target.reset();
    };


    return (
        <div className="contact-main-frame">
            <div className="contact-form">
                <div className="contact-headers">
                    <h1>Let's work <br></br>together!</h1>
                    <p>Let us help you achieve a spotless and elegant space.</p>
                    <p>Fill out the following form and we will get back to you in less than 24 hours.</p>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name" className="name-label">Your Name</label>
                    <input id="name" type="text" name="user_name" placeholder="John Doe" required/>

                    <label htmlFor="email" className="email-label">Email</label>
                    <input id="email" type="email" name="user_email" placeholder="example@email.com" required/>

                    <label htmlFor="service" className="service-label">Select Service</label>
                    <select id="service" name="user_service" required>
                        <option value="" disabled selected>Select a service</option>
                        <option value="Residential Cleaning">Residential Cleaning</option>
                        <option value="Commercial Cleaning">Commercial Cleaning</option>
                        <option value="Special Event Cleaning">Special Event Cleaning</option>
                        <option value="Integrated Pest Management">Integrated Pest Management</option>
                        <option value="Deep Cleaning & Sanitizing">Deep Cleaning & Sanitizing</option>
                        <option value="Move-In/Move-Out Cleaning">Move-In/Move-Out Cleaning</option>
                        <option value="Event Cleaning">Event Cleaning</option>
                    </select>

                    <label htmlFor="message" className="message-label">Additional Message</label>
                    <textarea id="message" name="message"
                              placeholder="Input additional message including property description and number of rooms" required></textarea>

                    <button type="submit">Send Message</button>
                </form>

            </div>

            <div className="contact-header">
                <div className="contact-item">
                    <img src={CellPhone} alt="Phone"/>
                    <div>
                        <h2>CALL US</h2>
                        <p>+234 802 314 2786</p>
                    </div>
                </div>
                <div className="contact-item-location">
                    <img src={Location} alt="Location"/>
                    <div>
                        <h2>ADDRESS</h2>
                        <p>C1, LSDPC ESTATE, 12-24 ADEOLA ODEKU WAY, VICTORIA ISLAND. LAGOS(NG-LA), 101241.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
