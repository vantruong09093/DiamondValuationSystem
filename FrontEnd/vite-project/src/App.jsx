
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext'
import Login from './Views/Login'
function App() {


  return (
    <Router>
      <Routes>
        <AuthProvider>
          <Route path="/" element={<Login />} />
        </AuthProvider>
      </Routes>
    </Router>
  )
}

export default App
