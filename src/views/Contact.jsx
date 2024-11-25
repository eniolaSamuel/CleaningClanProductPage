import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";
import CellPhone from "../assets/svg/icons8-cell-phone.svg";
import Location from "../assets/svg/icons8-location.svg";

export const ContactUs = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        service: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (name, value) => {
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const validateForm = () => {
        const validationErrors = {};
        if (!formData.user_name.trim()) validationErrors.user_name = "Name is required";
        if (!formData.user_email.trim()) {
            validationErrors.user_email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
            validationErrors.user_email = "Invalid email format";
        }
        if (!formData.service) validationErrors.service = "Please select a service";
        if (!formData.message.trim()) validationErrors.message = "Message is required";

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };


    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        const customMessage = `
        Hi there! I am ${formData.user_name}
        Email: ${formData.user_email}
        I am interested in the ${formData.service}
        
        Additional Information: ${formData.message}
    `;

        emailjs
            .send(
                "service_2kvfw6b",
                "template_zl3djr3",
                {
                    custom_message: customMessage,
                },
                "W6IqnvBD7h6TUXe3b"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    alert("Failed to send message, please try again.");
                }
            )
            .finally(() => {
                setLoading(false);
                setFormData({
                    user_name: "",
                    user_email: "",
                    service: "",
                    message: "",
                });
            });
    };

    return (
        <div className="contact-main-frame" id="contact-section">
            <div className="contact-form">
                <div className="contact-headers">
                    <h1>Let's work <br /> together!</h1>
                    <p>Let us help you achieve a spotless and elegant space.</p>
                    <p>Fill out the following form and we will get back to you in less than 24 hours.</p>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name" className="name-label">Your Name</label>
                    <input
                        id="name"
                        type="text"
                        name="user_name"
                        placeholder="John Doe"
                        value={formData.user_name}
                        onChange={(e) => handleInputChange("user_name", e.target.value)}
                    />
                    {errors.user_name && <p className="error">{errors.user_name}</p>}

                    <label htmlFor="email" className="email-label">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="user_email"
                        placeholder="example@email.com"
                        value={formData.user_email}
                        onChange={(e) => handleInputChange("user_email", e.target.value)}
                    />
                    {errors.user_email && <p className="error">{errors.user_email}</p>}

                    <label htmlFor="service" className="service-label">Select Service</label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={(e) => handleInputChange("service", e.target.value)}
                    >
                        <option value="" disabled>Select a service</option>
                        <option value="Residential Cleaning">Residential Cleaning</option>
                        <option value="Commercial Cleaning">Commercial Cleaning</option>
                        <option value="Special Event Cleaning">Special Event Cleaning</option>
                        <option value="Integrated Pest Management">Integrated Pest Management</option>
                        <option value="Deep Cleaning & Sanitizing">Deep Cleaning & Sanitizing</option>
                        <option value="Move-In/Move-Out Cleaning">Move-In/Move-Out Cleaning</option>
                        <option value="Event Cleaning">Event Cleaning</option>
                    </select>
                    {errors.service && <p className="error">{errors.service}</p>}

                    <label htmlFor="message" className="message-label">Additional Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Input additional message including property description and number of rooms"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                    ></textarea>
                    {errors.message && <p className="error">{errors.message}</p>}

                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>

            <div className="contact-header">
                <div className="contact-item">
                    <img src={CellPhone} alt="Phone" />
                    <div>
                        <h2>CALL US</h2>
                        <p>+234 802 314 2786</p>
                    </div>
                </div>
                <div className="contact-item-location">
                    <img src={Location} alt="Location" />
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
