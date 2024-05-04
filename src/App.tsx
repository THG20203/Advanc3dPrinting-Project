import React from "react";
/* General styles */
import "./assets/styles/General/typography.scss";
import "./assets/styles/General/utilities.scss";
/* Router and react-router-dom */
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/Error";
import RootLayout from "./pages/Root";
import HomePage from "./pages/mainPages/Home";
import AboutPage from "./pages/mainPages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
