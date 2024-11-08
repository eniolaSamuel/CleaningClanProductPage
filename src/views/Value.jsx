import "../styles/Value.css"
import CarpetWasher from "../assets/svg/carpet-cleaner.svg"
const Value = () => {
    return(
        <div className="value-main-frame">
            <div className="value-text-frame">
                <hr/>
                <div className="value-text-details-frame">
                    <h1> OUR VALUES</h1>
                    <p> Quality Service: Excellence in every cleaning task</p>
                    <p> Reliability: Timely and dependable service</p>
                    <p> Trust: Confidentiality and respect for clients' property</p>
                    <p> Sustainability: Eco-friendly products for a greener future</p>
                </div>

                <hr/>
                <div className="value-text-details-frame">
                    <h1> OUR ADVANTAGE</h1>
                    <p> Competitive Pricing</p>
                    <p> Flexible Scheduling</p>
                    <p> Fully Insured and Bonded</p>
                    <p> Excellent Customer Service</p>
                    <p> Referral-driven Business Model</p>
                </div>
            </div>

            <div className="blob-plusCarpetWasher-background-designs">
                <div className="blob-background-designs-washer">
                    <img src={CarpetWasher} alt={CarpetWasher}/>
                </div>
            </div>
        </div>
    )
}

export default Value;