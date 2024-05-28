import NavBar from "./NavBar";
import {ContactUs} from "./Contact";
import HomePage from "./HomePage";
import ServicePage from "./ServicePage";

const ProductLandingPage =() =>{
    return(
        <div>
            <NavBar />
            <HomePage/>
            <ServicePage />
            <ContactUs />

        </div>
    )
}

export default ProductLandingPage;