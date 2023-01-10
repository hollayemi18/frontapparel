import React from 'react'
import Home from './componet/Home'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Explore from './componet/Explore'
import Blog from './componet/Blog';
import Ease from './componet/Ease'
import Contact from './componet/Contact'
import Confirm from './auth/Confirm'
import NotFound from './componet/NotFound';
import Dashboard from './auth/Dashboard';
import Login from './auth/Login';
import Register from './auth/Register';


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
    path : '/contact',
    element : <Contact></Contact>
  },
   {
    path : '/register',
    element : <Register></Register>
  },
   {
    path : '/confirm',
    element : <Confirm></Confirm>
  },
   {
    path : '/dashboard',
    element : <Dashboard></Dashboard>
  },
   {
    path : '/login',
    element : <Login></Login>
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