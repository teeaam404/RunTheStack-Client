import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Courses from "../component/Courses/Courses";
import Qustion from "../Pages/Qustion/Qustion";
import QuestionAnswer from "../Pages/Qustion/QustionAnswer";
import Home from "../Pages/Home/Home";
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
        path:'/qustions',
        element: <Qustion />
      },
      {
        path:'/qustionAnswer/:id',
        element: <QuestionAnswer />
        
      },
      {
        path:'/qna',
        element: <QnaSection/>
        
      },
    ],
  },
]);

export default router;
