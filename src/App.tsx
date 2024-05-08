import React from "react";
/* General styles */
import "./assets/styles/General/typography.scss";
import "./assets/styles/General/utilities.scss";
/* Router and react-router-dom */
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* General Routes / Pages */
import ErrorPage from "./pages/Error";
import RootLayout from "./pages/Root";

/* Main Pages */
import HomePage from "./pages/mainPages/Home";
import AboutPage from "./pages/mainPages/About";
import ThreeDPrintingPage from "./pages/mainPages/ThreeDPrinting";
import ContactPage from "./pages/mainPages/Contact";

/* Secondary Pages */
// Secondary Manufacturing
import DesignProcessPage from "./pages/secondaryPages/DesignProcess";
import ManufacturingProcessPage from "./pages/secondaryPages/ManufacturingProcess";
// Secondary Design Support
import GalleryPage from "./pages/secondaryPages/Gallery";
// Secondary Manufacturing

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
      { path: "gallery", element: <GalleryPage /> },
      { path: "threeDPrinting", element: <ThreeDPrintingPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
