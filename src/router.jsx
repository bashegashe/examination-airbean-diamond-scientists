import { createBrowserRouter } from "react-router-dom";
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
]);

export default router;
