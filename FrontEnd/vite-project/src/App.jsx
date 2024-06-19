import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";

import DashboardLayout from "../src/Layout/DashboardLayout";
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
import { useState } from "react";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<DashboardLayout isSidebar={isSidebar} setIsSidebar={setIsSidebar} />}>
              <Route index element={<Dashboard />} />
              <Route path="team" element={<Team />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="invoices" element={<Invoices />} />
              <Route path="form" element={<Form />} />
              <Route path="bar" element={<Bar />} />
              <Route path="pie" element={<Pie />} />
              <Route path="line" element={<Line />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="geography" element={<Geography />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
