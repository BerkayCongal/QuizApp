import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import System from "../pages/Desingsystem";
import Anıl from "../pages/anıl";
export const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/system",
        element: <System/>
    },
    {
        path:"/anıl",
        element: <Anıl/>
    }
])