import "../styles/About.css"
import Machine from "../assets/svg/cleaning-machine.svg"
const About = () => {
    return(
        <div className="about-main-frame">
            <div className="blob-plusMachine-background-designs">
                <div className="blob-background-designs">
                    <img src={Machine} alt={Machine}/>
                </div>
            </div>
            <div className="about-text-frame">
                <hr/>
                <div className="about-text-details-frame">
                    <h1> ABOUT US</h1>
                    <p> Company Name: The Cleaning Clan, Lagos</p>
                    <p> Location: Victoria Island, Lagos, Nigeria</p>
                    <p> Industry: Environmental, Hygiene & Cleaning Services</p>
                    <p> The Cleaning Clan is a premier cleaning services provider in Lagos, Nigeria. Since 2017 (Registered in 2020).
                        our team of skilled professionals has delivered exceptional cleaning solutions to residential and commercial clients.
                        We pride ourselves on excellence, reliability, and sustainability.</p>
                </div>

            </div>
        </div>
    )
}

export default About;