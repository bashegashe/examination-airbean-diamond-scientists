import { createBrowserRouter } from "react-router-dom";
import Nav from "./views/Nav/Nav";
import App from "./App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/nav',
        element: <Nav/>
    },
]);

export default router;
