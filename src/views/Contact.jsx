import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

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
        if (!validateForm()) return;

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
                { custom_message: customMessage },
                "W6IqnvBD7h6TUXe3b"
            )
            .then(
                (result) => {
                    alert("Message sent successfully!");
                },
                (error) => {
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
        <section className="contact-main-frame" id="contact-us">
            <div className="contact-form">
                <div className="contact-headers">
                    <h1>Let's work <br /> together!</h1>
                    <p>Let us help you achieve a spotless and elegant space.</p>
                    <p>Fill out the form and we’ll respond within 24 hours.</p>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-row-group">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="user_name"
                                    placeholder="John Doe"
                                    value={formData.user_name}
                                    onChange={(e) => handleInputChange("user_name", e.target.value)}
                                />
                                {errors.user_name && <p className="error">{errors.user_name}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="user_email"
                                    placeholder="example@email.com"
                                    value={formData.user_email}
                                    onChange={(e) => handleInputChange("user_email", e.target.value)}
                                />
                                {errors.user_email && <p className="error">{errors.user_email}</p>}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="service">Select Service</label>
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
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Additional information"
                                    value={formData.message}
                                    onChange={(e) => handleInputChange("message", e.target.value)}
                                ></textarea>
                                {errors.message && <p className="error">{errors.message}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="button-container">
                        <button type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
