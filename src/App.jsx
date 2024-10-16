import './App.css';
import { BrowserRouter, Routes, Route, Outlet, HashRouter} from "react-router-dom";
import React, { useState } from 'react';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import PriceList from './pages/PriceList/PriceList';

function App() {
  const [showMain, setShowMain] = useState(true);

  return (
    <HashRouter>
      <Routes>  
      <Route path="viteproject" element={<Home/>} /> 
      <Route path="/viteproject/about" element={<AboutUs/>} /> 
      <Route path='/viteproject/pricelist' element={<PriceList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
