import NavBar from "./NavBar";
import {ContactUs} from "./Contact";
import HomePage from "./HomePage";
import ServicePage from "./ServicePage";
import About from "./About";
import Footer from "./Footer";

const ProductLandingPage =() =>{
    return(
        <div>
            <NavBar />
            <HomePage/>
            <ServicePage />
            <About />
            <ContactUs />
            <Footer/>
        </div>
    )
}

export default ProductLandingPage;