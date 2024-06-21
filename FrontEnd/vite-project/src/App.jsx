import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";

import DashboardRoutes from "../src/Routes/Dashboard";
import HomeRoutes from "../src/Routes/Home";
import Footer from "./Views/HomePage/components/Footer/Footer";
import PrivateRoute from "./Routes/PrivateRoute";
function App() {
  // private route later
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard/*" element={<DashboardRoutes />} />
          </Route>

          <Route path="/*" element={<HomeRoutes />} />
        </Routes>
      </AuthProvider>

      <Footer />
    </Router>
  );
}

export default App;
