import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import DashboardRoutes from "../src/Routes/Dashboard";
import HomeRoutes from "../src/Routes/Home";
import Footer from "./Views/HomePage/components/Footer/Footer";
import PrivateRoute from "./Routes/PrivateRoute";
import { NotifyProvider } from "./Provider/NotifyProvider";
import "react-toastify/dist/ReactToastify.css";
function App() {
  // private route later
  return (
    <Router>
      <AuthProvider>
        <NotifyProvider>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard/*" element={<DashboardRoutes />} />
            </Route>

            <Route path="/*" element={<HomeRoutes />} />
          </Routes>
        </NotifyProvider>
      </AuthProvider>

      <Footer />
    </Router>
  );
}

export default App;
