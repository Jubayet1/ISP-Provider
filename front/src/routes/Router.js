import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Plans from "../pages/Plans/Plans";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import LogIn from "../pages/LogIn/LogIn";
import Signup from "../pages/Signup/Signup";
import NotFound from "../pages/NotFound/NotFound";
import BdAddress from "../pages/Contact/BDAddress";
import UsAddress from "../pages/Contact/USAddress";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/plans',
                element: <Plans />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />,
                children: [
                    {
                        path: 'bd-address',
                        element: <BdAddress />
                    },
                    {
                        path: 'us-address',
                        element: <UsAddress />
                    }
                ]
            },
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/plans:id',
                element: <Home />
            },
            {
                path: '/*',
                element: <NotFound />
            },
        ]
    }
])

export default router