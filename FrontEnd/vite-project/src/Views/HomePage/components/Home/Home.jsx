import { useState } from "react";

import Headers from "../../components/Headers/Headers";
import Navbar from "../../components/Navbar/Navbar";
import DiamondComponent from "../../components/DiamondComponent/DiamondComponent";

function Home() {
  const [category, setCategory] = useState("All");
  const [menu, setMenu] = useState("home");
  const body = {
    backgroundColor: "#FAF6F0",
  };
  return (
    <>
      <div style={body}>
        <Navbar menu={menu} setMenu={setMenu} />
        <div>
          <Headers />
        </div>

        <DiamondComponent category={category} setCategory={setCategory} />
      </div>
    </>
  );
}

export default Home;
