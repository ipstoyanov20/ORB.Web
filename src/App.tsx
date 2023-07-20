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
import { Template0 } from "./pages/Template0";
import { Template1 } from "./pages/Template1";
import { Template2 } from "./pages/Template2";
import { MyResumes } from "./pages/MyResumes";
import AuthGuardWhenLogin from "./components/AuthGuardWhenLogin";
import AuthGuardWhenLogout from "./components/AuthGuardWhenLogout";




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
          <Route path="template0' element={<Template0 />} />
          <Route path='template1' element={<Template1 />} />
          <Route path='template2" element={<Template2 />} />
          <Route path="myresumes" element={<MyResumes />} />
          <Route path="resumes/:id" element={<Resumes />} />
        </Route>
      </Route>
    </>
  )
);
export default App