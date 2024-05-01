import React from "react";
import "./assets/styles/typography.scss";
/* Router and react-router-dom */
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/Error";
import RootLayout from "./pages/Root";
import HomePage from "./pages/mainPages/Home";
import LatestPage from "./pages/mainPages/Latest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "latest", element: <LatestPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
