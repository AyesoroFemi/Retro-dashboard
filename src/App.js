import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Dashboard, Product } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
