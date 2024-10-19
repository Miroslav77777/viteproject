import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"; // Import correctly
import AboutUs from "./pages/AboutUs/AboutUs";
import PriceList from "./pages/PriceList/PriceList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/pricelist" element={<PriceList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
