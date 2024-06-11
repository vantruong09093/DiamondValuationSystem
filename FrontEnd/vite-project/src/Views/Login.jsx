import { useState } from "react";
import "../CSS/Login.css"
import "../App.css"
import { FaUser, FaLock } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Login = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Sign In" ? (
            <div></div>
          ) : (
            <div className="input">
              <FaUser className="icon" />
              <input type="text" placeholder="username" />
            </div>
          )}
        </div>
        <div className="inputs">
          <div className="input">
            <HiOutlineMail className="icon" />
            <input type="email" placeholder="email" />
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <FaLock className="icon" />
            <input type="password" placeholder="password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Forgot password? <span>Click hear</span>
          </div>
        )}
        <div className="submit-container">
          <div
            className={action === "Sign In" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign In");
            }}
          >
            Sign In
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;