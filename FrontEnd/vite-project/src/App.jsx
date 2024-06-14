import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Login from "./Views/Login";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
