import { createBrowserRouter } from "react-router-dom";
import Nav from "./views/Nav/Nav";
import Profile from "./views/Profile/Profile";

import App from "./App";

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
    },
]);

export default router;
