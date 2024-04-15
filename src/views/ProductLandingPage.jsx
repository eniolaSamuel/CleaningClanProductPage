import NavBar from "./NavBar";
import {ContactUs} from "./Contact";
import HomePage from "./HomePage";

const ProductLandingPage =() =>{
    return(
        <div>
            <NavBar />
            <HomePage/>
            <ContactUs />
        </div>
    )
}

export default ProductLandingPage;