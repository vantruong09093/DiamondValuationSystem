
import { Outlet } from 'react-router-dom';
import Sidebar from "../Views/dashboard/scenes/global/Sidebar"
import Topbar from "../Views/dashboard/scenes/global/Topbar";

const DashboardLayout = ({ isSidebar, setIsSidebar }) => {
  return (
    <div className="app">
      <Sidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
