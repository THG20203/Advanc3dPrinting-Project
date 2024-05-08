import React, { Fragment } from "react";
import "../../assets/styles/Footer/footer-list.scss";

interface Link {
  id: string;
  name: string;
}

/* Defines the properties that the FooterList component will accept: footerTitle, 
a string for the title of the list, and links, an array of Link objects. */
interface FooterListProps {
  footerTitle: string;
  links: Link[];
}

/* const FooterList: React.FC<FooterListProps> = ({ footerTitle, links }) — This
is a functional component of React, where React.FC<FooterListProps> is a TypeScript 
generic to type-check the props. The component receives footerTitle and links 
as its properties, destructured directly from props. */
const FooterList: React.FC<FooterListProps> = ({ footerTitle, links }) => {
  return (
    <Fragment>
      <div className="footer__list">
        <p className="footer__title mb-md">{footerTitle}</p>
        <ul>
          {links.map((link) => (
            <li key={link.id} className="footer__text mb-sm">
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default FooterList;

/*{links.map((link) => ( — Starts a map operation on the links array to dynamically 
  create list items (<li>) for each link. key={link.id} — Each child in a list 
  should have a unique "key" prop, here it's the id from each link, crucial for 
  React's re-rendering performance.  */

/* Therefore, the map function in FooterList.tsx is crucial for rendering each 
  link as a separate list item within the specified group, providing the necessary 
  structure and styling as defined. This ensures that the footer of your website 
  can display varied groups of links organized and styled according to the design 
  requirements. */

/* In React, map() is primarily used to iterate over an array and transform each element 
into a JSX element or another component. When rendering lists of data in React, such 
as a list of links in a footer, each piece of data (in your case, each link) needs 
to be transformed into a JSX element. This is necessary because React needs to return 
JSX to the DOM from its components. */

/* 
When FooterList receives the links array, each link is already an object in the array 
format. However, to convert these objects into actual HTML elements that can be 
displayed on the web page (like <li> tags in your case), the map() function is used. 

Inside the map() function, you take each link object, extract its properties (id and name), 
and then create an <li> element for each one. The properties of each link object are 
used to populate the content and assign keys to these <li> elements

{links.map((link) => (
  <li key={link.id} className="footer__text mb-sm">
    {link.name}
  </li>
))}
*/

/* rather than "destructuring" in the sense of breaking a structure down, map() here 
is used for transforming the structured data (the array of link objects) into structured 
JSX elements. Each iteration of map() takes one structured item (an object in the array) 
and converts it into another structured form (a JSX element). */
