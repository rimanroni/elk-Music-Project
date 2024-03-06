 import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root/Root";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import Home from "../pages/Home/Home";
 
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
]);

 export default router;