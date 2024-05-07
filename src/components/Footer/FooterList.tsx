import React, { Fragment } from "react";
import "../../assets/styles/Footer/footer-list.scss";

interface Link {
  id: string;
  name: string;
}

interface FooterListProps {
  footerTitle: string;
  links: Link[];
}

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
