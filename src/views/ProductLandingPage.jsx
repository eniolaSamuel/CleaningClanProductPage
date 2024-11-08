import NavBar from "./NavBar";
import {ContactUs} from "./Contact";
import HomePage from "./HomePage";
import ServicePage from "./ServicePage";
import About from "./About";
import Value from "./Value";

const ProductLandingPage =() =>{
    return(
        <div>
            <NavBar />
            <HomePage/>
            <ServicePage />
            <About />
            <Value />
            <ContactUs />
        </div>
    )
}

export default ProductLandingPage;