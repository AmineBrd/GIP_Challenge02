import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Page from "./Pages/CheckoutPage.tsx"; 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Products" exact element={<Products />} />
        <Route path="/Cart" exact element={<Page />} />
      </Routes>
    </Router>
  );
};

export default App;
