import { createBrowserRouter } from "react-router-dom";
import Menu from "../pages/Menu";
import Html from "../pages/Html";
import Css from "../pages/Css";
import Javascript from "../pages/Javascript";
import Accessibility from "../pages/Accessibility";
import Scoremenu from "../pages/Scoremenu";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Menu/>
    },
    {
        path:"/html",
        element:<Html/>
    },
    {
        path:"/css",
        element:<Css/>

    },
    {
        path:"/Javascript",
        element:<Javascript/>
    },
    {
        path:"/Accessibility",
        element:<Accessibility/>
    },
    {
        path:"/scoremenu",
        element:<Scoremenu/>
    },
    {
        path:"/girisyap",
        element: <Login/>
    },
    {
        path:"/uyeol",
        element:<Signup/>
    }
])


