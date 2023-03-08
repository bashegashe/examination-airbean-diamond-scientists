import { createBrowserRouter } from "react-router-dom";
import Status from "./views/Status/Status";
import Profile from "./views/Profile/Profile";

import About from "./views/About/About";
import App from "./App";
import Menu from "./views/Menu/Menu";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/status',
        element: <Status />
    },
    
    {
        path: '/profile',
        element: <Profile />
    },
    {

        path: '/about',
        element: <About />
    },
    {
        path: '/menu',
        element: <Menu />
    }
]);

export default router;