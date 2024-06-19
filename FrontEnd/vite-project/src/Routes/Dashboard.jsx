import { Routes, Route } from 'react-router-dom';
import DashboardLayout from "../Views/dashboard/Layout/DashboardLayout";
import Dashboard from "../Views/dashboard/scenes/dashboard";
import Team from "../Views/dashboard/scenes/team";
import Invoices from "../Views/dashboard/scenes/invoices";
import Contacts from "../Views/dashboard/scenes/contacts";
import Bar from "../Views/dashboard/scenes/bar";
import Form from "../Views/dashboard/scenes/form";
import Line from "../Views/dashboard/scenes/line";
import Pie from "../Views/dashboard/scenes/pie";
import FAQ from "../Views/dashboard/scenes/faq";
import Geography from "../Views/dashboard/scenes/geography";
import Calendar from "../Views/dashboard/scenes/calendar/calendar";

const DashboardRoutes = ({ isSidebar, setIsSidebar }) => {
  return (
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
  );
};

export default DashboardRoutes;
