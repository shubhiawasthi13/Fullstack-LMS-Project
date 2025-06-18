import { useState } from "react";
import "./App.css";
import Login from "./pages/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Hero from "./pages/student/hero";
import Courses from "./pages/student/courses";

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
            <Courses/>
          </>
        ),
      },
      {
        path:"login",
        element:<Login/>
      }
    ],
  },
]);

function App() {
  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  );
}

export default App;
