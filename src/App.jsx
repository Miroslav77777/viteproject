import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home/Home"; // Import correctly
import AboutUs from "./pages/AboutUs/AboutUs";
import PriceList from "./pages/PriceList/PriceList";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <BrowserRouter basename="/viteproject">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricelist" element={<PriceList />} />
        </Routes>
      </BrowserRouter>
    </Router>
  );
}

export default App;