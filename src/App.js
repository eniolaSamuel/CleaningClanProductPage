import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./views/NavBar";
import HomePage from "./views/HomePage";
import {ContactUs} from "./views/Contact";
import ProductLandingPage from "./views/ProductLandingPage";
import About from "./views/About";


function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductLandingPage/>} />
            <Route path="/navigation-bar" element={<NavBar />} />
            <Route path="/home-page" element={<HomePage/>} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/aboutUs" element={<About />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
