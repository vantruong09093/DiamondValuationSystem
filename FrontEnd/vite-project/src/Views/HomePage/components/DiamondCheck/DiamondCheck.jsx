import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import CertificateComponent from "../../components/CertificateComponent/CertificateComponent";
import Footer from "../../components/Footer/Footer";
function DiamondCheck() {
  const [menu, setMenu] = useState("diamondcheck");
  const body = {
    backgroundColor: "#FAF6F0",
  };
  return (
    <>
      <div style={body}>
        <Navbar menu={menu} setMenu={setMenu} />
      </div>
      <div style={body}>
        <CertificateComponent />
      </div>
    </>
  );
}

export default DiamondCheck;
