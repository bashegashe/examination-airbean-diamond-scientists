import { createBrowserRouter } from "react-router-dom";
import Nav from "./views/Nav/Nav";
import App from "./App";
import Menu from "./views/Menu/Menu";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/nav',
        element: <Nav/>
    },
    {
        path: '/menu',
        element: <Menu />
    }
]);

export default router;
