import NavBar from "./NavBar";
import {ContactUs} from "./Contact";
import HomePage from "./HomePage";
import ServicePage from "./ServicePage";
import About from "./About";

const ProductLandingPage =() =>{
    return(
        <div>
            <NavBar />
            <HomePage/>
            <ServicePage />
            <About />
            <ContactUs />
        </div>
    )
}

export default ProductLandingPage;