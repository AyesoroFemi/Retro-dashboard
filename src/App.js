import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Dashboard, Product, Blog, Transaction, Reports, Users, Investment, Settings } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/analysis" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
