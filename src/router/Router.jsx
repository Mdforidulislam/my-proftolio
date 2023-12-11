import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Skills from "../Pages/Skills/Skills";
import Contact from "../Pages/Contact/Contact";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/projects',
                element:<Projects></Projects>
            },
            {
                path:'/skills',
                element:<Skills></Skills>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    }
])

export default Router;