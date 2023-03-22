import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Ease from "../pages/Ease";
import Blog from "../pages/Blog";
import Explore from "../pages/Explore";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin"
import NotFound from "../pages/NotFound"
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
    path : '/login',
    element : <Signin></Signin>
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