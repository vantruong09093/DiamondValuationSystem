import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
function Blogs() {
  const [menu, setMenu] = useState("blogs");
  return (
    <>
      <div>
        <Navbar menu={menu} setMenu={setMenu} />
      </div>
    </>
  );
}

export default Blogs;
