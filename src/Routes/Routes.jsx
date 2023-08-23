
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Courses from "../component/Courses/Courses";
import Community from "../Pages/Community/Community";
import QnaSection from "../component/QnaSection/QnaSection";
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';

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
      }
        path: "/qna",
        element: <QnaSection />,
      }
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "Registration",
                element: <Registration></Registration>
            }
    ],
  },
]);


export default router;
