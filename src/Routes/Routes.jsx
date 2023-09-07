import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Courses from "../component/Courses/Courses";
import Community from "../Pages/Community/Community";
import QnaSection from "../component/QnaSection/QnaSection";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import About from "../component/About/About";
import Question from "../Pages/Question/Question";
import QuestionAnswer from "../Pages/Question/QuestionAnswer";
import Payment from "../component/Payment/Payment";
import Dashboard from "../Layouts/Dashboard";
import AdminProfile from "../Dashboard/AdminProfile/AdminProfile";
import UserProfile from "../Dashboard/UserProfile/UserProfile";
import CourseDetails from "../component/CourseDetails/CourseDetails";
import Theme from "../component/Theme/Theme";
import PrivateRoute from "./PrivateRoute";
import JoinGroup from "../Pages/Community/joinGroup/joinGroup";

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
        path: "/theme",
        element: <Theme />,
      },
      {
        path: "/community",
        element: <Community></Community>,
      },
      {
        path: "/community/group/:id",
        element: <JoinGroup></JoinGroup>,
      },
      {
        path: "/qna",
        element: (
          <PrivateRoute>
            <QnaSection />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "questions",
        element: <Question></Question>,
      },
      {
        path: "/questionAnswer/:id",
        element: <QuestionAnswer />,
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "courseDetails/:id",
        element: <CourseDetails />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "admin",
        element: <AdminProfile></AdminProfile>,
      },
    ],
  },
]);

export default router;
