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
import ProcessPage from "./pages/mainPages/Process";
import AboutPage from "./pages/mainPages/About";
import DesignSupportPage from "./pages/mainPages/DesignSupport";
import ManufacturingPage from "./pages/mainPages/DesignSupport";
import MaterialSelectionPage from "./pages/mainPages/DesignSupport";
import ThreeDPrintingPage from "./pages/mainPages/ThreeDPrinting";
import ContactPage from "./pages/mainPages/Contact";

/* Secondary Pages */
// Secondary Manufacturing
import DesignProcessPage from "./pages/secondaryPages/Process/DesignProcess";
import ManufacturingProcessPage from "./pages/secondaryPages/Process/ManufacturingProcess";
// Secondary Design Support
import DesignAdvicePage from "./pages/secondaryPages/DesignSupport/DesignAdvice";
import GalleryPage from "./pages/secondaryPages/DesignSupport/Gallery";
import PrototypeDesignPage from "./pages/secondaryPages/DesignSupport/PrototypeDesign";
import ReverseEngineeringPage from "./pages/secondaryPages/DesignSupport/ReverseEngineering";
// Secondary Manufacturing
import OnDemandPage from "./pages/secondaryPages/Manufacturing/OnDemand";
import PrototypeManufacturingPage from "./pages/secondaryPages/Manufacturing/PrototypeManufacturing";
// Material Selection
import StandardAestheticPage from "./pages/secondaryPages/MaterialSelection/StandardAesthetic";
import EngineeringPage from "./pages/secondaryPages/MaterialSelection/Engineering";
import FlexiblePage from "./pages/secondaryPages/MaterialSelection/Flexible";
import FiberReinforcedPage from "./pages/secondaryPages/MaterialSelection/FiberReinforced";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "process",
        element: <ProcessPage />,
        children: [
          { path: "design-process", element: <DesignProcessPage /> },
          {
            path: "manufacturing-process",
            element: <ManufacturingProcessPage />,
          },
        ],
      },
      { path: "about", element: <AboutPage /> },
      {
        path: "design-support",
        element: <DesignSupportPage />,
        children: [
          { path: "design-advice", element: <DesignAdvicePage /> },
          { path: "gallery", element: <GalleryPage /> },
          { path: "prototype-design", element: <PrototypeDesignPage /> },
          { path: "reverse-engineering", element: <ReverseEngineeringPage /> },
        ],
      },
      {
        path: "manufacturing",
        element: <ManufacturingPage />,
        children: [
          { path: "ondemand", element: <OnDemandPage /> },
          {
            path: "prototype-manufacturing",
            element: <PrototypeManufacturingPage />,
          },
        ],
      },
      {
        path: "material-selection",
        element: <MaterialSelectionPage />,
        children: [
          { path: "standard-aesthetic", element: <StandardAestheticPage /> },
          { path: "engineering", element: <EngineeringPage /> },
          { path: "flexible", element: <FlexiblePage /> },
          { path: "fiber-reinforced", element: <FiberReinforcedPage /> },
        ],
      },
      { path: "threeDPrinting", element: <ThreeDPrintingPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
