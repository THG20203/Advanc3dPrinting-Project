import React from "react";
/* General styles */
import "./assets/styles/General/typography.scss";
import "./assets/styles/General/utilities.scss";
/* Router and react-router-dom */
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/Error";
import RootLayout from "./pages/Root";
import HomePage from "./pages/mainPages/Home";
import DesignProcessPage from "./pages/mainPages/DesignProcess";
import ManufacturingProcessPage from "./pages/mainPages/ManufacturingProcess";
import AboutPage from "./pages/mainPages/About";
import ThreeDPrintingPage from "./pages/mainPages/ThreeDPrinting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "designProcess", element: <DesignProcessPage /> },
      { path: "manufacturingProcess", element: <ManufacturingProcessPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "ThreeDPrinting", element: <ThreeDPrintingPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
