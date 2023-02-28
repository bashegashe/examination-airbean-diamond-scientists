import { createBrowserRouter } from "react-router-dom";
import Nav from "./views/Nav/Nav";
import About from "./views/About/About";

import App from "./App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/nav',
        element: <Nav/>
    }, {
        path: '/about',
        element: <About/>
    },
]);

export default router;
