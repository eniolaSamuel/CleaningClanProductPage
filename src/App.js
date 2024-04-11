import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./views/NavBar";
import HomePage from "./views/HomePage";
import {ContactUs} from "./views/Contact";
import ProductLandingPage from "./views/ProductLandingPage";


function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductLandingPage/>} />
            <Route path="/navigation-bar" element={<NavBar />} />
            <Route path="/cpontact" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
