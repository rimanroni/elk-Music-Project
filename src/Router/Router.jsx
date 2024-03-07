 import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root/Root";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import Home from "../pages/Home/Home";
import Navbar from "../pages/Navbar/Navbar";
 
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
    element:<div>
        <Navbar/>
        <h1>hello </h1>
    </div>
  }
]);

 export default router;