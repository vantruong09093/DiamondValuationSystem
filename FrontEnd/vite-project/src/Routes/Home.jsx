// src/Routes/HomeRoutes.js
import { Routes, Route } from "react-router-dom";
import Home from "../Views/HomePage/components/Home/Home";
import Education from "../Views/HomePage/components/Education/Education";
import Blogs from "../Views/HomePage/components/Blogs/Blogs";
import Calculate from "../Views/HomePage/components/Calculate/Calculate";
import DiamondCheck from "../Views/HomePage/components/DiamondCheck/DiamondCheck";
import { Outlet } from "react-router-dom";
import styles from "../home.module.css";
import CalculateContent from "../Views/HomePage/components/CalculateContext/CalculateContent1";
import Services from "../Views/HomePage/components/Services/Services";
import OverViewForService from "../Views/HomePage/components/Overview/OverviewForService";
import OverviewForEducation from "../Views/HomePage/components/Overview/OverviewForEducation";
import OverviewForValuation from "../Views/HomePage/components/Overview/OverviewForValuation";
import ServiceForLabDiamond from "../Views/HomePage/components/ServiceContent/ServiceForLabDiamond";
import OverviewForGIACertificateCheck from "../Views/HomePage/components/Overview/OverviewForCheck";
import Layout from "../Views/HomePage/components/Layout/Layout";
const HomeLayout = () => {
  return (
    <div className={styles.app}>
      <Outlet />
    </div>
  );
};
const HomeRoutes = () => {
  return (
    <Routes>
    
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="education" element={<Education />} />
        <Route path="calculate" element={<CalculateContent />} />
        <Route path="overviewcheck" element={<OverviewForGIACertificateCheck />} />
        <Route path="overviewedu" element={<OverviewForEducation />} />
        <Route path="overviewser" element={<OverViewForService />} />
        <Route path="overviewval" element={<OverviewForValuation />} />
        <Route path="services" element={<Services />} />
        <Route path="serviceslab" element={<ServiceForLabDiamond />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="calculate" element={<Calculate />} />
        <Route path="diamondcheck" element={<DiamondCheck />} />
      
    </Routes>
  );
};

export default HomeRoutes;
