import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Ease from "../pages/Ease";
import Blog from "../pages/Blog";
import Explore from "../pages/Explore";
import Signup from "../auth/Signup";
import Signin from "../auth/Signin"
import NotFound from "../pages/NotFound"
import Contact from "../pages/Contact";
import Dashboard from "../clientSide/Dashboard";
import ClientHome from "../clientSide/page/ClientHome"
import Wallet from "../clientSide/page/Wallet"
import Order from "../clientSide/page/Order"
import Settings from "../clientSide/page/Settings"
import Profile from "../clientSide/page/Profile"

const router  = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>
  },
   {
    path : '/blog',
    element : <Blog></Blog>
  },
    {
    path : '/contact',
    element : <Contact></Contact>
  },
   {
    path : '/ease',
    element : <Ease></Ease>
  },
   {
    path : '/explore',
    element : <Explore></Explore>
  },
   {
    path : '/register',
    element : <Signup></Signup>
  },
  {
    path : '/categories',
    element : <Categories></Categories>
  },
   {
    path : '/login',
    element : <Signin></Signin>
  },
     {
    path : '/dashboard',
    element : <Dashboard></Dashboard>
  },
   {
    path : '/dashboard/client',
    element : <ClientHome></ClientHome>
  },
   {
    path : '/dashboard/wallet',
    element : <Wallet></Wallet>
  },
    {
    path : '/dashboard/order',
    element : <Order></Order>
  },
    {
    path : '/dashboard/setting',
    element : <Settings></Settings>
  },
    {
    path : '/dashboard/profile',
    element : <Profile></Profile>
  },
     {
    path : '*',
    element : <NotFound></NotFound>
  },

])
function Main() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default Main