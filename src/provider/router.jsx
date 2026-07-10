import { createBrowserRouter, Navigate } from "react-router";
import App from "../component/App";
import Main from "../component/Main";
import Contact from "../component/Contact";

const router = createBrowserRouter([
    {path: '/', element: <App />, children: [
        {path: '/', element: <Navigate to="/main" />},
        {path: 'main', element: <Main />},
        {path: 'cocktail', element: <Main />, children: [
            {path: ':id', element: <Main />}
        ]},
        {path: 'contact', element: <Contact />},
        {path: '*', element: <Error />},
    ]}
])

export default router