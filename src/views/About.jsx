import "../styles/About.css";
import AboutUs from "../assets/svg/aboutUs-Image.svg";

const About = () => {
    return (
        <div className="about-page">
            <section className="about-section" id="about-us">
                <h2>About Us</h2>
                <p>
                    Located in Victoria Island, Lagos, Nigeria, *The Cleaning Clan* is a premier cleaning services provider.
                    Since 2017, we have delivered exceptional cleaning solutions tailored to residential and commercial clients.
                    Registered in 2020, we pride ourselves on quality, reliability, trust, and sustainability.
                </p>
                <div className="image-placeholder"><img src={AboutUs}/></div>
            </section>

            {/* Notable Projects Section */}
            <section className="projects-section">
                <h2>Notable Projects</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <h3>Presidential Cleaning</h3>
                        <p>Naval Dockyard Limited (2024)</p>
                    </div>
                    <div className="project-card">
                        <h3>Presidential Convoy</h3>
                        <p>Vacation Home Cleaning (2024)</p>
                    </div>
                    <div className="project-card">
                        <h3>Fleet Inspection</h3>
                        <p>President Mohammadu Buhari (2023)</p>
                    </div>
                    <div className="project-card">
                        <h3>Post-Construction Cleaning</h3>
                        <p>Federal High Court Complex, Ikoyi</p>
                    </div>
                    <div className="project-card">
                        <h3>Luxury Villa Cleaning</h3>
                        <p>Courtland, Lekki</p>
                    </div>
                    <div className="project-card">
                        <h3>Fleet & Vessel Services</h3>
                        <p>Inspection, Cleaning & Advisory</p>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="values-section">
                <h2>Our Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <h3>Quality Service</h3>
                        <p>Excellence in every cleaning task.</p>
                    </div>
                    <div className="value-card">
                        <h3>Reliability</h3>
                        <p>Timely and dependable service.</p>
                    </div>
                    <div className="value-card">
                        <h3>Trust</h3>
                        <p>Confidentiality and respect for clients' property.</p>
                    </div>
                    <div className="value-card">
                        <h3>Sustainability</h3>
                        <p>Eco-friendly products for a greener future.</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="choose-us-section">
                <h2>Why Choose Us?</h2>
                <div className="values-grid">
                    <div className="value-card bubble">
                        <h3>Competitive Pricing</h3>
                        <p>Affordable rates without compromising on quality.</p>
                    </div>
                    <div className="value-card bubble">
                        <h3>Flexible Scheduling</h3>
                        <p>Service appointments tailored to your convenience.</p>
                    </div>
                    <div className="value-card bubble">
                        <h3>Fully Insured</h3>
                        <p>Enjoy peace of mind with our bonded and insured services.</p>
                    </div>
                    <div className="value-card bubble">
                        <h3>Referral-driven</h3>
                        <p>Our happy clients drive our growth through referrals.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
