import { BrowserRouter, Routes, Route, Provider } from "react-router-dom";
import Home from "./pages/Home/Home"; // Import correctly
import AboutUs from "./pages/AboutUs/AboutUs";
import PriceList from "./pages/PriceList/PriceList";


function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter basename="/viteproject">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricelist" element={<PriceList />} />
        </Routes>
      </BrowserRouter>
      </Provider>
  );
}

export default App;