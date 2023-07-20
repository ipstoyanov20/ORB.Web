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
import { Resumes } from "./pages/EditResumesPage";
import Sidebar from "./components/Sidebar";
import { DashBoard } from "./pages/DashBoard";
import { Info } from "./pages/Info";
import { MyResumes } from "./pages/MyResumes";
import AuthGuardWhenLogin from "./components/AuthGuardWhenLogin";
import AuthGuardWhenLogout from "./components/AuthGuardWhenLogout";
import Templates from "./pages/templates";


const App = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route element={<AuthGuardWhenLogout />}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route element={<NavMenu />}>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Route>
        </Route>
        <Route element={<AuthGuardWhenLogin />}>
          <Route path="panel" element={<Sidebar />}>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="settings" element={<Info />} />
            <Route path="templates" element={<Templates/>} />
            <Route path="myresumes" element={<MyResumes />} />
            <Route path="resumes/:id" element={<Resumes />} />
          </Route>
        </Route>
    </>
  )
);
export default App