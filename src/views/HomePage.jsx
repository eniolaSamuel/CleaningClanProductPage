import "../styles/HomePage.css"
import CLEANINGPERSONS from "../assets/svg/cleaning-personel.svg"
import NavBar from "./NavBar";
import {ContactUs} from "./Contact";

const HomePage = () =>{
    return(
        <div className="home-page-main-frame">
            <div className="text-frame"></div>
            <div className="side-image">
                <img src={CLEANINGPERSONS} alt={CLEANINGPERSONS}/>
            </div>

        </div>
    )
}

export default HomePage;