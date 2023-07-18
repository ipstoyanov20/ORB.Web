import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import NavMenu from './components/NavMenu'
import './App.css'
import { Resumes } from "./pages/CreateResumesPage";
import Sidebar from "./components/Sidebar";
import { DashBoard } from "./pages/DashBoard";
import { Info } from "./pages/Info";
import { Templates } from "./pages/Templates";
import { MyResumes } from "./pages/MyResumes";


const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<NavMenu />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="resumes" element={<Resumes />} />
      </Route>
      <Route path="panel" element={<Sidebar />}>
        <Route index element={<DashBoard />} />
        <Route path="personal" element={<Info />} />
        <Route path="templates" element={<Templates />} />
        <Route path="myresumes" element={<MyResumes />} />
      </Route>
    </>
  )
);
export default App