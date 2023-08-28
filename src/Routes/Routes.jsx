
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Courses from "../component/Courses/Courses";
import Community from "../Pages/Community/Community";
import QnaSection from "../component/QnaSection/QnaSection";
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import About from "../component/About/About";
import Question from "../Pages/Question/Question";
import QuestionAnswer from "../Pages/Question/QuestionAnswer";
import Dashboard from "../Layouts/Dashboard";
import UserProfile from "../Dashboard/UserProfile/UserProfile";
import AdminProfile from "../Dashboard/AdminProfile/AdminProfile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/courses",
                element: <Courses />,
            },
            {
                path: "/community",
                element: <Community></Community>
            },
            {
                path: "/qna",
                element: <QnaSection />,
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "registration",
                element: <Registration></Registration>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: 'questions',
                element: <Question></Question>
            },
            {
              path:'/questionAnswer/:id',
              element: <QuestionAnswer />
            }
        ],
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children:[
            {
                path: "profile",
                element: <UserProfile></UserProfile>
            },
            {
                path:"admin",
                element: <AdminProfile></AdminProfile>
            }
        ],
    }
]);


export default router;
