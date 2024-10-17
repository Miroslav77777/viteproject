import './App.css';
import { HashRouter, Routes, Route, Outlet} from "react-router-dom";
import React, { useState } from 'react';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import PriceList from './pages/PriceList/PriceList';

function App() {
  const [showMain, setShowMain] = useState(true);

  return (
    <HashRouter> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path='/pricelist' element={<PriceList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
