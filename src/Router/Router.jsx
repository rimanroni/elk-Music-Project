 import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root/Root";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import Home from "../pages/Home/Home";
import Navbar from "../pages/Navbar/Navbar";
import Sedule from "../components/Sedule";
import Content from "../components/Content";
 
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
   }
]);

 export default router;