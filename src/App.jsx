import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"; // Import correctly
import AboutUs from "./pages/AboutUs/AboutUs";
import PriceList from "./pages/PriceList/PriceList";
import Catalog from "./pages/Catalog/Catalog";
import React from "react";
import Salon from "./pages/Salon/Salon";
import Company from "./pages/Company/Company";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/pricelist" element={<PriceList />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/salon" element={<Salon />} />
        <Route path="/aboutcomp" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
