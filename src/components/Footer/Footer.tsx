import React from "react";
import "../../assets/styles/Footer/footer.scss";
import FooterBox from "../Footer/FooterBox";
import FooterList from "../Footer/FooterList";

/* Define the structure of the links using TypeScript interface - so 
interface Link defines a type individual links with 'id' and name. */
interface Link {
  // Adding an 'id' for key usage
  id: string;
  name: string;
}

/*  Defines a type for groups of links including a 
title for the group (footerTitle) and an array of 
Link objects (links). */
interface FooterLinkGroup {
  footerTitle: string;
  links: Link[];
}

// Data with unique 'id' for each link
const footerLinks: FooterLinkGroup[] = [
  {
    footerTitle: "Quick Links",
    links: [
      { id: "home", name: "Home" },
      { id: "about", name: "About" },
      { id: "gallery", name: "Ideas Gallery" },
      { id: "contact", name: "Get in touch" },
    ],
  },
  {
    footerTitle: "Design",
    links: [
      { id: "design_process", name: "Design Process" },
      { id: "manufacturing_process", name: "Manufacturing Process" },
      { id: "consultancy", name: "Design Advice / Consultancy" },
      { id: "reverse_engineering", name: "Reverse Engineering" },
      { id: "prototype_design", name: "Prototype Design" },
    ],
  },
  {
    footerTitle: "Manufacturing",
    links: [
      { id: "on_demand", name: "On Demand Manufacturing" },
      { id: "prototype_manufacturing", name: "Prototype Manufacturing" },
    ],
  },
  {
    footerTitle: "Material Selection",
    links: [
      { id: "standard_aesthetic", name: "Standard and Aesthetic" },
      { id: "engineering", name: "Engineering" },
      { id: "flexible", name: "Flexible" },
      { id: "fiber_reinforced", name: "Fiber Reinforced" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <FooterBox />
        <div className="footer__about">
          <p className="footer__title mb-md">About</p>
          <p className="footer__text mb-sm">
            We are a design and manufacturing engineer specializing in 3D
            printing. We offer exceptional design for 3D printing services, from
            initial idea to prototyping and manufacturing of one-off parts.
          </p>
          <p className="footer__text">
            Our expertise and dedication set us apart in this industry, ensuring
            top-quality results for our clients.
          </p>
        </div>
        {footerLinks.map((footerLink) => (
          <FooterList
            key={footerLink.footerTitle.replace(/\s+/g, "_").toLowerCase()}
            footerTitle={footerLink.footerTitle}
            links={footerLink.links}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;

/* {footerLinks.map((footerLink) => ( — This line begins a map operation 
  on the footerLinks array, creating a list component for each group. */

/* .map() is a JavaScript array method that creates a new array with the 
results of calling a function for every array element. In React, it's 
commonly used for rendering lists of components based on data arrays. */

/* Render a FooterList for each group of links.

key={footerLink.footerTitle.replace(/\s+/g, "_").toLowerCase()} — React uses 
key to manage which items in the list are added, changed, or removed (used 
here to create a unique key from the footer title by replacing spaces with
underscores and converting to lower case).

footerTitle={footerLink.footerTitle} — Passes the title of the link group.

links={footerLink.links} — Passes the array of links for each group. Remember its an
array */

/* In Footer.tsx, each FooterList component instance is created by mapping over 
the footerLinks array, passing the footerTitle and links to each FooterList. 
This way, each group of links specified in the footerLinks array will be 
displayed under its respective title. */

/* {footerLinks.map((footerLink) => (
  <FooterList
    key={footerLink.footerTitle.replace(/\s+/g, "_").toLowerCase()}
    footerTitle={footerLink.footerTitle}
    links={footerLink.links}
  />
))} */

/* This code dynamically generates multiple FooterList components based on the 
data provided in the footerLinks array. Each FooterList is responsible 
for rendering a block or section of the footer, displaying a title and a 
list of links under that title.
By using map() in this way, the code efficiently creates complex HTML structures 
from simple data models, integrating seamlessly into React's declarative UI paradigm. 
Each FooterList receives its necessary data as props and takes care of rendering 
that data as a part of the larger footer.*/

/* In summary, the map() function in the Footer.tsx is traditionally mapping through 
the footerLinks object, transforming each item in the array not into another data 
structure, but into a JSX component (FooterList) that is capable of rendering the
 data as part of the React component tree. This is a common pattern in React for 
 rendering lists of components based on data arrays. */
