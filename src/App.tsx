import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import NavMenu from './components/NavMenu'
import './App.css'

function App() {
 
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavMenu />}>
                    <Route index element={<Home />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
      </BrowserRouter>
  );
}
export default App