import { createBrowserRouter } from "react-router-dom";
import Status from "./views/Status/Status";

import App from "./App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },    {
        path: '/status',
        element: <Status />
    },
]);

export default router;
