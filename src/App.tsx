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
import AuthGuardWhenLogin from "./components/AuthGuardWhenLogin";
import AuthGuardWhenLogout from "./components/AuthGuardWhenLogout";




const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthGuardWhenLogout />}>
        <Route path="/" element={<NavMenu />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Route>
      <Route element={<AuthGuardWhenLogin />}>
        <Route path="panel" element={<Sidebar />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="personal" element={<Info />} />
          <Route path="templates" element={<Templates />} />
          <Route path="myresumes" element={<MyResumes />} />
          <Route path="resumes" element={<Resumes />} />
        </Route>
      </Route>
    </>
  )
);
export default App