import { createBrowserRouter } from "react-router-dom";
import Nav from "./views/Nav/Nav";
import Profile from "./views/Profile/Profile";

import About from "./views/About/About";
import App from "./App";
import Menu from "./views/Menu/Menu";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },    {
        path: '/profile',
        element: <Profile/>
    },
    {
        path: '/nav',
        element: <Nav/>
    }, {
        path: '/about',
        element: <About/>
    },
    {
        path: '/menu',
        element: <Menu />
    }
]);

export default router;
