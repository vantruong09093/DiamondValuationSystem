import { useState, useRef } from "react";
import "../CSS/Login.css";
import "../App.css";
import { FaLock } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useAuth } from "../Context/AuthContext";

function Login() {
  const [action, setAction] = useState("Sign Up");
  const [error, setError] = useState("");
  const emailRef = useRef();
  const { signIn, signUp, currentUser } = useAuth();
  const passwordRef = useRef();

  const handleSignIn_Email = async () => {
    try {
      setError("");
      await signIn(emailRef.current.value, passwordRef.current.value);
      console.log(currentUser)
    } catch (error) {
      setError(error.message);
      console.log(error.message); 
      window.alert("Invalid email or password");
    }
  };

  const handleSignUp_Email = async () => {
    try {
      setError("");
      await signUp(emailRef.current.value, passwordRef.current.value);
      
    } catch (error) {
      setError(error.message);
      console.log(error.message); // testing
    }
  };

  const handleSubmit = () => {
    if (action === "Sign In") {
      handleSignIn_Email();
    } else {
      handleSignUp_Email();
    }
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <HiOutlineMail className="icon" />
            <input type="email" placeholder="email" ref={emailRef} />
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <FaLock className="icon" />
            <input type="password" placeholder="password" ref={passwordRef} />
          </div>
        </div>
        {action === "Sign In" && (
          <div className="forgot-password">
            Forgot password? <span>Click here</span>
          </div>
        )}
        <div className="submit-container">
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Switch to Sign Up
          </div>
          <div
            className={action === "Sign In" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign In")}
          >
            Switch to Sign In
          </div>
        </div>
        <div className="submit-container">
          <div className="submit" onClick={handleSubmit}>
            {action}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
