import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import NavMenu from './components/NavMenu'
import React from 'react';
import './App.css';

function App() {
 
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavMenu />}>
                    <Route path="signup" element={<Signup />} />
                    <Route path="signin" element={<Signin />} />
                </Route>
            </Routes>
      </BrowserRouter>
  );

export default App;