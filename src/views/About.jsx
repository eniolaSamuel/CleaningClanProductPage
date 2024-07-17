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
                </div>

            </div>
        </div>
    )
}

export default About;