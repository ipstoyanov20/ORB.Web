import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import NavMenu from './components/NavMenu'
import './App.css'

function App() {
 
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavMenu />}>
                    <Route index element={<Home />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="signin" element={<Signin />} />
                </Route>
            </Routes>
      </BrowserRouter>
  );
}
export default App