/* <Outlet /> for rendering nested route components. 
It is a placeholder.
Depending on what link the user clicks on your website, <Outlet /> 
changes to show the appropriate page. For example, if someone clicks 
on a link to go to the home page, <Outlet /> will show the home page. */

import { Outlet } from "react-router-dom";
import FirstNavbar from "../components/Navigation/FirstNavbar/FirstNavbar";
import MainNavbar from "../components/Navigation/MainNavbar/MainNavbar";
import FooterSpacer from "../components/Footer/FooterSpacer";
import Footer from "../components/Footer/Footer";
import TristanFooter from "../components/Footer/TristanFooter";
import "../assets/styles/General/root.scss";

const RootLayout = () => {
  return (
    <>
      <div className="nav__root">
        <FirstNavbar />
        <MainNavbar />
      </div>
      <main>
        <Outlet />
      </main>
      <div className="footer__root">
        <FooterSpacer />
        <Footer />
        <TristanFooter />
      </div>
    </>
  );
};

export default RootLayout;
