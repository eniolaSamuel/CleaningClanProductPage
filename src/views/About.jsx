import "../styles/About.css";

const About = () => {
    return (
        <div className="about-page">

            <section className="about-section">
                <h2>About Us</h2>
                <p>
                    Located in Victoria Island, Lagos, Nigeria, *The Cleaning Clan* is a premier cleaning services provider.
                    Since 2017, we have delivered exceptional cleaning solutions tailored to residential and commercial clients.
                    Registered in 2020, we pride ourselves on quality, reliability, trust, and sustainability.
                </p>
                <div className="about-image-placeholder">
                    {/* Space for Image */}
                </div>
            </section>


            <section className="founders-section">
                <h2>Our Founders</h2>
                <p>
                    The Cleaning Clan was established by a team of visionary founders passionate about creating a cleaner, healthier
                    environment for businesses and homes in Nigeria. Their unwavering dedication to excellence and sustainability
                    continues to shape our operations today.
                </p>
                <div className="founders-image-placeholder">
                    {/* Space for Image */}
                </div>
            </section>


            <section className="culture-section">
                <h2>Our Culture</h2>
                <p>
                    At *The Cleaning Clan*, our culture is built on trust, innovation, and a strong commitment to our clients. We
                    foster a workplace environment that values teamwork and professional growth, ensuring our staff is motivated
                    to exceed expectations every day.
                </p>
                <div className="culture-image-placeholder">
                    {/* Space for Image */}
                </div>
            </section>

            {/* Our Product Section */}
            <section className="product-section">
                <h2>Our Product</h2>
                <p>
                    Our suite of services includes residential, commercial, and post-construction cleaning, tailored to meet
                    the highest standards. From eco-friendly products to cutting-edge techniques, we redefine excellence in
                    cleaning services.
                </p>
                <div className="product-image-placeholder">
                    {/* Space for Image */}
                </div>
            </section>
        </div>
    );
};

export default About;
