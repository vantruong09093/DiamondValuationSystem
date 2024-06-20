import { Outlet } from 'react-router-dom';
import Sidebar from "../../dashboard/scenes/global/Sidebar";
import Topbar from "../../dashboard/scenes/global/Topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import styles from "../../../index.module.css";
const DashboardLayout = ({ isSidebar, setIsSidebar }) => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={styles.app}>
          <Sidebar isSidebar={isSidebar} />
          <main className={styles.content}>
            <Topbar setIsSidebar={setIsSidebar} />
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default DashboardLayout;
