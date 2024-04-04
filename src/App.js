import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./views/NavBar";


function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/navigation-bar" element={<NavBar />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
