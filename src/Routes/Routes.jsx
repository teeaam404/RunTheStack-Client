import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Courses from "../component/Courses/Courses";
import QnaSection from "../component/QnaSection/QnaSection";

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
        path: "/qna",
        element: <QnaSection />,
      },
    ],
  },
]);

export default router;
