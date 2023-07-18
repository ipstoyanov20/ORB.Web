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
import { Template0 } from "./pages/Template0";
import { Template1 } from "./pages/Template1";
import { MyResumes } from "./pages/MyResumes";


const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<NavMenu />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="resumes" element={<Resumes />} />
        <Route path="panel" element={<Sidebar />}>
          <Route index element={<DashBoard />} />
          <Route path='personal' element={<Info />} />
          <Route path='template0' element={<Template0 />} />
          <Route path='template1' element={<Template1 />} />
          <Route path='myresumes' element={<MyResumes />} />
        </Route>
      </Route>
    </>
  )
);
export default App