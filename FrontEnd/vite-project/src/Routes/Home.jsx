import { Routes, Route } from 'react-router-dom';
import Home from "../Views/HomePage/components/Home/Home";
import Layout from "../Views/HomePage/components/Layout/Layout";
import Search from "../Views/HomePage/components/Search/Search";
import Prices from "../Views/HomePage/components/Prices/Prices";
import Blogs from "../Views/HomePage/components/Blogs/Blogs";
import Calculate from "../Views/HomePage/components/Calculate/Calculate";
import DiamondCheck from "../Views/HomePage/components/DiamondCheck/DiamondCheck";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="prices" element={<Prices />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="calculate" element={<Calculate />} />
        <Route path="diamondcheck" element={<DiamondCheck />} />
      </Route>
    </Routes>
  );
};

export default HomeRoutes;
