import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: "login",
                element: <Login/>
            }
        ]
    }
])

export default router