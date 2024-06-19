import{ useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import CalculateContent from "../CalculateContext/CalculateContent";
function Calculate() {
  const [menu, setMenu] = useState("calculate");
  const body = {
    backgroundColor: "#FAF6F0",
  };
  return (
    <>
      <div style={body}>
        <div>
          <Navbar menu={menu} setMenu={setMenu} />
        </div>
        <div>
          <CalculateContent />
        </div>
      </div>
    </>
  );
}
export default Calculate;
