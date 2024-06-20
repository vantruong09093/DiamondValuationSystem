import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { useState } from "react";
import DashboardRoutes from "../src/Routes/Dashboard";
import HomeRoutes from "../src/Routes/Home";
import Footer from "./Views/HomePage/components/Footer/Footer";

function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  // private route later
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/dashboard/*" element={<DashboardRoutes isSidebar={isSidebar} setIsSidebar={setIsSidebar} />} />
          <Route path="/*" element={<HomeRoutes />} />
          
        </Routes>
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
