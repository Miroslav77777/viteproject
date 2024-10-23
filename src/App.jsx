import { HashRouter, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home/Home"; 
import AboutUs from "./pages/AboutUs/AboutUs";
import PriceList from "./pages/PriceList/PriceList";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/pricelist" element={<PriceList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;