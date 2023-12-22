import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import System from "../pages/Desingsystem";
import Menu from "../pages/Menu";
import { createClient } from "@supabase/supabase-js";
import Html from "../pages/Html";
import Css from "../pages/Css";
import Javascript from "../pages/Javascript";
import Accessibility from "../pages/Accessibility";
export  const supabase = createClient("https://yvwzfokjdgcyvyikzzen.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2d3pmb2tqZGdjeXZ5aWt6emVuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDkxODk5OSwiZXhwIjoyMDE2NDk0OTk5fQ.0E4nVMsEougVoDWcHppePn7ehMZPv6WgMA4pVmobZd4")
export const router = createBrowserRouter([
    {
        path:"/",
        element:<Menu/>
    },
    {
        path:"/system",
        element: <System/>
    },
    {
        path:"/menü",
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
        path:"/Js",
        element:<Javascript/>
    },
    {
        path:"/Accessibility",
        element:<Accessibility/>
    }
   
])


