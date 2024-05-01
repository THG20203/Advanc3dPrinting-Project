/* <Outlet /> for rendering nested route components. 
It is a placeholder.
Depending on what link the user clicks on your website, <Outlet /> 
changes to show the appropriate page. For example, if someone clicks 
on a link to go to the home page, <Outlet /> will show the home page. */

import { Outlet, useNavigation } from "react-router-dom";
import "../assets/styles/root.scss";

const RootLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
