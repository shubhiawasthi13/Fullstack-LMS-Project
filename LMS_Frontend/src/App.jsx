import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Hero from "./pages/student/Hero";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/myLearning";
import Profile from "./pages/student/Profile";
import Sidebar from "./pages/admin/sidebar";
import Dashboard from "./pages/admin/dashboard";
import Coursetable from "./pages/admin/course/courseTable";
import AddCourse from "./pages/admin/course/addCourse";
import EditCourse from "./pages/admin/course/editCourse";
import CreateLecture from "./pages/admin/course/createLecture";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <Courses />
          </>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "my-learning",
        element: <MyLearning />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "admin",
        element: <Sidebar />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "course",
            element: <Coursetable />,
          },
          {
            path: "course/create",
            element: <AddCourse />,
          },
          {
            path: "course/:courseId",
            element: <EditCourse />,
          },
          {
            path: "course/:courseId/lectures",
            element: <CreateLecture />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
