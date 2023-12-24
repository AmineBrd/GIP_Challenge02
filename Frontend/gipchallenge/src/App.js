import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Products" exact element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;
