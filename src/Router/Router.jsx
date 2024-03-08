 import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root/Root";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import Home from "../pages/Home/Home";
import Navbar from "../pages/Navbar/Navbar";
import Sedule from "../components/Sedule";
import Content from "../components/Content";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Bologs from "../components/Bologs";
import About from "../components/About";
 
const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root/>,
    children:[
       {
        path: '/',
        element:<Home/>
       }
    ],
    errorElement:<ErrorPages></ErrorPages>
  },
  {
    path:'/SCHEDULE',
    element: <Sedule/>
   },
   {
    path:'/event',
    element:<Content/>
   }, 
   {
    path:'/login',
    element:<Login/>
   },
   {
    path:'/register',
    element:<Register/>
   },
   {
    path:"/blog",
    element:<Bologs/>
   },
   {
    path:"/about",
    element:<About/>
   }
]);

 export default router;