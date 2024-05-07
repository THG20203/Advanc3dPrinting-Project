import React from "react";
import "../../assets/styles/Footer/footer.scss";
import FooterBox from "../Footer/FooterBox";
import FooterList from "../Footer/FooterList";

// Define the structure of the links using TypeScript interface, if not already defined
interface Link {
  // Adding an 'id' for key usage
  id: string;
  name: string;
}

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
