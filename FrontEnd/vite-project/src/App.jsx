import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { useState } from "react";
import Home from "./Views/HomePage/components/Home/Home";
import DashboardRoutes from "../src/Routes/Dashboard";
import Layout from "./Views/HomePage/components/Layout/Layout";
function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  // private route later
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/dashboard/*" element={<DashboardRoutes isSidebar={isSidebar} setIsSidebar={setIsSidebar} />} />
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
