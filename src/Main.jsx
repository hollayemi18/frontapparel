import React from 'react'
import Home from './componet/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';
import Explore from './componet/Explore'
import Blog from './componet/Blog';
import Ease from './componet/Ease'
import Contact from './componet/Contact'
import Confirm from './auth/Confirm'
import NotFound from './componet/NotFound';
import Dashboard from './clientApp/Dashboard';

function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/confirm" element={<Confirm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ease" element={<Ease />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main