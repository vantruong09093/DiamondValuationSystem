import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { useState } from "react";

import DashboardRoutes from "../src/Routes/Dashboard";

function App() {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/dashboard/*" element={<DashboardRoutes isSidebar={isSidebar} setIsSidebar={setIsSidebar} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
