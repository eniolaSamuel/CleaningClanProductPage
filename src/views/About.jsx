import "../styles/About.css";

const About = () => {
    return (
        <div className="about-page">
            {/* About Us Section */}
            <section className="about-section">
                <h2>About Us</h2>
                <p>
                    Located in Victoria Island, Lagos, Nigeria, *The Cleaning Clan* is a premier cleaning services provider.
                    Since 2017, we have delivered exceptional cleaning solutions tailored to residential and commercial clients.
                    Registered in 2020, we pride ourselves on quality, reliability, trust, and sustainability.
                </p>
                <div className="image-placeholder">Image Placeholder</div>
            </section>

            {/* Notable Projects Section */}
            <section className="projects-section">
                <h2>Notable Projects</h2>
                <ul>
                    <li>Presidential Cleaning, Naval Dockyard Limited (2024)</li>
                    <li>President Mohammadu Buhari's Fleet Inspection Ceremony (2023)</li>
                    <li>Vacation Home Cleaning for Presidential Convoy (2024)</li>
                    <li>Move-in Cleaning for LSDPC General Managers</li>
                    <li>Post-Construction Cleaning, The Ultramodern Federal High Court Complex, Bourdillon, Ikoyi</li>
                    <li>Post-Construction Cleaning, Iconic Towers, Victoria Island</li>
                    <li>Courtland Luxury Villa, Platinum, Lekki</li>
                    <li>Fleet & Vessels Inspection, Cleaning & Advisory</li>
                </ul>
                <div className="image-placeholder">Image Placeholder</div>
            </section>

            {/* Our Values Section */}
            <section className="values-section">
                <h2>Our Values</h2>
                <p>We are guided by the following principles:</p>
                <ul>
                    <li><strong>Quality Service:</strong> Excellence in every cleaning task</li>
                    <li><strong>Reliability:</strong> Timely and dependable service</li>
                    <li><strong>Trust:</strong> Confidentiality and respect for clients' property</li>
                    <li><strong>Sustainability:</strong> Eco-friendly products for a greener future</li>
                </ul>
                <div className="image-placeholder">Image Placeholder</div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-us-section">
                <h2>Why Choose Us</h2>
                <p>We stand out because of:</p>
                <ul>
                    <li><strong>Competitive Pricing:</strong> Affordable rates without compromising quality</li>
                    <li><strong>Flexible Scheduling:</strong> Convenient services that fit your timetable</li>
                    <li><strong>Fully Insured and Bonded:</strong> Trust and security guaranteed</li>
                    <li><strong>Excellent Customer Service:</strong> Client satisfaction is our top priority</li>
                    <li><strong>Referral-Driven Model:</strong> Earn trust through exceptional service</li>
                </ul>
                <div className="image-placeholder">Image Placeholder</div>
            </section>
        </div>
    );
};

export default About;
