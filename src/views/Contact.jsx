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
                "service_2kvfw6b",    // Service ID
                "template_zl3djr3",   // Template ID
                form.current,
                "W6IqnvBD7h6TUXe3b"  // User/Public Key
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
            <hr />

            <div className="contact-form">
                <h1>Let's work <br></br>together!</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name" className="name-label">Your Name</label>
                    <input id="name" type="text" name="user_name" required />

                    <label htmlFor="email" className="email-label">Email</label>
                    <input id="email" type="email" name="user_email" required />

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
                    <textarea id="message" name="message" required />

                    <button type="submit">Send Message</button>
                </form>
            </div>

            <div className="contact-header">
                <div className="contact-item">
                    <img src={CellPhone} alt="Phone" />
                    <div>
                        <h2>Phone Number</h2>
                        <p>+234 802 314 2786</p>
                    </div>
                </div>
                <div className="contact-item">
                    <img src={Location} alt="Location" />
                    <div>
                        <h2>Location</h2>
                        <p>VI, Lagos, Nigeria</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
