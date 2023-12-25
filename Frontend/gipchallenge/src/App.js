import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import Page from "./Pages/CheckoutPage.tsx"; 
const App = () => {
  return (
    <>
    <Home/>
    <Router>
      <Routes>
        <Route path="/Home" exact element={<Home />} />
        <Route path="/Products" exact element={<Products />} />
        <Route path="/Cart" exact element={<Cart />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
