import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Login from "./Views/Login";
import Topbar from "../src/Views/dashboard/scenes/global/Topbar";
import Sidebar from "../src/Views/dashboard/scenes/global/Sidebar";
import Dashboard from "../src/Views/dashboard/scenes/dashboard";
import Team from "../src/Views/dashboard/scenes/team";
import Invoices from "../src/Views/dashboard/scenes/invoices";
import Contacts from "../src/Views/dashboard/scenes/contacts";
import Bar from "../src/Views/dashboard/scenes/bar";
import Form from "../src/Views/dashboard/scenes/form";
import Line from "../src/Views/dashboard/scenes/line";
import Pie from "../src/Views/dashboard/scenes/pie";
import FAQ from "../src/Views/dashboard/scenes/faq";
import Geography from "../src/Views/dashboard/scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../src/Views/dashboard/theme";
import Calendar from "../src/Views/dashboard/scenes/calendar/calendar";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
